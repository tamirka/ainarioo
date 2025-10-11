
import React from 'react';
import type { BlogPost } from '../types';
import BlogCard from './BlogCard';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

interface BlogPageProps {
    navigate: NavigateFunction;
    posts: BlogPost[];
    loading: boolean;
    error: string | null;
}

const Spinner: React.FC = () => (
    <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
);

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => (
    <div className="text-center py-20 container mx-auto px-6">
        <p className="text-red-400 text-lg bg-red-900/20 border border-red-500/30 p-8 rounded-lg">{message}</p>
    </div>
);


const BlogPage: React.FC<BlogPageProps> = ({ navigate, posts, loading, error }) => {

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    const featuredPost = posts[0];
    const latestPosts = posts.slice(1);

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">From the Blog</h1>
                    <p className="mt-4 text-lg text-gray-400">
                        News, articles, and insights from our team on the world of artificial intelligence and custom business solutions.
                    </p>
                </div>

                {featuredPost && (
                    <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
                        <div className="overflow-hidden rounded-lg">
                             <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                        <div>
                            <span className="bg-cyan-900/70 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{featuredPost.category}</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">{featuredPost.title}</h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                            <div className="flex items-center gap-3 mb-6">
                                <img src={featuredPost.authorImageUrl} alt={featuredPost.author} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                                <div>
                                    <p className="font-semibold text-white">{featuredPost.author}</p>
                                    <p className="text-sm text-gray-500">
                                        <time dateTime={featuredPost.publishedDate}>{featuredPost.publishedDate}</time> &middot; {featuredPost.readingTime}
                                    </p>
                                </div>
                            </div>
                             <button 
                                onClick={() => navigate('article', featuredPost.slug)}
                                className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20"
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="container mx-auto px-6 mt-24">
                <h3 className="text-3xl font-bold tracking-tight text-white border-b border-gray-700 pb-4">More Articles</h3>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {latestPosts.map(post => (
                        <BlogCard key={post.id} post={post} navigate={navigate} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;
