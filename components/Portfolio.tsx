
import React from 'react';
import { portfolioItems } from '../constants.tsx';
import type { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700/80 group transition-all duration-300 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-1">
        <div className="overflow-hidden">
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map(tag => (
                    <span key={tag} className="bg-gray-700 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">{tag}</span>
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-auto">Last modified: {item.modifiedDate}</p>
        </div>
    </div>
);


const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Our AI in Action: Case Studies
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        We don't just talk about AI, we build it. Explore some of the custom solutions we've delivered for our clients.
                    </p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
                    {portfolioItems.slice(0, 16).map(item => (
                        <PortfolioCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;