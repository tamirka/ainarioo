
import React from 'react';
import { howItWorksSteps } from '../constants.tsx';

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-20 bg-gray-900/70 bg-grid-pattern">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Your Idea to AI in 3 Simple Steps
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Our streamlined process makes it easy to launch your custom AI solution without any technical headaches.
                    </p>
                </div>
                
                <div className="relative mt-16">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-[pulse_5s_ease-in-out_infinite]"></div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {howItWorksSteps.map((step, index) => (
                            <div key={step.step} className="text-center flex flex-col items-center">
                                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-gray-800 border-2 border-cyan-500 rounded-full text-3xl font-bold text-cyan-400 shadow-lg shadow-cyan-500/20">
                                    {`0${step.step}`}
                                </div>
                                <h3 className="text-2xl font-bold text-white mt-6 mb-3">{step.title}</h3>
                                <p className="text-gray-400 max-w-xs">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
