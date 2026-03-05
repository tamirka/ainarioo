
import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
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
import TemplateDetailPage from './components/TemplateDetailPage';
import DoctorPromptGenerator from './components/Tools/DoctorPromptGenerator';
import DarijaAudioTool from './components/Tools/DarijaAudioTool';
import AdminDashboard from './components/Admin/AdminDashboard';
import { fetchBlogPosts } from './services/blogService';
import { updateMetaTags } from './utils/seo';
import { trackPageView } from './utils/analytics';
import type { BlogPost } from './types';

const App: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

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

    // Wrapper for legacy navigation prop
    const handleNavigate = (name: string, slug: string | null = null) => {
        window.scrollTo(0, 0);
        
        switch (name) {
            case 'home':
                navigate('/');
                break;
            case 'services':
                navigate('/services');
                break;
            case 'how-it-works':
                navigate('/how-it-works');
                break;
            case 'portfolio':
                navigate('/portfolio');
                break;
            case 'tools':
                navigate('/tools');
                break;
            case 'tool-doctor-prompt':
                navigate('/tools/doctor-prompt');
                break;
            case 'tool-darija-audio':
                navigate('/tools/darija-audio');
                break;
            case 'templates':
                navigate('/templates');
                break;
            case 'template-detail':
                if (slug) navigate(`/template/${slug}`);
                break;
            case 'contact':
                navigate('/contact');
                break;
            case 'blog':
                navigate('/blog');
                break;
            case 'article':
                if (slug) navigate(`/blog/${slug}`);
                break;
            case 'admin':
                navigate('/admin');
                break;
            default:
                navigate('/');
        }
    };
    
    useEffect(() => {
        const defaultDescription = "We build AI-powered apps, bots, and tools—all done for you, no tech skills required. Your vision, our expertise.";
        const defaultImage = "https://picsum.photos/seed/ainario/1200/630";

        let title = 'Ainario: Scenario for all';
        let description = defaultDescription;
        let image = defaultImage;
        const pagePath = location.pathname;

        if (pagePath === '/') {
            // Home defaults
        } else if (pagePath === '/services') {
            title = 'Our Services | Ainario';
            description = "Explore our custom AI solutions, from 24/7 customer support chatbots to social media automation and industry-specific smart tools.";
        } else if (pagePath === '/how-it-works') {
            title = 'How It Works | Ainario';
            description = "Our simple 3-step process takes your vision and turns it into a powerful, ready-to-launch AI solution without any technical headaches.";
        } else if (pagePath === '/portfolio') {
            title = 'Our Portfolio | Ainario';
            description = "See our AI in action. Explore case studies and examples of the custom AI applications, bots, and tools we've delivered for clients.";
        } else if (pagePath === '/tools') {
            title = 'Our Tools | Ainario';
            description = "Explore our suite of AI-powered tools designed to streamline your workflow and boost productivity.";
        } else if (pagePath === '/tools/doctor-prompt') {
            title = 'Medical Landing Page Prompt Generator | Ainario';
            description = "Generate a complete, ready-to-publish landing page prompt for doctors and medical clinics with zero placeholders.";
        } else if (pagePath === '/tools/darija-audio') {
            title = 'Darija Audio Studio | Ainario';
            description = "Transcribe Moroccan Darija audio, edit the text, and generate new voiceovers using Gemini AI.";
        } else if (pagePath === '/templates') {
            title = 'Templates | Ainario';
            description = "Jumpstart your projects with our collection of pre-built AI templates and workflows.";
        } else if (pagePath.startsWith('/template/')) {
            title = 'Template Details | Ainario';
            // Template details meta tags are handled in the component
        } else if (pagePath === '/contact') {
            title = 'Contact Us | Ainario';
            description = "Ready to build your AI? Share your vision with us and get a free, no-obligation quote and a roadmap to bring your idea to life.";
        } else if (pagePath === '/blog') {
            title = 'Blog | Ainario';
            description = "Stay updated with the latest trends in AI, case studies of our work, and expert opinions from our team at Ainario.";
        } else if (pagePath === '/admin') {
            title = 'Admin Dashboard | Ainario';
            description = "Manage blog posts and content.";
        } else if (pagePath.startsWith('/blog/')) {
            // Article meta tags handled here or in component
            if (loading) {
                title = 'Loading Article... | Ainario';
            } else {
                const slug = pagePath.split('/').pop();
                const article = posts.find(p => p.slug === slug);
                if (article) {
                    title = `${article.title} | Ainario`;
                    description = article.excerpt;
                    image = article.imageUrl;
                } else {
                    title = 'Article Not Found | Ainario';
                    description = 'The article you are looking for could not be found.';
                }
            }
        }
        
        // Update meta tags for SEO and social sharing
        updateMetaTags(title, description, image, pagePath.substring(1));

        // Track the page view in Google Analytics
        trackPageView(pagePath, title);

    }, [location, posts, loading]);

    return (
        <div className="bg-gray-900 text-gray-200 antialiased">
            <Header navigate={handleNavigate} />
            <main>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero navigate={handleNavigate} />
                            <Services />
                            <HowItWorks />
                            <Portfolio />
                            <Blog navigate={handleNavigate} posts={posts} loading={loading} />
                            <ContactForm />
                        </>
                    } />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/how-it-works" element={<HowItWorksPage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/tools" element={<ToolsPage navigate={handleNavigate} />} />
                    <Route path="/tools/doctor-prompt" element={<DoctorPromptGenerator navigate={handleNavigate} />} />
                    <Route path="/tools/darija-audio" element={<DarijaAudioTool navigate={handleNavigate} />} />
                    <Route path="/templates" element={<TemplatesPage navigate={handleNavigate} />} />
                    <Route path="/template/:slug" element={<TemplateDetailPageWrapper navigate={handleNavigate} />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage navigate={handleNavigate} posts={posts} loading={loading} error={error} />} />
                    <Route path="/blog/:slug" element={<ArticlePageWrapper navigate={handleNavigate} posts={posts} loading={loading} />} />
                    <Route path="/admin" element={<AdminDashboard navigate={handleNavigate} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
            <Footer navigate={handleNavigate} />
        </div>
    );
};

// Wrapper components to handle params
import { useParams } from 'react-router-dom';

const TemplateDetailPageWrapper: React.FC<{ navigate: (page: string, slug?: string | null) => void }> = ({ navigate }) => {
    const { slug } = useParams<{ slug: string }>();
    return slug ? <TemplateDetailPage slug={slug} navigate={navigate} /> : <Navigate to="/templates" replace />;
};

const ArticlePageWrapper: React.FC<{ navigate: (page: string, slug?: string | null) => void, posts: BlogPost[], loading: boolean }> = ({ navigate, posts, loading }) => {
    const { slug } = useParams<{ slug: string }>();
    return slug ? <ArticlePage slug={slug} navigate={navigate} posts={posts} loading={loading} /> : <Navigate to="/blog" replace />;
};

export default App;
