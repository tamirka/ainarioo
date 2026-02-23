
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
import ToolsPage from './components/ToolsPage';
import TemplatesPage from './components/TemplatesPage';
import DoctorPromptGenerator from './components/Tools/DoctorPromptGenerator';
import DarijaAudioTool from './components/Tools/DarijaAudioTool';
import AdminDashboard from './components/Admin/AdminDashboard';
import { fetchBlogPosts } from './services/blogService';
import { updateMetaTags } from './utils/seo';
import { trackPageView } from './utils/analytics';
import type { BlogPost } from './types';

interface PageState {
    name: string;
    slug: string | null;
}

const App: React.FC = () => {
    const [page, setPage] = useState<PageState>({ name: 'home', slug: null });
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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

    useEffect(() => {
        loadPosts();
    }, []);

    const navigate = (name: string, slug: string | null = null) => {
        setPage({ name, slug });
        window.scrollTo(0, 0);
        // If navigating back to blog or home, reload posts to see changes from admin
        if (name === 'blog' || name === 'home') {
            loadPosts();
        }
    };
    
    useEffect(() => {
        const defaultDescription = "We build AI-powered apps, bots, and tools—all done for you, no tech skills required. Your vision, our expertise.";
        const defaultImage = "https://picsum.photos/seed/ainario/1200/630";

        let title = 'Ainario: Scenario for all';
        let description = defaultDescription;
        let image = defaultImage;
        let pagePath = '/';

        switch (page.name) {
            case 'home':
                // Uses defaults
                break;
            case 'services':
                title = 'Our Services | Ainario';
                description = "Explore our custom AI solutions, from 24/7 customer support chatbots to social media automation and industry-specific smart tools.";
                pagePath = '/services';
                break;
            case 'how-it-works':
                title = 'How It Works | Ainario';
                description = "Our simple 3-step process takes your vision and turns it into a powerful, ready-to-launch AI solution without any technical headaches.";
                pagePath = '/how-it-works';
                break;
            case 'portfolio':
                title = 'Our Portfolio | Ainario';
                description = "See our AI in action. Explore case studies and examples of the custom AI applications, bots, and tools we've delivered for clients.";
                pagePath = '/portfolio';
                break;
            case 'tools':
                title = 'Our Tools | Ainario';
                description = "Explore our suite of AI-powered tools designed to streamline your workflow and boost productivity.";
                pagePath = '/tools';
                break;
            case 'tool-doctor-prompt':
                title = 'Medical Landing Page Prompt Generator | Ainario';
                description = "Generate a complete, ready-to-publish landing page prompt for doctors and medical clinics with zero placeholders.";
                pagePath = '/tools/doctor-prompt';
                break;
            case 'tool-darija-audio':
                title = 'Darija Audio Studio | Ainario';
                description = "Transcribe Moroccan Darija audio, edit the text, and generate new voiceovers using Gemini AI.";
                pagePath = '/tools/darija-audio';
                break;
            case 'templates':
                title = 'Templates | Ainario';
                description = "Jumpstart your projects with our collection of pre-built AI templates and workflows.";
                pagePath = '/templates';
                break;
            case 'contact':
                title = 'Contact Us | Ainario';
                description = "Ready to build your AI? Share your vision with us and get a free, no-obligation quote and a roadmap to bring your idea to life.";
                pagePath = '/contact';
                break;
            case 'blog':
                title = 'Blog | Ainario';
                description = "Stay updated with the latest trends in AI, case studies of our work, and expert opinions from our team at Ainario.";
                pagePath = '/blog';
                break;
            case 'admin':
                title = 'Admin Dashboard | Ainario';
                description = "Manage blog posts and content.";
                pagePath = '/admin';
                break;
            case 'article':
                if (loading) {
                    title = 'Loading Article... | Ainario';
                    description = 'Please wait while we load the article.';
                } else {
                    const article = posts.find(p => p.slug === page.slug);
                    if (article) {
                        title = `${article.title} | Ainario`;
                        description = article.excerpt;
                        image = article.imageUrl;
                        pagePath = `/blog/${article.slug}`;
                    } else {
                        title = 'Article Not Found | Ainario';
                        description = 'The article you are looking for could not be found.';
                        pagePath = `/blog/not-found`;
                    }
                }
                break;
            default:
                title = 'Ainario: Scenario for all';
        }
        
        // Update meta tags for SEO and social sharing
        updateMetaTags(title, description, image, pagePath.substring(1));

        // Track the page view in Google Analytics
        trackPageView(pagePath, title);

    }, [page, posts, loading]);

    const renderPage = () => {
        switch (page.name) {
            case 'services':
                return <ServicesPage />;
            case 'how-it-works':
                return <HowItWorksPage />;
            case 'portfolio':
                return <PortfolioPage />;
            case 'tools':
                return <ToolsPage navigate={navigate} />;
            case 'tool-doctor-prompt':
                return <DoctorPromptGenerator navigate={navigate} />;
            case 'tool-darija-audio':
                return <DarijaAudioTool navigate={navigate} />;
            case 'templates':
                return <TemplatesPage />;
            case 'contact':
                return <ContactPage />;
            case 'blog':
                return <BlogPage navigate={navigate} posts={posts} loading={loading} error={error} />;
            case 'article':
                return <ArticlePage slug={page.slug} navigate={navigate} posts={posts} loading={loading} />;
            case 'admin':
                return <AdminDashboard navigate={navigate} />;
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
            <Footer navigate={navigate} />
        </div>
    );
};

export default App;
