
import React from 'react';
import type { BlogPost } from '../types';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

interface BlogCardProps {
    post: BlogPost;
    navigate: NavigateFunction;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, navigate }) => (
    <a 
        href={`/blog/${post.slug}`} 
        onClick={(e) => {
            e.preventDefault();
            navigate('article', post.slug);
        }}
        className="block bg-gray-800 rounded-lg overflow-hidden border border-gray-700/80 group transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500"
        aria-label={`Read article: ${post.title}`}
    >
        <article>
            <div className="overflow-hidden">
                <img src={post.imageUrl} alt="" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                <header>
                    <span className="bg-cyan-900/70 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{post.category}</span>
                    <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-cyan-400 transition-colors">{post.title}</h3>
                </header>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <footer className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-700/50">
                    <img src={post.authorImageUrl} alt={post.author} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                    <div>
                        <p className="font-semibold text-white text-sm">{post.author}</p>
                        <p className="text-xs text-gray-500">
                            <time dateTime={post.publishedDate}>{post.publishedDate}</time> &middot; {post.readingTime}
                        </p>
                    </div>
                </footer>
            </div>
        </article>
    </a>
);

export default BlogCard;
