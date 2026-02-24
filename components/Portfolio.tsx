
import React from 'react';
import { motion } from 'motion/react';
import { portfolioItems } from '../constants.tsx';
import type { PortfolioItem } from '../types';

const PortfolioCard: React.FC<{ item: PortfolioItem; index: number }> = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
        className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20"
    >
        <div className="relative h-56 overflow-hidden">
            <div className="absolute inset-0 bg-gray-800 animate-pulse" />
            <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
        </div>
        
        <div className="p-6 relative">
            <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800 text-cyan-400 border border-gray-700">
                        {tag}
                    </span>
                ))}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
            </h3>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {item.description}
            </p>
            
            <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-xs text-gray-500">
                <span>Last modified: {item.modifiedDate}</span>
            </div>
        </div>
    </motion.div>
);


const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="py-32 bg-gray-950 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Portfolio
                    </motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6"
                    >
                        Our AI in Action: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Case Studies</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        We don't just talk about AI, we build it. Explore some of the custom solutions we've delivered for our clients.
                    </motion.p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {portfolioItems.slice(0, 16).map((item, index) => (
                        <PortfolioCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;