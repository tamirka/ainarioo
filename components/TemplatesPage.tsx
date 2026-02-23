import React, { useState } from 'react';
import { 
  Camera, Recycle, Sparkles, BookOpen, Users, HelpCircle, 
  Calculator, ShoppingBag, PieChart, Activity, HeartPulse, 
  FileText, ShieldCheck, Briefcase, PenTool, Stethoscope, 
  Share2, Image as ImageIcon, ShoppingCart, Trophy, 
  Home, Video, Utensils, Search, ArrowRight, Star, Zap, Layout
} from 'lucide-react';

const categories = [
  "All",
  "AI & Automation",
  "Healthcare",
  "Finance & Legal",
  "E-commerce",
  "Education",
  "Operations"
];

const templates = [
  {
    id: "cctv-prompt",
    title: "CCTV Prompt Gen",
    subtitle: "Generate high quality CCTV prompts to help you generate the best sequence.",
    category: "AI & Automation",
    icon: <Camera size={24} />,
    color: "bg-emerald-500",
    featured: true,
    link: "https://ai.studio/apps/drive/1OO5svbAy_o11ogOHQSdAwzGUqR0R_i46",
    image: "https://picsum.photos/seed/cctv/600/400"
  },
  {
    id: "ai-recycling",
    title: "AI Recycling",
    subtitle: "Help you recycle your trash, analyse, teach, grow using our latest recycling solution.",
    category: "AI & Automation",
    icon: <Recycle size={24} />,
    color: "bg-green-500",
    link: "https://ai.studio/apps/drive/1QtdLvCdLQ81LJKPtsq1BMsEPo9AtUy93",
    image: "https://picsum.photos/seed/recycling/600/400"
  },
  {
    id: "ai-assistant",
    title: "AI Assistant",
    subtitle: "Your personal AI assistant to help you manage your daily tasks and boost productivity.",
    category: "AI & Automation",
    icon: <Sparkles size={24} />,
    color: "bg-indigo-500",
    featured: true
  },
  {
    id: "ai-tutor-pro",
    title: "AI Tutor Pro",
    subtitle: "Personal AI teacher for different ages in different subjects and disciplines.",
    category: "Education",
    icon: <BookOpen size={24} />,
    color: "bg-blue-500",
    link: "https://ai.studio/apps/drive/1LQh_3cIlqEHvHQP7N1DeeDt6Kagnp3wD",
    image: "https://picsum.photos/seed/tutor/600/400"
  },
  {
    id: "lead-gen",
    title: "Lead Gen",
    subtitle: "Apex capture leads that qualifies visitors and book meetings.",
    category: "Operations",
    icon: <Users size={24} />,
    color: "bg-blue-600",
    link: "https://ai.studio/apps/drive/1C-qgZhtuNNu48ak7nHR249acH90Z4KRs",
    image: "https://picsum.photos/seed/leadgen/600/400"
  },
  {
    id: "campus-quiz",
    title: "Campus Quiz",
    subtitle: "Trivia Quiz for Moroccan schools and universities in different subjects.",
    category: "Education",
    icon: <HelpCircle size={24} />,
    color: "bg-yellow-500",
    link: "https://ai.studio/apps/drive/1sgIniDeWtc0IylYi-Kh55ro4KcZ4ftx0",
    image: "https://picsum.photos/seed/quiz/600/400"
  },
  {
    id: "finbook",
    title: "Finbook",
    subtitle: "Your personal bookkeeping agent that helps you edit, save, and record all transactions.",
    category: "Finance & Legal",
    icon: <Calculator size={24} />,
    color: "bg-blue-700",
    link: "https://ai.studio/apps/drive/1QchrnZ6TBb0uSONE5mVu8HdeGbAOAFB2",
    image: "https://picsum.photos/seed/finbook/600/400"
  },
  {
    id: "caftanchic",
    title: "Caftanchic",
    subtitle: "E-commerce shop for high fashion kaftan style.",
    category: "E-commerce",
    icon: <ShoppingBag size={24} />,
    color: "bg-amber-700",
    link: "https://ai.studio/apps/drive/1gYYZLIlAUWBbBErjGnBq5SmX3h3vdx-z",
    image: "https://picsum.photos/seed/caftan/600/400"
  },
  {
    id: "restaurant-cost",
    title: "Restaurant Cost Audit",
    subtitle: "Manage ingredient cost of goods and inventory from one single place.",
    category: "Operations",
    icon: <PieChart size={24} />,
    color: "bg-indigo-600",
    link: "https://ai.studio/apps/drive/18uyDgbKEvdxwxHDYKyqrrxOPFD40Pm-y",
    image: "https://picsum.photos/seed/restaurant/600/400"
  },
  {
    id: "xray-analysis",
    title: "X-Ray Analysis",
    subtitle: "Help you analyse your X-ray for educational purposes.",
    category: "Healthcare",
    icon: <Activity size={24} />,
    color: "bg-cyan-500",
    link: "https://ai.studio/apps/drive/1ff_e9w_x4G-iJlJlBBc3jN6T3xMH-UHG",
    image: "https://picsum.photos/seed/xray/600/400"
  },
  {
    id: "vita-care",
    title: "Vita Care AI",
    subtitle: "The future of health management. Our Voice assistant for all your clinical needs.",
    category: "Healthcare",
    icon: <HeartPulse size={24} />,
    color: "bg-rose-500",
    featured: true
  },
  {
    id: "aipdfpro",
    title: "AI PDF Pro",
    subtitle: "PDF generator that turns text into professional PDFs in seconds.",
    category: "AI & Automation",
    icon: <FileText size={24} />,
    color: "bg-slate-700",
    link: "https://ai.studio/apps/drive/1CaJQBC9xNd1RGrU45H5G6lxHW9f2fs15",
    image: "https://picsum.photos/seed/pdf/600/400"
  },
  {
    id: "smart-contract",
    title: "Smart Contract Editor",
    subtitle: "Automate blockchain contract auditing by uploading your contract.",
    category: "Finance & Legal",
    icon: <ShieldCheck size={24} />,
    color: "bg-violet-600",
    link: "https://ai.studio/apps/drive/1TDsCOOk_kR0gorL48SgIrdeoshh4zfTx",
    image: "https://picsum.photos/seed/contract/600/400"
  },
  {
    id: "acme-accounting",
    title: "Acme Accounting",
    subtitle: "A ready-made website and landing page for your accounting business.",
    category: "Finance & Legal",
    icon: <Briefcase size={24} />,
    color: "bg-emerald-600",
    link: "https://ai.studio/apps/drive/1dBHa3J6BR74oT6elJdGa3lvVMMxDnasK",
    image: "https://picsum.photos/seed/accounting/600/400"
  },
  {
    id: "story-weaver",
    title: "Story Weaver",
    subtitle: "Your co-author agent to help you generate your brilliant idea and script.",
    category: "AI & Automation",
    icon: <PenTool size={24} />,
    color: "bg-fuchsia-500",
    link: "https://ai.studio/apps/drive/16TCeQTeJ1mOWTDmatmloG243PXnEIrgg",
    image: "https://picsum.photos/seed/story/600/400"
  },
  {
    id: "dr-lahlou",
    title: "Dr Lahlou Imane",
    subtitle: "Apps that help you manage your whole hospital and clinical needs.",
    category: "Healthcare",
    icon: <Stethoscope size={24} />,
    color: "bg-teal-600"
  },
  {
    id: "sm-post-gen",
    title: "SM Post Generator",
    subtitle: "Generate full posts for different styles and formats. Automate social media.",
    category: "AI & Automation",
    icon: <Share2 size={24} />,
    color: "bg-blue-400",
    link: "https://ai.studio/apps/drive/1P_i_dET0BpXmQ4vbssXdJ_aKWQnmoj3B",
    image: "https://picsum.photos/seed/social/600/400"
  },
  {
    id: "comic-style-gen",
    title: "Comic Style Gen",
    subtitle: "Generate different banner types in specific artistic styles.",
    category: "AI & Automation",
    icon: <ImageIcon size={24} />,
    color: "bg-red-500"
  },
  {
    id: "tennis-market",
    title: "Tennis Marketplace",
    subtitle: "Buy and sell all items related to tennis and racket sports.",
    category: "E-commerce",
    icon: <ShoppingCart size={24} />,
    color: "bg-lime-500",
    link: "https://ai.studio/apps/drive/1li8yJlYV2NhxKjr5W4OKs-gxxeu0PMF6",
    image: "https://picsum.photos/seed/tennis/600/400"
  },
  {
    id: "trivia-football",
    title: "Trivia Football",
    subtitle: "Create different questions for users to test their football knowledge.",
    category: "Education",
    icon: <Trophy size={24} />,
    color: "bg-orange-500",
    link: "https://ai.studio/apps/drive/18XMO2YcQwtgRCmgQAQOC0C9JdHFlTUSV",
    image: "https://picsum.photos/seed/trivia/600/400"
  },
  {
    id: "hostel-management",
    title: "Hostel Management",
    subtitle: "Help hostel and guesthouses manage their property with tiny details.",
    category: "Operations",
    icon: <Home size={24} />,
    color: "bg-sky-500",
    link: "https://ai.studio/apps/drive/1YM4i2EIqxzmQiAp_CzQij_JREJ482CHT",
    image: "https://picsum.photos/seed/hostel/600/400"
  },
  {
    id: "video-clip-prod",
    title: "Video Clip Prod",
    subtitle: "Generate first frames for your whole lyrics following the story.",
    category: "AI & Automation",
    icon: <Video size={24} />,
    color: "bg-purple-500"
  },
  {
    id: "restaid",
    title: "Restaid",
    subtitle: "Help food trucks and small restaurants manage day-to-day activities.",
    category: "Operations",
    icon: <Utensils size={24} />,
    color: "bg-orange-600"
  }
];

