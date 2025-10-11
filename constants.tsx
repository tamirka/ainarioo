
import React from 'react';
import type { Service, HowItWorksStep, PortfolioItem, BlogPost } from './types';

// --- ICONS ---
export const ChatIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
);
export const SocialIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
);
export const ToolsIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
);
export const EcommerceIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div>
);
export const CreatorsIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div>
);
export const BrandIcon = () => (
    <div className="bg-cyan-900/50 p-3 rounded-lg inline-block"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
);

// --- SERVICES DATA ---
export const services: Service[] = [
    {
        icon: <ChatIcon />,
        title: 'AI Chatbots for Customer Support',
        description: 'Engage customers 24/7, answer questions instantly, and reduce your support workload with intelligent, human-like chatbots.',
    },
    {
        icon: <SocialIcon />,
        title: 'Social Media & Content Automation',
        description: 'Generate creative posts, schedule content, and analyze performance across platforms, all powered by AI to grow your brand.',
    },
    {
        icon: <ToolsIcon />,
        title: 'Smart Tools for Your Industry',
        description: 'From AI diagnostic aids for doctors to menu recommenders for restaurants, we build bespoke tools that solve your unique challenges.',
    },
    {
        icon: <EcommerceIcon />,
        title: 'AI for E-commerce & Shops',
        description: 'Increase sales with personalized product recommendations, automated inventory management, and AI-powered sales analytics.',
    },
    {
        icon: <CreatorsIcon />,
        title: 'Solutions for Creators & Coaches',
        description: 'Automate client onboarding, generate personalized coaching plans, and create engaging content to scale your personal brand.',
    },
    {
        icon: <BrandIcon />,
        title: 'Branded to YOUR Business',
        description: 'Every solution we create is fully white-labeled and integrated seamlessly with your existing brand identity and platforms.',
    },
];


// --- HOW IT WORKS DATA ---
export const howItWorksSteps: HowItWorksStep[] = [
    {
        step: 1,
        title: 'Share Your Vision',
        description: 'It all starts with your idea. Schedule a free consultation and tell us what you want to achieve. No technical jargon needed.'
    },
    {
        step: 2,
        title: 'We Design & Build',
        description: 'Our expert team gets to work, handling all the complex AI modeling, development, and integration. We provide updates along the way.'
    },
    {
        step: 3,
        title: 'Launch Your AI',
        description: 'We deploy your new AI tool, provide full training, and ensure it’s running perfectly. You get a powerful AI solution, ready to go.'
    }
];


