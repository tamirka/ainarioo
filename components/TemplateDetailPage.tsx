import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, CheckCircle, Share2, Star } from 'lucide-react';
import { templates } from '../src/data/templates';
import { updateMetaTags } from '../utils/seo';

interface TemplateDetailPageProps {
  slug: string;
  navigate: (page: string) => void;
}

const TemplateDetailPage: React.FC<TemplateDetailPageProps> = ({ slug, navigate }) => {
  const template = templates.find(t => t.slug === slug);

  useEffect(() => {
    if (template) {
      updateMetaTags(
        `${template.title} - AI Studio Template`,
        template.description || template.subtitle,
        template.image,
        `templates/${template.slug}`
      );
    }
  }, [template]);

  if (!template) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Template not found</h2>
          <button 
            onClick={() => navigate('templates')}
            className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center gap-2"
          >
            <ArrowLeft size={20} /> Back to Templates
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-24 pb-20">
      {/* Breadcrumb / Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button 
          onClick={() => navigate('templates')}
          className="group flex items-center text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3 group-hover:border-indigo-200 group-hover:bg-indigo-50 transition-all">
            <ArrowLeft size={16} />
          </div>
          <span className="font-medium">Back to Templates</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                {React.cloneElement(template.icon as React.ReactElement, { size: 200 })}
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md ${template.color}`}>
                    {React.cloneElement(template.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 px-2.5 py-1 rounded-md">
                        {template.category}
                      </span>
                      {template.featured && (
                        <span className="flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
                          <Star size={12} className="fill-amber-700" /> Featured
                        </span>
                      )}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{template.title}</h1>
                  </div>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {template.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                  {template.link && (
                    <a 
                      href={template.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-0.5"
                    >
                      Launch Template <ExternalLink size={18} />
                    </a>
                  )}
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all">
                    <Share2 size={18} /> Share
                  </button>
                </div>
              </div>
            </div>

            {/* Description & Features */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About this Template</h2>
              <div className="prose prose-indigo max-w-none text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  {template.description || template.subtitle}
                </p>
              </div>

              {template.features && template.features.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {template.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            {/* Preview Image */}
            <div className="bg-white rounded-3xl p-2 shadow-sm border border-gray-100 overflow-hidden">
              <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video relative">
                {template.image ? (
                  <img src={template.image} alt={template.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${template.color} opacity-20`}>
                    {React.cloneElement(template.icon as React.ReactElement, { size: 64 })}
                  </div>
                )}
              </div>
            </div>

            {/* Quick Stats / Info */}
            <div className="bg-indigo-900 rounded-3xl p-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              <h3 className="text-lg font-bold mb-4">Why use this template?</h3>
              <ul className="space-y-3 text-indigo-100 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                  Save hours of development time
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                  Optimized for best performance
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                  Easy to customize and extend
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TemplateDetailPage;