const TemplateCard: React.FC<{ template: any }> = ({ template }) => (
  <a href={template.link || "#"} target={template.link ? "_blank" : "_self"} rel="noopener noreferrer" className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full block">
    {/* Image Section */}
    <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
      {template.image ? (
        <img src={template.image} alt={template.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${template.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
          {React.cloneElement(template.icon, { size: 64 })}
        </div>
      )}
      {template.featured && (
        <div className="absolute top-4 right-4">
          <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-400 px-2.5 py-1 rounded-full shadow-sm">
            <Star size={12} className="fill-amber-700" /> Featured
          </span>
        </div>
      )}
    </div>
    
    <div className="p-6 flex-1 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm ${template.color} -mt-12 relative z-10 border-4 border-white`}>
          {template.icon}
        </div>
      </div>
      <div className="mb-2">
        <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2 py-1 rounded-md">
          {template.category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
        {template.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-1">
        {template.subtitle}
      </p>
    </div>
    <div className="px-6 py-4 border-t border-gray-50 bg-gray-50/50 mt-auto">
      <div className="flex items-center justify-between text-sm font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
        View Template
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </a>
);

const TemplatesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter(t => {
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredTemplates = templates.filter(t => t.featured);

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6">
          <Zap size={16} className="fill-indigo-700" /> Supercharge your workflow
        </div>
        <h1 className="text-5xl md:text-7xl font-bebas tracking-wide text-gray-900 mb-6">
          Explore Our <span className="text-indigo-600">Templates</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our collection of ready-to-use AI solutions, applications, and workflows designed to accelerate your business.
        </p>
      </div>

      {/* Featured Section */}
      {searchQuery === "" && activeCategory === "All" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bebas tracking-wide text-gray-900 flex items-center gap-3">
              <Star className="text-amber-500 fill-amber-500" size={28} />
              Featured Templates
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTemplates.map(template => (
              <TemplateCard key={`featured-${template.id}`} template={template} />
            ))}
          </div>
        </div>
      )}

      {/* Browse All Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bebas tracking-wide text-gray-900 flex items-center gap-3">
            <Layout className="text-indigo-600" size={28} />
            Browse All Templates
          </h2>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2 w-full lg:w-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category 
                    ? 'bg-gray-900 text-white shadow-md' 
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 rounded-xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-gray-900"
            />
          </div>
        </div>

        {/* Grid */}
        {filteredTemplates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTemplates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
              <Search size={24} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-500 max-w-md mx-auto">We couldn't find anything matching "{searchQuery}" in the {activeCategory} category. Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-6 px-6 py-2.5 bg-indigo-50 text-indigo-700 font-medium rounded-full hover:bg-indigo-100 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-indigo-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none diamond-grid"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bebas tracking-wide text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-indigo-200 mb-8 text-lg">
              Can't find the exact template you're looking for? Our team can build a custom AI solution tailored to your specific business needs.
            </p>
            <button className="px-8 py-3 bg-white text-indigo-900 font-bold rounded-full hover:bg-indigo-50 transition-colors shadow-lg">
              Request Custom Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;