// --- PORTFOLIO DATA ---
export const portfolioItems: PortfolioItem[] = [
    { id: 1, title: 'Ainario Landing Page', description: 'A fully-featured landing page for Ainario, an agency that builds AI-powered apps, bots, and tools for businesses without requiring them to have technical skills.', imageUrl: 'https://picsum.photos/seed/ainario/600/400', tags: ['Landing Page', 'Web Dev', 'AI Agency'], modifiedDate: '8/13/25' },
    { id: 2, title: 'Cinematic Horror Prompt Director', description: 'An expert system that transforms short horror concepts into detailed cinematic storyboards and optimized AI video prompts for various generation models, using professional filmmaking knowledge.', imageUrl: 'https://picsum.photos/seed/horrorprompt/600/400', tags: ['AI Video', 'Prompt Engineering', 'Horror'], modifiedDate: '8/11/25' },
    { id: 3, title: 'Kinetic Typography Director Assistant', description: 'An expert assistant that helps create cinematic, professional, and emotionally impactful kinetic typography (text animation) videos by generating detailed prompts for AI video generators.', imageUrl: 'https://picsum.photos/seed/kinetictype/600/400', tags: ['Animation', 'AI Video', 'Typography'], modifiedDate: '8/11/25' },
    { id: 4, title: 'Soundwave Animation Director', description: 'An AI assistant to help you generate creative, high-end prompts for sound-reactive animation videos. Define your vision, and get a professional-level script for motion designers or AI video tools.', imageUrl: 'https://picsum.photos/seed/soundwave/600/400', tags: ['AI Video', 'Animation', 'Creative Tools'], modifiedDate: '8/11/25' },
    { id: 5, title: 'CCTV Prompt Generator', description: 'Generate realistic, surveillance-style video prompts for CCTV footage using AI. Describe scenes as if they were recorded by security cameras in various environments.', imageUrl: 'https://picsum.photos/seed/cctvprompt/600/400', tags: ['Video Generation', 'AI Tools', 'Security'], modifiedDate: '8/11/25' },
    { id: 6, title: 'CCTV Scene Analyzer', description: 'A modern interface that simulates a CCTV monitoring system. Users can select a video feed and use an AI prompt to analyze and describe the contents of the scene in near real-time.', imageUrl: 'https://picsum.photos/seed/cctvanalyzer/600/400', tags: ['Video Analysis', 'Real-time AI', 'Security'], modifiedDate: '8/11/25' },
    { id: 7, title: 'Viral Tweet Generator', description: 'An AI-powered assistant to help you craft viral tweets and threads in the style of top tech creators. Just enter a topic and let the AI do the rest.', imageUrl: 'https://picsum.photos/seed/tweetgen/600/400', tags: ['Social Media', 'Content Creation', 'AI Writer'], modifiedDate: '8/11/25' },
    { id: 8, title: 'AI App Promo Prompt Generator', description: 'Upload a screenshot of your application to generate a detailed, cinematic prompt for AI video generators. This tool helps you create stunning app promo videos by crafting the perfect instructions for AI.', imageUrl: 'https://picsum.photos/seed/apppromo/600/400', tags: ['AI Video', 'Marketing', 'App Promotion'], modifiedDate: '8/10/25' },
    { id: 9, title: 'AI Storyboard Generator', description: 'An AI-powered application that takes a detailed music video storyboard and generates a visual shot-by-shot breakdown using generative AI to maintain a fluid and engaging narrative.', imageUrl: 'https://picsum.photos/seed/storyboard/600/400', tags: ['Storyboarding', 'Creative AI', 'Video Production'], modifiedDate: '8/8/25' },
    { id: 10, title: 'AI Voice Assistant', description: 'An AI-powered voice assistant that listens to your queries and responds verbally. It uses Gemini for intelligent conversation and the Web Speech API for voice recognition and synthesis.', imageUrl: 'https://picsum.photos/seed/voiceassist/600/400', tags: ['Voice AI', 'Gemini API', 'Web Speech'], modifiedDate: '8/8/25' },
    { id: 11, title: 'Jewelry AI Stylist', description: 'Generate AI models and preview your jewelry on them instantly. An AI-powered virtual try-on experience for jewelers.', imageUrl: 'https://picsum.photos/seed/jewelry/600/400', tags: ['E-commerce', 'Virtual Try-on', 'AI Models'], modifiedDate: '8/8/25' },
    { id: 12, title: 'n8n AI Workflow Builder', description: 'An AI-powered tool to help you visually construct n8n workflows by describing nodes in plain English. Generate the final JSON configuration ready to be imported into your n8n instance.', imageUrl: 'https://picsum.photos/seed/n8n/600/400', tags: ['Automation', 'n8n', 'Developer Tools'], modifiedDate: '8/8/25' },
    { id: 13, title: 'CineGen AI: AI Video Generator', description: 'Create professional AI-generated videos with CineGen. Our AI film studio helps you produce stunning logo animations, cinematic storyboards, YouTube intros, and more with unparalleled style consistency.', imageUrl: 'https://picsum.photos/seed/cinegen/600/400', tags: ['Video Generation', 'Cinematic AI', 'Brand Assets'], modifiedDate: '8/8/25' },
    { id: 14, title: 'Yazbox', description: 'Yazbox is a responsive web application that serves as both a learning platform for packaging design and a B2B marketplace for related services.', imageUrl: 'https://picsum.photos/seed/yazbox/600/400', tags: ['B2B Marketplace', 'E-learning', 'Design'], modifiedDate: '8/8/25' },
    { id: 15, title: 'Health Companion', description: 'A modern health-tech application to manage appointments, view medical records, and get AI-powered specialist suggestions. It provides a seamless interface for users to track their health journey.', imageUrl: 'https://picsum.photos/seed/health/600/400', tags: ['HealthTech', 'AI Diagnostics', 'Patient Care'], modifiedDate: '8/7/25' },
    { id: 16, title: '3D Miniature Ancient Rome', description: 'A low-poly, block-style 3D scene of Ancient Rome, built with React and Three.js. The scene features a temple, an aqueduct, and a cypress tree, all slowly rotating to be viewed from all angles.', imageUrl: 'https://picsum.photos/seed/rome/600/400', tags: ['3D Graphics', 'Three.js', 'React'], modifiedDate: '8/7/25' },
];

