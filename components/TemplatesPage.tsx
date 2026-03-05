import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ArrowRight, Star, Zap, Layout
} from 'lucide-react';
import { templates } from '../src/data/templates';
import { Template } from '../types';

const categories = [
  "All",
  "AI & Automation",
  "Healthcare",
  "Finance & Legal",
  "E-commerce",
  "Education",
  "Operations",
  "Gaming"
];

interface TemplatesPageProps {
  navigate?: (page: string, slug?: string | null) => void;
}

const TemplateCard: React.FC<{ template: Template; navigate?: (page: string, slug?: string | null) => void }> = ({ template }) => (
  <Link 
    to={`/template/${template.slug}`}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full cursor-pointer block"
  >
    {/* Image Section */}
    <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
      {template.image ? (
        <img src={template.image} alt={template.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${template.color} opacity-10 group-hover:opacity-20 transition-opacity`}>
          {React.cloneElement(template.icon as React.ReactElement, { size: 64 })}
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
  </Link>
);

const TemplatesPage: React.FC<TemplatesPageProps> = ({ navigate }) => {
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
              <TemplateCard key={`featured-${template.id}`} template={template} navigate={navigate} />
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
              <TemplateCard key={template.id} template={template} navigate={navigate} />
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

