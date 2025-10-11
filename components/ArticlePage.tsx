
import React from 'react';
import type { BlogPost } from '../types';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

interface ArticlePageProps {
    slug: string | null;
    navigate: NavigateFunction;
    posts: BlogPost[];
    loading: boolean;
}

const Spinner: React.FC = () => (
    <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
    </div>
);

const ArticlePage: React.FC<ArticlePageProps> = ({ slug, navigate, posts, loading }) => {
    if (loading) {
        return <Spinner />;
    }

    const article = posts.find(p => p.slug === slug);

    if (!article) {
        return (
             <section className="py-20 bg-gray-900 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold text-white">Article Not Found</h1>
                    <p className="text-gray-400 mt-4">The article you are looking for does not exist.</p>
                    <button 
                        onClick={() => navigate('blog')}
                        className="mt-8 bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
                    >
                        Back to Blog
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 md:py-20 bg-gray-900">
            <div className="container mx-auto px-6 max-w-4xl">
                <button 
                    onClick={() => navigate('blog')}
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group mb-8"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to all articles
                </button>

                <article>
                    <header className="mb-8">
                        <span className="bg-cyan-900/70 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{article.category}</span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 leading-tight">{article.title}</h1>
                         <div className="flex items-center gap-4 mt-6">
                            <img src={article.authorImageUrl} alt={article.author} className="w-12 h-12 rounded-full object-cover" loading="lazy" />
                            <div>
                                <p className="font-semibold text-white">{article.author}</p>
                                <p className="text-sm text-gray-500">
                                    <time dateTime={article.publishedDate}>{article.publishedDate}</time> &middot; {article.readingTime}
                                </p>
                            </div>
                        </div>
                    </header>
                    
                    <div className="rounded-lg overflow-hidden my-8 md:my-12">
                        <img src={article.imageUrl} alt={article.title} className="w-full h-auto object-cover" />
                    </div>

                    <div 
                        className="prose prose-invert lg:prose-xl max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-cyan-400 hover:prose-a:text-cyan-300"
                        dangerouslySetInnerHTML={{ __html: article.content }} 
                    />
                </article>
            </div>
        </section>
    );
};

export default ArticlePage;
