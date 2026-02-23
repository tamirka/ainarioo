import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { createBlogPost, updateBlogPost, uploadImage } from '../../services/blogService';
import type { BlogPost } from '../../types';
import { Save, X, Upload, Loader2, Image as ImageIcon } from 'lucide-react';

interface PostEditorProps {
    post?: BlogPost;
    onSave: () => void;
    onCancel: () => void;
}

const PostEditor: React.FC<PostEditorProps> = ({ post, onSave, onCancel }) => {
    const [title, setTitle] = useState(post?.title || '');
    const [excerpt, setExcerpt] = useState(post?.excerpt || '');
    const [content, setContent] = useState(post?.content || '');
    const [category, setCategory] = useState(post?.category || 'AI Trends');
    const [imageUrl, setImageUrl] = useState(post?.imageUrl || '');
    const [author, setAuthor] = useState(post?.author || 'Admin');
    const [isSaving, setIsSaving] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            const url = await uploadImage(file);
            setImageUrl(url);
        } catch (err) {
            alert('Failed to upload image');
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !content || !imageUrl) {
            alert('Please fill in all required fields (Title, Content, Featured Image)');
            return;
        }

        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        const postData = {
            title,
            slug,
            excerpt,
            content,
            category,
            imageUrl,
            author,
            authorImageUrl: post?.authorImageUrl || 'https://i.pravatar.cc/40?u=admin',
            readingTime: `${Math.ceil(content.split(' ').length / 200)} min read`,
        };

        try {
            setIsSaving(true);
            if (post) {
                await updateBlogPost(post.id, postData);
            } else {
                await createBlogPost(postData);
            }
            onSave();
        } catch (err) {
            alert('Failed to save post');
        } finally {
            setIsSaving(false);
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl border border-gray-700 p-6 space-y-6">
            <div className="flex justify-between items-center border-bottom border-gray-700 pb-4">
                <h2 className="text-xl font-bold text-white">
                    {post ? 'Edit Post' : 'Create New Post'}
                </h2>
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                    >
                        <X size={18} />
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                        {post ? 'Update Post' : 'Publish Post'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Title *</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                            placeholder="Enter post title..."
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Excerpt (Short Summary)</label>
                        <textarea
                            value={excerpt}
                            onChange={(e) => setExcerpt(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all h-24 resize-none"
                            placeholder="Briefly describe what this post is about..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Content *</label>
                        <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
                            <ReactQuill
                                theme="snow"
                                value={content}
                                onChange={setContent}
                                modules={modules}
                                className="text-white h-96"
                            />
                        </div>
                        <style>{`
                            .ql-toolbar.ql-snow { border-color: #374151; background: #1f2937; }
                            .ql-container.ql-snow { border-color: #374151; font-family: inherit; font-size: 1rem; }
                            .ql-editor.ql-blank::before { color: #6b7280; }
                            .ql-snow .ql-stroke { stroke: #9ca3af; }
                            .ql-snow .ql-fill { fill: #9ca3af; }
                            .ql-snow .ql-picker { color: #9ca3af; }
                        `}</style>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Featured Image *</label>
                        <div 
                            onClick={() => fileInputRef.current?.click()}
                            className="relative aspect-video bg-gray-900 border-2 border-dashed border-gray-700 rounded-xl overflow-hidden cursor-pointer hover:border-cyan-500 transition-all group"
                        >
                            {imageUrl ? (
                                <>
                                    <img src={imageUrl} alt="Featured" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Upload className="text-white" size={32} />
                                    </div>
                                </>
                            ) : (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                                    {isUploading ? (
                                        <Loader2 className="animate-spin text-cyan-500" size={32} />
                                    ) : (
                                        <>
                                            <ImageIcon size={32} className="mb-2" />
                                            <span className="text-sm">Click to upload</span>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleImageUpload} 
                            className="hidden" 
                            accept="image/*" 
                        />
                        <p className="text-xs text-gray-500 mt-2">Recommended size: 1200x800px</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                        >
                            <option>AI Trends</option>
                            <option>AI Chatbots</option>
                            <option>Content Automation</option>
                            <option>Business AI</option>
                            <option>E-commerce</option>
                            <option>Creative Tools</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none transition-all"
                        />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PostEditor;
