import React, { useState, useEffect } from 'react';
import { fetchBlogPosts, deleteBlogPost } from '../../services/blogService';
import type { BlogPost } from '../../types';
import { Plus, Edit, Trash2, ExternalLink, Loader2 } from 'lucide-react';
import PostEditor from './PostEditor';

interface AdminDashboardProps {
    navigate: (name: string, slug?: string | null) => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ navigate }) => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [editingPost, setEditingPost] = useState<BlogPost | null | 'new'>(null);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const fetchedPosts = await fetchBlogPosts();
            setPosts(fetchedPosts);
        } catch (err) {
            setError('Failed to load posts');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteBlogPost(id);
                setPosts(posts.filter(p => p.id !== id));
            } catch (err) {
                alert('Failed to delete post');
            }
        }
    };

    if (editingPost) {
        return (
            <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <button 
                        onClick={() => setEditingPost(null)}
                        className="mb-6 text-cyan-400 hover:text-cyan-300 flex items-center gap-2"
                    >
                        ← Back to Dashboard
                    </button>
                    <PostEditor 
                        post={editingPost === 'new' ? undefined : editingPost} 
                        onSave={() => {
                            setEditingPost(null);
                            loadPosts();
                        }}
                        onCancel={() => setEditingPost(null)}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-white">Blog Admin</h1>
                        <p className="text-gray-400 mt-1">Manage your blog articles</p>
                    </div>
                    <button
                        onClick={() => setEditingPost('new')}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        <Plus size={20} />
                        New Post
                    </button>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="animate-spin text-cyan-500" size={48} />
                    </div>
                ) : error ? (
                    <div className="bg-red-900/20 border border-red-900/50 text-red-400 p-4 rounded-lg">
                        {error}
                    </div>
                ) : (
                    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-gray-700/50 text-gray-300 text-sm uppercase tracking-wider">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Post</th>
                                    <th className="px-6 py-4 font-semibold">Category</th>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-700">
                                {posts.map((post) => (
                                    <tr key={post.id} className="hover:bg-gray-700/30 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-4">
                                                <img 
                                                    src={post.imageUrl} 
                                                    alt="" 
                                                    className="w-12 h-12 rounded object-cover bg-gray-700"
                                                />
                                                <div>
                                                    <div className="text-white font-medium">{post.title}</div>
                                                    <div className="text-gray-400 text-xs truncate max-w-xs">{post.excerpt}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="px-2 py-1 bg-cyan-900/30 text-cyan-400 text-xs rounded-full border border-cyan-800/50">
                                                {post.category}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-400 text-sm">
                                            {post.publishedDate}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    onClick={() => navigate('article', post.slug)}
                                                    className="p-2 text-gray-400 hover:text-white transition-colors"
                                                    title="View Live"
                                                >
                                                    <ExternalLink size={18} />
                                                </button>
                                                <button
                                                    onClick={() => setEditingPost(post)}
                                                    className="p-2 text-gray-400 hover:text-cyan-400 transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(post.id)}
                                                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {posts.length === 0 && (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                            No blog posts found. Create your first one!
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
