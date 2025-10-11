
import React from 'react';
import type { BlogPost } from '../types';
import BlogCard from './BlogCard';
import BlogCardSkeleton from './BlogCardSkeleton';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

interface BlogProps {
    navigate: NavigateFunction;
    posts: BlogPost[];
    loading: boolean;
}

const Blog: React.FC<BlogProps> = ({ navigate, posts, loading }) => {
    return (
        <section id="blog" className="py-20 bg-gray-900/70 bg-grid-pattern">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Insights & Articles from Ainario
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Stay updated with the latest trends in AI, case studies of our work, and expert opinions from our team.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                     {loading ? (
                        Array.from({ length: 3 }).map((_, index) => <BlogCardSkeleton key={index} />)
                    ) : (
                        posts.slice(0, 3).map(post => (
                            <BlogCard key={post.id} post={post} navigate={navigate} />
                        ))
                    )}
                </div>
                
                <div className="text-center mt-16">
                     <button 
                        onClick={() => navigate('blog')}
                        className="bg-gray-700/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 transition-all duration-300"
                    >
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Blog;
