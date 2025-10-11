
import React from 'react';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

interface HeroProps {
    navigate: NavigateFunction;
}

const Hero: React.FC<HeroProps> = ({ navigate }) => {
    return (
        <section className="relative bg-gray-900 text-white py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-900 to-transparent"></div>
            
            <div className="container mx-auto px-6 text-center relative z-10">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
                    Build Your <span className="text-cyan-400">Scenario</span> with AI
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10">
                    We build AI-powered apps, bots, and tools—all done for you, no tech skills required. Your vision, our expertise.
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                    <a 
                        href="#"
                        onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                        className="bg-cyan-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
                    >
                        Bring Your Idea to Life
                    </a>
                    <a 
                        href="#"
                        onClick={(e) => { e.preventDefault(); navigate('services'); }} 
                        className="bg-gray-700/50 text-white font-semibold px-8 py-4 rounded-lg hover:bg-gray-600/50 border border-gray-600 hover:border-gray-500 transition-all duration-300"
                    >
                        Explore Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
