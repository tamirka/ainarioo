
import React from 'react';
import { motion } from 'motion/react';
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
        <section id="blog" className="py-32 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Blog
                    </motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6"
                    >
                        Insights & <span className="text-cyan-400">Articles</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Stay updated with the latest trends in AI, case studies of our work, and expert opinions from our team.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                     {loading ? (
                        Array.from({ length: 3 }).map((_, index) => <BlogCardSkeleton key={index} />)
                    ) : (
                        posts.slice(0, 3).map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <BlogCard post={post} navigate={navigate} />
                            </motion.div>
                        ))
                    )}
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-16"
                >
                     <button 
                        onClick={() => navigate('blog')}
                        className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95 backdrop-blur-sm"
                    >
                        View All Articles
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
