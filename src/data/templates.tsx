import React from 'react';
import { 
  Camera, Recycle, Sparkles, BookOpen, Users, HelpCircle, 
  Calculator, ShoppingBag, PieChart, Activity, HeartPulse, 
  FileText, ShieldCheck, Briefcase, PenTool, Stethoscope, 
  Share2, Image as ImageIcon, ShoppingCart, Trophy, 
  Home, Video, Utensils, Search, ArrowRight, Star, Zap, Layout
} from 'lucide-react';
import { Template } from '../../types';

export const templates: Template[] = [
  {
    id: "cctv-prompt",
    title: "CCTV Prompt Gen",
    slug: "cctv-prompt-gen",
    subtitle: "Generate high quality CCTV prompts to help you generate the best sequence.",
    description: "Create realistic surveillance-style video prompts effortlessly. Whether for security training simulations, film production, or creative projects, this tool helps you craft detailed descriptions that generative AI models can turn into convincing CCTV footage.",
    category: "AI & Automation",
    icon: <Camera size={24} />,
    color: "bg-emerald-500",
    featured: true,
    link: "https://ai.studio/apps/drive/1OO5svbAy_o11ogOHQSdAwzGUqR0R_i46",
    image: "https://picsum.photos/seed/cctv/600/400",
    features: [
      "Realistic camera angles and grain effects",
      "Time-stamp and overlay customization",
      "Various environment settings (indoor/outdoor)",
      "Motion and activity descriptions"
    ]
  },
  {
    id: "ai-recycling",
    title: "AI Recycling",
    slug: "ai-recycling",
    subtitle: "Help you recycle your trash, analyse, teach, grow using our latest recycling solution.",
    description: "An intelligent assistant that identifies recyclable materials from images or descriptions. It provides local recycling guidelines, creative upcycling ideas, and educational content to help communities reduce waste.",
    category: "AI & Automation",
    icon: <Recycle size={24} />,
    color: "bg-green-500",
    link: "https://ai.studio/apps/drive/1QtdLvCdLQ81LJKPtsq1BMsEPo9AtUy93",
    image: "https://picsum.photos/seed/recycling/600/400",
    features: [
      "Image recognition for waste sorting",
      "Local recycling center locator",
      "Upcycling project generator",
      "Impact tracking dashboard"
    ]
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    slug: "ai-assistant",
    subtitle: "Your personal AI assistant to help you manage your daily tasks and boost productivity.",
    description: "A versatile personal assistant designed to streamline your workflow. From scheduling and email management to research and content drafting, this AI adapts to your working style.",
    category: "AI & Automation",
    icon: <Sparkles size={24} />,
    color: "bg-indigo-500",
    featured: true,
    features: [
      "Smart scheduling and reminders",
      "Email drafting and summarization",
      "Quick research and fact-checking",
      "Task prioritization"
    ]
  },
  {
    id: "ai-tutor-pro",
    title: "AI Tutor Pro",
    slug: "ai-tutor-pro",
    subtitle: "Personal AI teacher for different ages in different subjects and disciplines.",
    description: "A comprehensive educational platform that adapts to each student's learning pace. Covers subjects from K-12 to university level with interactive lessons and quizzes.",
    category: "Education",
    icon: <BookOpen size={24} />,
    color: "bg-blue-500",
    link: "https://ai.studio/apps/drive/1LQh_3cIlqEHvHQP7N1DeeDt6Kagnp3wD",
    image: "https://picsum.photos/seed/tutor/600/400",
    features: [
      "Personalized learning paths",
      "Interactive problem solving",
      "Progress tracking",
      "Multi-subject support"
    ]
  },
  {
    id: "lead-gen",
    title: "Lead Gen",
    slug: "lead-gen",
    subtitle: "Apex capture leads that qualifies visitors and book meetings.",
    description: "Automate your sales funnel with an intelligent lead capture system. It engages visitors, qualifies them based on your criteria, and schedules meetings directly into your calendar.",
    category: "Operations",
    icon: <Users size={24} />,
    color: "bg-blue-600",
    link: "https://ai.studio/apps/drive/1C-qgZhtuNNu48ak7nHR249acH90Z4KRs",
    image: "https://picsum.photos/seed/leadgen/600/400",
    features: [
      "Automated qualification workflows",
      "Calendar integration",
      "CRM syncing",
      "Visitor behavior analysis"
    ]
  },
  {
    id: "campus-quiz",
    title: "Campus Quiz",
    slug: "campus-quiz",
    subtitle: "Trivia Quiz for Moroccan schools and universities in different subjects.",
    description: "Engage students with a fun and competitive trivia platform tailored for the Moroccan curriculum. Perfect for exam preparation or classroom activities.",
    category: "Education",
    icon: <HelpCircle size={24} />,
    color: "bg-yellow-500",
    link: "https://ai.studio/apps/drive/1sgIniDeWtc0IylYi-Kh55ro4KcZ4ftx0",
    image: "https://picsum.photos/seed/quiz/600/400",
    features: [
      "Moroccan curriculum aligned",
      "Multiplayer mode",
      "Leaderboards and achievements",
      "Teacher dashboard"
    ]
  },
  {
    id: "finbook",
    title: "Finbook",
    slug: "finbook",
    subtitle: "Your personal bookkeeping agent that helps you edit, save, and record all transactions.",
    description: "Simplify your small business finances with an AI bookkeeper. Scan receipts, categorize expenses automatically, and generate financial reports with ease.",
    category: "Finance & Legal",
    icon: <Calculator size={24} />,
    color: "bg-blue-700",
    link: "https://ai.studio/apps/drive/1QchrnZ6TBb0uSONE5mVu8HdeGbAOAFB2",
    image: "https://picsum.photos/seed/finbook/600/400",
    features: [
      "Receipt scanning and OCR",
      "Automated categorization",
      "Tax preparation reports",
      "Expense tracking"
    ]
  },
  {
    id: "caftanchic",
    title: "Caftanchic",
    slug: "caftanchic",
    subtitle: "E-commerce shop for high fashion kaftan style.",
    description: "A specialized e-commerce platform for traditional and modern Kaftans. Features virtual try-on capabilities and detailed fabric visualization.",
    category: "E-commerce",
    icon: <ShoppingBag size={24} />,
    color: "bg-amber-700",
    link: "https://ai.studio/apps/drive/1gYYZLIlAUWBbBErjGnBq5SmX3h3vdx-z",
    image: "https://picsum.photos/seed/caftan/600/400",
    features: [
      "Virtual try-on",
      "Size recommendation AI",
      "High-res fabric zoom",
      "Secure checkout"
    ]
  },
  {
    id: "restaurant-cost",
    title: "Restaurant Cost Audit",
    slug: "restaurant-cost-audit",
    subtitle: "Manage ingredient cost of goods and inventory from one single place.",
    description: "Take control of your restaurant's profitability. Track ingredient prices, manage inventory levels, and calculate plate costs dynamically to ensure healthy margins.",
    category: "Operations",
    icon: <PieChart size={24} />,
    color: "bg-indigo-600",
    link: "https://ai.studio/apps/drive/18uyDgbKEvdxwxHDYKyqrrxOPFD40Pm-y",
    image: "https://picsum.photos/seed/restaurant/600/400",
    features: [
      "Real-time inventory tracking",
      "Recipe costing calculator",
      "Supplier price comparison",
      "Waste reduction analytics"
    ]
  },
  {
    id: "xray-analysis",
    title: "X-Ray Analysis",
    slug: "xray-analysis",
    subtitle: "Help you analyse your X-ray for educational purposes.",
    description: "An educational tool for medical students and professionals to practice interpreting X-rays. Uses AI to highlight potential anomalies and provide detailed explanations.",
    category: "Healthcare",
    icon: <Activity size={24} />,
    color: "bg-cyan-500",
    link: "https://ai.studio/apps/drive/1ff_e9w_x4G-iJlJlBBc3jN6T3xMH-UHG",
    image: "https://picsum.photos/seed/xray/600/400",
    features: [
      "Anomaly highlighting",
      "Detailed medical explanations",
      "Case study library",
      "Comparison tools"
    ]
  },
  {
    id: "vita-care",
    title: "Vita Care AI",
    slug: "vita-care-ai",
    subtitle: "The future of health management. Our Voice assistant for all your clinical needs.",
    description: "A comprehensive health management assistant that uses voice interaction to schedule appointments, remind you of medications, and answer general health queries.",
    category: "Healthcare",
    icon: <HeartPulse size={24} />,
    color: "bg-rose-500",
    featured: true,
    features: [
      "Voice-activated commands",
      "Medication reminders",
      "Symptom checker",
      "Appointment scheduling"
    ]
  },
  {
    id: "aipdfpro",
    title: "AI PDF Pro",
    slug: "ai-pdf-pro",
    subtitle: "PDF generator that turns text into professional PDFs in seconds.",
    description: "Create polished, professional PDF documents from plain text, markdown, or even rough notes. Ideal for reports, invoices, and ebooks.",
    category: "AI & Automation",
    icon: <FileText size={24} />,
    color: "bg-slate-700",
    link: "https://ai.studio/apps/drive/1CaJQBC9xNd1RGrU45H5G6lxHW9f2fs15",
    image: "https://picsum.photos/seed/pdf/600/400",
    features: [
      "Markdown support",
      "Customizable templates",
      "Automatic formatting",
      "Image embedding"
    ]
  },
  {
    id: "smart-contract",
    title: "Smart Contract Editor",
    slug: "smart-contract-editor",
    subtitle: "Automate blockchain contract auditing by uploading your contract.",
    description: "Ensure the security and efficiency of your smart contracts. This tool analyzes your code for vulnerabilities, gas optimization opportunities, and logic errors.",
    category: "Finance & Legal",
    icon: <ShieldCheck size={24} />,
    color: "bg-violet-600",
    link: "https://ai.studio/apps/drive/1TDsCOOk_kR0gorL48SgIrdeoshh4zfTx",
    image: "https://picsum.photos/seed/contract/600/400",
    features: [
      "Vulnerability scanning",
      "Gas optimization tips",
      "Solidity support",
      "Audit report generation"
    ]
  },
  {
    id: "acme-accounting",
    title: "Acme Accounting",
    slug: "acme-accounting",
    subtitle: "A ready-made website and landing page for your accounting business.",
    description: "Launch your accounting firm's online presence in minutes. This template includes a professional landing page, service descriptions, and a contact form.",
    category: "Finance & Legal",
    icon: <Briefcase size={24} />,
    color: "bg-emerald-600",
    link: "https://ai.studio/apps/drive/1dBHa3J6BR74oT6elJdGa3lvVMMxDnasK",
    image: "https://picsum.photos/seed/accounting/600/400",
    features: [
      "Responsive design",
      "SEO optimized",
      "Contact form integration",
      "Service showcase"
    ]
  },
  {
    id: "story-weaver",
    title: "Story Weaver",
    slug: "story-weaver",
    subtitle: "Your co-author agent to help you generate your brilliant idea and script.",
    description: "Overcome writer's block with an AI co-author. Generate plot twists, character backstories, and dialogue to flesh out your creative writing projects.",
    category: "AI & Automation",
    icon: <PenTool size={24} />,
    color: "bg-fuchsia-500",
    link: "https://ai.studio/apps/drive/16TCeQTeJ1mOWTDmatmloG243PXnEIrgg",
    image: "https://picsum.photos/seed/story/600/400",
    features: [
      "Plot generation",
      "Character development",
      "Dialogue assistance",
      "Genre adaptation"
    ]
  },
  {
    id: "dr-lahlou",
    title: "Dr Lahlou Imane",
    slug: "dr-lahlou-imane",
    subtitle: "Apps that help you manage your whole hospital and clinical needs.",
    description: "A complete hospital management system tailored for clinics. Manage patient records, staff schedules, and inventory in one secure platform.",
    category: "Healthcare",
    icon: <Stethoscope size={24} />,
    color: "bg-teal-600",
    features: [
      "Electronic Health Records (EHR)",
      "Appointment booking",
      "Staff management",
      "Inventory control"
    ]
  },
  {
    id: "sm-post-gen",
    title: "SM Post Generator",
    slug: "sm-post-generator",
    subtitle: "Generate full posts for different styles and formats. Automate social media.",
    description: "A comprehensive tool for social media managers or content creators to brainstorm, generate, refine, and share social media content using AI. Generate complete posts with text and images, customize tone and style, enhance images, and engage with your community.",
    category: "AI & Automation",
    icon: <Share2 size={24} />,
    color: "bg-blue-400",
    link: "https://ai.studio/apps/drive/1P_i_dET0BpXmQ4vbssXdJ_aKWQnmoj3B",
    image: "https://picsum.photos/seed/social/600/400",
    features: [
      "Content Generation: Create complete posts with text captions, hashtags, and images.",
      "Customization: Choose modes (Text & Image / Text Only), tones, and artistic styles.",
      "AI Integration: Powered by Gemini API for high-quality content generation.",
      "Post-Generation Tools: Enhance images and generate AI replies to comments.",
      "Community & Inspiration: Brainstorm ideas and explore a community showcase.",
      "Multi-language Support: English and Arabic (RTL) support."
    ]
  },
  {
    id: "comic-style-gen",
    title: "Comic Style Gen",
    slug: "comic-style-gen",
    subtitle: "Generate different banner types in specific artistic styles.",
    description: "Create eye-catching banners and graphics in various comic book styles. Perfect for marketing materials, social media headers, and website visuals.",
    category: "AI & Automation",
    icon: <ImageIcon size={24} />,
    color: "bg-red-500",
    features: [
      "Multiple comic styles (Manga, Western, Noir)",
      "Customizable text bubbles",
      "Character generation",
      "Scene composition"
    ]
  },
  {
    id: "tennis-market",
    title: "Tennis Marketplace",
    slug: "tennis-marketplace",
    subtitle: "Buy and sell all items related to tennis and racket sports.",
    description: "A dedicated marketplace for tennis enthusiasts. Buy and sell rackets, apparel, and accessories with a community of like-minded players.",
    category: "E-commerce",
    icon: <ShoppingCart size={24} />,
    color: "bg-lime-500",
    link: "https://ai.studio/apps/drive/1li8yJlYV2NhxKjr5W4OKs-gxxeu0PMF6",
    image: "https://picsum.photos/seed/tennis/600/400",
    features: [
      "User profiles",
      "Secure messaging",
      "Category filtering",
      "Location-based search"
    ]
  },
  {
    id: "trivia-football",
    title: "Trivia Football",
    slug: "trivia-football",
    subtitle: "Create different questions for users to test their football knowledge.",
    description: "A dynamic trivia game generator for football fans. Create custom quizzes, host live games, and challenge friends to test their knowledge.",
    category: "Education",
    icon: <Trophy size={24} />,
    color: "bg-orange-500",
    link: "https://ai.studio/apps/drive/18XMO2YcQwtgRCmgQAQOC0C9JdHFlTUSV",
    image: "https://picsum.photos/seed/trivia/600/400",
    features: [
      "Question bank generation",
      "Multiplayer support",
      "Timed challenges",
      "Score tracking"
    ]
  },
  {
    id: "hostel-management",
    title: "Hostel Management",
    slug: "hostel-management",
    subtitle: "Help hostel and guesthouses manage their property with tiny details.",
    description: "An all-in-one property management system for hostels. Handle bookings, check-ins, housekeeping, and guest communication efficiently.",
    category: "Operations",
    icon: <Home size={24} />,
    color: "bg-sky-500",
    link: "https://ai.studio/apps/drive/1YM4i2EIqxzmQiAp_CzQij_JREJ482CHT",
    image: "https://picsum.photos/seed/hostel/600/400",
    features: [
      "Booking engine",
      "Channel manager",
      "Housekeeping schedule",
      "Guest portal"
    ]
  },
  {
    id: "video-clip-prod",
    title: "Video Clip Prod",
    slug: "video-clip-prod",
    subtitle: "Generate first frames for your whole lyrics following the story.",
    description: "Visualize your music videos before filming. Generate keyframes and storyboards based on your lyrics to plan your production effectively.",
    category: "AI & Automation",
    icon: <Video size={24} />,
    color: "bg-purple-500",
    features: [
      "Lyrics analysis",
      "Style transfer",
      "Shot composition",
      "Storyboarding export"
    ]
  },
  {
    id: "restaid",
    title: "Restaid",
    slug: "restaid",
    subtitle: "Help food trucks and small restaurants manage day-to-day activities.",
    description: "A lightweight management tool for food trucks and small eateries. Track sales, manage orders, and monitor inventory on the go.",
    category: "Operations",
    icon: <Utensils size={24} />,
    color: "bg-orange-600",
    features: [
      "POS system",
      "Order management",
      "Sales reporting",
      "Menu management"
    ]
  },
  {
    id: "fruit-ninja",
    title: "Veggie Slicer",
    slug: "veggie-slicer",
    subtitle: "Fruit Ninja-inspired slicing game featuring vibrant visuals, fluid canvas animations, and a combo-driven scoring system. Slice veggies, avoid bombs, and survive as long as you can!",
    description: "A fun and addictive arcade game where you slice vegetables to score points. Features smooth animations and challenging gameplay mechanics.",
    category: "Gaming",
    icon: <Activity size={24} />,
    color: "bg-red-500",
    link: "https://ai.studio/apps/drive/16Bkr54mzhHk9v4S7RPDVkZ_aN0rlJVmK",
    image: "https://picsum.photos/seed/fruitninja/600/400",
    features: [
      "Combo system",
      "High score tracking",
      "Responsive controls",
      "Vibrant graphics"
    ]
  },
  {
    id: "holidays-image-studio",
    title: "Holidays & Celebrations Image Studio",
    slug: "holidays-image-studio",
    subtitle: "A professional AI studio for generating festive, culturally respectful, and joyful celebration imagery.",
    description: "Create stunning visuals for holidays and celebrations around the world. Perfect for greeting cards, social media posts, and marketing campaigns.",
    category: "AI & Automation",
    icon: <Sparkles size={24} />,
    color: "bg-pink-500",
    link: "https://ai.studio/apps/a9d10efc-3e7f-45f9-92cb-6448f3b3abc3",
    image: "https://picsum.photos/seed/holidays/600/400",
    features: [
      "Cultural themes",
      "Style customization",
      "High-resolution export",
      "Prompt assistance"
    ]
  },
  {
    id: "freshmart",
    title: "FreshMart - Premium Grocery eCommerce",
    slug: "freshmart",
    subtitle: "A modern, premium grocery eCommerce template with a clean design and smooth user experience.",
    description: "Launch your online grocery store with a premium template. Features a clean design, intuitive navigation, and optimized checkout flow.",
    category: "E-commerce",
    icon: <ShoppingBag size={24} />,
    color: "bg-emerald-600",
    link: "https://ai.studio/apps/drive/1C0EoLY3xsVe9yp-gWi_vucDQD1NHjn4c",
    image: "https://picsum.photos/seed/freshmart/600/400",
    features: [
      "Product filtering",
      "Cart management",
      "User accounts",
      "Mobile responsive"
    ]
  },
  {
    id: "turbo-dash-2d",
    title: "Turbo Dash 2D",
    slug: "turbo-dash-2d",
    subtitle: "A high-octane, arcade-style 2D top-down racing game with dynamic difficulty and an AI race commentator.",
    description: "Experience the thrill of top-down racing. Compete on challenging tracks, dodge obstacles, and listen to dynamic AI commentary as you race.",
    category: "Gaming",
    icon: <Activity size={24} />,
    color: "bg-orange-500",
    link: "https://ai.studio/apps/drive/1BbTBofzzI7LpE67FQiEGhx2HiNXdDJf4",
    image: "https://picsum.photos/seed/turbodash/600/400",
    features: [
      "Dynamic difficulty",
      "AI commentary",
      "Multiple tracks",
      "Power-ups"
    ]
  },
  {
    id: "lumina-ai-studios",
    title: "Lumina AI Studios",
    slug: "lumina-ai-studios",
    subtitle: "Full-service AI video production agency for artists and creators. We handle the entire process from concept to final render.",
    description: "A complete solution for AI video production. From storyboarding to final rendering, Lumina AI Studios provides the tools and workflows for professional creators.",
    category: "AI & Automation",
    icon: <Video size={24} />,
    color: "bg-purple-600",
    link: "https://ai.studio/apps/drive/1xH9MgK6LAxRUBMBoB5Xm-XmICf9Qlb6v",
    image: "https://picsum.photos/seed/lumina/600/400",
    features: [
      "End-to-end production workflow",
      "High-quality rendering",
      "Style consistency tools",
      "Collaboration features"
    ]
  },
  {
    id: "architecture-image-studio",
    title: "Architecture Image Studio",
    slug: "architecture-image-studio",
    subtitle: "A professional architectural visualization tool powered by Gemini. Generate high-fidelity renders with granular control over style, materials, and environment.",
    description: "Visualize architectural concepts with stunning realism. Control lighting, materials, and environment to create professional-grade renders for presentations and portfolios.",
    category: "AI & Automation",
    icon: <ImageIcon size={24} />,
    color: "bg-stone-600",
    link: "https://ai.studio/apps/drive/1ANkazrdb0k7DVKpwswnL48n2g4Z3tYOE",
    image: "https://picsum.photos/seed/architecture/600/400",
    features: [
      "Material library",
      "Lighting control",
      "Environment settings",
      "High-fidelity output"
    ]
  },
  {
    id: "business-finance-image-studio",
    title: "Business & Finance Image Studio",
    slug: "business-finance-image-studio",
    subtitle: "A premium AI-powered image generator for professional business, finance, and corporate visuals.",
    description: "Generate professional stock imagery for business and finance. Create consistent, high-quality visuals for reports, presentations, and marketing materials.",
    category: "AI & Automation",
    icon: <Briefcase size={24} />,
    color: "bg-blue-800",
    link: "https://ai.studio/apps/drive/1egW_g7XINPlTYwvuSdN1AkKOpvA--9Vn",
    image: "https://picsum.photos/seed/business/600/400",
    features: [
      "Corporate style guide",
      "Diverse character generation",
      "Office environment settings",
      "Chart and graph visualization"
    ]
  },
  {
    id: "education-image-studio",
    title: "Education Image Studio",
    slug: "education-image-studio",
    subtitle: "A professional AI image generator tailored for educational content, teachers, and schools.",
    description: "Create engaging visuals for educational materials. From textbook illustrations to classroom posters, generate content that enhances learning.",
    category: "Education",
    icon: <BookOpen size={24} />,
    color: "bg-emerald-500",
    link: "https://ai.studio/apps/drive/1ndZgvL-ZhoAjIgWzHYLitSbBFezUPB0n",
    image: "https://picsum.photos/seed/education/600/400",
    features: [
      "Subject-specific themes",
      "Age-appropriate styles",
      "Diagram generation",
      "Inclusive character options"
    ]
  },
  {
    id: "wildlife-image-studio",
    title: "Wildlife Image Studio",
    slug: "wildlife-image-studio",
    subtitle: "A professional-grade AI studio for generating cinematic wildlife and nature imagery with granular control over environment, lighting, and camera settings.",
    description: "Capture the beauty of nature with AI. Generate photorealistic wildlife imagery with precise control over lighting, composition, and environment.",
    category: "AI & Automation",
    icon: <Camera size={24} />,
    color: "bg-green-700",
    link: "https://ai.studio/apps/drive/1AuvmRUjVcTK-n7Hj9N6kN4_I4sc9ibIW",
    image: "https://picsum.photos/seed/wildlife/600/400",
    features: [
      "Species accuracy",
      "Environment customization",
      "Cinematic lighting",
      "Macro photography mode"
    ]
  },
  {
    id: "cinegen-ai",
    title: "CineGen AI",
    slug: "cinegen-ai",
    subtitle: "A professional AI-powered cinematic storyboard creator that turns concepts into visual production plans with style consistency.",
    description: "Streamline your pre-production process with AI storyboarding. Generate consistent, cinematic shots to visualize your film or video project before shooting.",
    category: "AI & Automation",
    icon: <Video size={24} />,
    color: "bg-indigo-700",
    link: "https://ai.studio/apps/drive/1Yhk2s2-m70D7XbLA01iSg_Je0F-Xiju0",
    image: "https://picsum.photos/seed/cinegen/600/400",
    features: [
      "Shot type selection",
      "Style consistency",
      "Character consistency",
      "Export to PDF"
    ]
  },
  {
    id: "legal-ai-maroc",
    title: "Legal AI Maroc",
    slug: "legal-ai-maroc",
    subtitle: "An AI-powered application designed to provide precision insights into Moroccan laws, Dahirs, and codes for professionals.",
    description: "Access instant legal insights for Moroccan law. Search codes, Dahirs, and regulations with an AI assistant designed for legal professionals.",
    category: "Finance & Legal",
    icon: <Briefcase size={24} />,
    color: "bg-slate-800",
    link: "https://ai.studio/apps/drive/1pSrviVSi_2GdWguZ8FUIIBsuzPGhzap2",
    image: "https://picsum.photos/seed/legalmaroc/600/400",
    features: [
      "Legal code search",
      "Case law summarization",
      "Bilingual support (Arabic/French)",
      "Document analysis"
    ]
  },
  {
    id: "kids-story-gen",
    title: "Kid's Story Generation AI",
    slug: "kids-story-gen",
    subtitle: "A fun and interactive application that uses AI to generate and illustrate magical stories for children.",
    description: "Create personalized bedtime stories with AI. Generate unique plots, characters, and illustrations to spark your child's imagination.",
    category: "Education",
    icon: <Sparkles size={24} />,
    color: "bg-fuchsia-400",
    link: "https://ai.studio/apps/drive/1K89KMHVfjEWYo92KnBAeL7Kzxz_cLNPD",
    image: "https://picsum.photos/seed/kidsstory/600/400",
    features: [
      "Personalized characters",
      "Moral of the story selection",
      "Illustration generation",
      "Read-aloud mode"
    ]
  },
  {
    id: "promptcrafter",
    title: "PromptCrafter",
    slug: "promptcrafter",
    subtitle: "An AI-powered assistant that helps creators generate high-quality, detailed prompts for various generative AI models.",
    description: "Master the art of prompting. This tool helps you craft precise, effective prompts for Midjourney, DALL-E, GPT-4, and other AI models.",
    category: "AI & Automation",
    icon: <PenTool size={24} />,
    color: "bg-cyan-600",
    link: "https://ai.studio/apps/drive/1rQVcaGzK4reBuw3yVp94ux6smmVvsuDX",
    image: "https://picsum.photos/seed/promptcrafter/600/400",
    features: [
      "Model-specific optimization",
      "Prompt library",
      "Style modifiers",
      "Negative prompt suggestions"
    ]
  },
  {
    id: "lyric-lens",
    title: "LyricLens",
    slug: "lyric-lens",
    subtitle: "Cinematic Scene Generator",
    description: "From Lyric to Cinematic Reality. Paste your timestamped lyrics and let our AI director craft detailed scene breakdowns, camera directions, and lighting plots for your next video production.",
    category: "AI & Automation",
    icon: <Video size={24} />,
    color: "bg-purple-700",
    link: "https://ai.studio/apps/2f7bb317-147c-4dc0-83d3-cdded98d6c8a",
    image: "https://picsum.photos/seed/lyriclens/600/400",
    features: [
      "Scene breakdowns",
      "Camera directions",
      "Lighting plots",
      "Timestamped lyrics support"
    ]
  }
];
