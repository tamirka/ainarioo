
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import ArticlePage from './components/ArticlePage';
import ServicesPage from './components/ServicesPage';
import HowItWorksPage from './components/HowItWorksPage';
import PortfolioPage from './components/PortfolioPage';
import ContactPage from './components/ContactPage';
import { fetchBlogPosts } from './services/blogService';
import type { BlogPost } from './types';

const App: React.FC = () => {
    const [page, setPage] = useState({ name: 'home', slug: null as string | null });
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                setLoading(true);
                const fetchedPosts = await fetchBlogPosts();
                setPosts(fetchedPosts);
            } catch (err) {
                setError('Failed to load blog articles. Please try again later.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadPosts();
    }, []);

    const navigate = (name: string, slug: string | null = null) => {
        setPage({ name, slug });
        window.scrollTo(0, 0);
    };
    
    useEffect(() => {
        switch (page.name) {
            case 'home':
                document.title = 'Ainario: Scenario for all';
                break;
            case 'services':
                document.title = 'Our Services | Ainario';
                break;
            case 'how-it-works':
                document.title = 'How It Works | Ainario';
                break;
            case 'portfolio':
                document.title = 'Our Portfolio | Ainario';
                break;
            case 'contact':
                document.title = 'Contact Us | Ainario';
                break;
            case 'blog':
                document.title = 'Blog | Ainario';
                break;
            case 'article':
                if (loading) {
                    document.title = 'Loading Article... | Ainario';
                } else {
                    const article = posts.find(p => p.slug === page.slug);
                    document.title = article ? `${article.title} | Ainario` : 'Article Not Found | Ainario';
                }
                break;
            default:
                document.title = 'Ainario: Scenario for all';
        }
    }, [page, posts, loading]);

    const renderPage = () => {
        switch (page.name) {
            case 'services':
                return <ServicesPage />;
            case 'how-it-works':
                return <HowItWorksPage />;
            case 'portfolio':
                return <PortfolioPage />;
            case 'contact':
                return <ContactPage />;
            case 'blog':
                return <BlogPage navigate={navigate} posts={posts} loading={loading} error={error} />;
            case 'article':
                return <ArticlePage slug={page.slug} navigate={navigate} posts={posts} loading={loading} />;
            case 'home':
            default:
                return (
                    <>
                        <Hero navigate={navigate} />
                        <Services />
                        <HowItWorks />
                        <Portfolio />
                        <Blog navigate={navigate} posts={posts} loading={loading} />
                        <ContactForm />
                    </>
                );
        }
    };

    return (
        <div className="bg-gray-900 text-gray-200 antialiased">
            <Header navigate={navigate} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
};

export default App;