// --- BLOG DATA ---
export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: '5 Ways AI Chatbots Can Revolutionize Your Customer Service',
        slug: '5-ways-ai-chatbots-revolutionize-customer-service',
        excerpt: 'Discover how implementing AI-powered chatbots can lead to higher customer satisfaction, lower operational costs, and a more efficient support team.',
        imageUrl: 'https://picsum.photos/seed/blog1/1200/800',
        category: 'AI Chatbots',
        author: 'Jane Doe',
        authorImageUrl: 'https://i.pravatar.cc/40?u=jane',
        publishedDate: 'August 15, 2025',
        readingTime: '6 min read',
        content: `
            <p class="lead">In today's fast-paced digital world, customers expect instant answers and 24/7 support. For many businesses, meeting these expectations can be a significant challenge. This is where AI chatbots come in, offering a powerful solution to enhance customer service, improve efficiency, and drive satisfaction.</p>
            <p>Here are five key ways AI chatbots can revolutionize your customer service operations:</p>
            
            <h2>1. 24/7 Availability</h2>
            <p>Unlike human agents, AI chatbots never sleep. They can provide round-the-clock support to your customers, regardless of their time zone. This constant availability means that customer queries are addressed instantly, reducing frustration and improving the overall customer experience.</p>

            <h2>2. Instantaneous Responses</h2>
            <p>Customers hate waiting. AI chatbots can handle thousands of conversations simultaneously, providing immediate answers to frequently asked questions. This frees up human agents to focus on more complex and high-value issues that require a human touch.</p>

            <h2>3. Cost Reduction</h2>
            <p>Hiring and training a large customer support team can be expensive. By automating responses to common queries, chatbots significantly reduce the workload on your human agents, allowing you to operate with a leaner, more efficient team. This leads to substantial savings in operational costs over time.</p>

            <h2>4. Scalability</h2>
            <p>As your business grows, so does the volume of customer inquiries. AI chatbots are infinitely scalable. Whether you have ten customers or ten thousand, a chatbot can handle the load without any decline in performance, ensuring consistent service quality as you expand.</p>

            <h2>5. Data Collection and Insights</h2>
            <p>Every interaction a chatbot has with a customer is a valuable data point. By analyzing these conversations, you can gain deep insights into customer needs, pain points, and preferences. This data can be used to improve your products, services, and overall business strategy.</p>
        `,
    },
    {
        id: 2,
        title: 'Automating Your Social Media with AI: A Guide for Busy Entrepreneurs',
        slug: 'automating-social-media-with-ai',
        excerpt: 'Learn how to leverage AI tools to generate content ideas, schedule posts, and analyze your social media performance, saving you time and boosting engagement.',
        imageUrl: 'https://picsum.photos/seed/blog2/1200/800',
        category: 'Content Automation',
        author: 'John Smith',
        authorImageUrl: 'https://i.pravatar.cc/40?u=john',
        publishedDate: 'August 12, 2025',
        readingTime: '8 min read',
        content: `
            <p class="lead">For busy entrepreneurs, managing social media can feel like a full-time job. AI-powered tools can automate many of these tasks, freeing you up to focus on growing your business while maintaining a strong online presence.</p>
            <p>Here’s how you can leverage AI to supercharge your social media strategy:</p>
            
            <h2>Content Generation</h2>
            <p>Struggling with writer's block? AI tools can generate post ideas, write compelling captions, and even create entire articles based on a simple prompt. This ensures you always have a pipeline of fresh, engaging content for your audience.</p>

            <h2>Smart Scheduling</h2>
            <p>AI can analyze your audience's online behavior to determine the optimal times to post for maximum engagement. These tools can automatically schedule your content to go live when your followers are most active, increasing your reach and impact.</p>
            
            <h2>Performance Analytics</h2>
            <p>Go beyond simple metrics like likes and shares. AI-powered analytics tools can provide deep insights into your social media performance, identifying which content resonates most with your audience and offering data-driven recommendations for improvement.</p>
        `,
    },
    {
        id: 3,
        title: 'Is a Custom AI Tool Right for Your Business? Here\'s How to Decide',
        slug: 'custom-ai-tool-for-your-business',
        excerpt: 'From initial idea to final implementation, we break down the costs, benefits, and key considerations for commissioning a bespoke AI solution for your company.',
        imageUrl: 'https://picsum.photos/seed/blog3/1200/800',
        category: 'Business AI',
        author: 'Emily White',
        authorImageUrl: 'https://i.pravatar.cc/40?u=emily',
        publishedDate: 'August 10, 2025',
        readingTime: '5 min read',
        content: `
            <p class="lead">While off-the-shelf AI solutions are plentiful, a custom-built tool can provide a significant competitive advantage by addressing your unique business challenges. But how do you know if it's the right move for you?</p>
            
            <h2>Evaluating the Need</h2>
            <p>Start by identifying a specific, high-impact problem in your business that could be solved with automation or intelligence. Is there a repetitive task that consumes significant manpower? Is there a complex decision-making process that could be optimized with data?</p>

            <h2>Understanding the Benefits</h2>
            <p>A custom AI solution can be tailored to your exact workflow, integrate seamlessly with your existing systems, and provide you with proprietary insights that your competitors don't have. This can lead to increased efficiency, reduced costs, and new revenue opportunities.</p>
            
            <h2>Considering the Investment</h2>
            <p>Building a custom AI tool is an investment. It's important to have a clear understanding of the potential return on that investment. At Ainario, we work with you to define the scope, create a roadmap, and provide a transparent quote to ensure your custom AI solution delivers real value to your business.</p>
        `,
    },
    {
        id: 4,
        title: 'The Future of E-commerce: AI-Powered Personalization',
        slug: 'future-of-ecommerce-ai-personalization',
        excerpt: 'Discover how AI is transforming the online shopping experience with personalized recommendations, dynamic pricing, and intelligent inventory management.',
        imageUrl: 'https://picsum.photos/seed/blog4/1200/800',
        category: 'E-commerce',
        author: 'John Smith',
        authorImageUrl: 'https://i.pravatar.cc/40?u=john',
        publishedDate: 'August 5, 2025',
        readingTime: '7 min read',
        content: `
            <p class="lead">The one-size-fits-all approach to e-commerce is dead. Today's consumers expect personalized experiences that cater to their unique tastes and preferences. Artificial Intelligence is the driving force behind this shift.</p>

            <h2>Personalized Product Recommendations</h2>
            <p>AI algorithms can analyze a user's browsing history, purchase behavior, and even demographic information to provide highly relevant product recommendations in real-time. This not only improves the customer experience but also significantly boosts conversion rates and average order value.</p>
            
            <h2>Dynamic Pricing Strategies</h2>
            <p>AI can analyze market trends, competitor pricing, and customer demand to automatically adjust your prices for optimal profitability. This allows you to stay competitive while maximizing your margins without constant manual intervention.</p>

            <h2>Intelligent Inventory Management</h2>
            <p>Predictive analytics, powered by AI, can forecast future demand with remarkable accuracy. This helps e-commerce businesses optimize their inventory levels, preventing stockouts of popular items and avoiding overstocking of products that aren't selling.</p>
        `,
    },
    {
        id: 5,
        title: 'How AI Can Help Coaches and Creators Scale Their Business',
        slug: 'ai-for-coaches-and-creators',
        excerpt: 'Automate client onboarding, generate personalized content, and manage your community more effectively with custom AI tools designed for the creator economy.',
        imageUrl: 'https://picsum.photos/seed/blog5/1200/800',
        category: 'Creative Tools',
        author: 'Jane Doe',
        authorImageUrl: 'https://i.pravatar.cc/40?u=jane',
        publishedDate: 'August 1, 2025',
        readingTime: '6 min read',
        content: `
            <p class="lead">For coaches, consultants, and content creators, time is the most valuable asset. AI offers a suite of tools to automate administrative tasks and enhance your creative output, allowing you to focus on what you do best: serving your clients and audience.</p>

            <h2>Automated Client Onboarding</h2>
            <p>Imagine an AI assistant that can qualify leads, schedule discovery calls, and even handle initial client paperwork. Custom AI solutions can streamline your entire onboarding process, ensuring a smooth and professional experience for new clients while saving you hours of administrative work.</p>

            <h2>Personalized Content and Coaching Plans</h2>
            <p>AI can help you create tailored content for your audience at scale. Whether it's generating personalized workout plans for fitness clients or creating unique content pillars for your social media, AI can act as a powerful creative partner.</p>

            <h2>Community Management</h2>
            <p>An AI-powered chatbot can be an invaluable tool for managing online communities. It can answer common questions, welcome new members, and even flag inappropriate content, helping you maintain a positive and engaging environment for your followers.</p>
        `,
    },
];
