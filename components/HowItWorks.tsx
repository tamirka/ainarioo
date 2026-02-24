
import React from 'react';
import { motion } from 'motion/react';
import { howItWorksSteps } from '../constants.tsx';

const HowItWorks: React.FC = () => {
    return (
        <section id="how-it-works" className="py-32 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Process
                    </motion.span>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6"
                    >
                        Your Idea to AI in <span className="text-cyan-400">3 Simple Steps</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-400 leading-relaxed"
                    >
                        Our streamlined process makes it easy to launch your custom AI solution without any technical headaches.
                    </motion.p>
                </div>
                
                <div className="relative mt-24">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800">
                        <motion.div 
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500"
                        ></motion.div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        {howItWorksSteps.map((step, index) => (
                            <motion.div 
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                className="text-center flex flex-col items-center group"
                            >
                                <div className="relative z-10 flex items-center justify-center w-24 h-24 bg-gray-900 border-4 border-gray-800 rounded-full text-3xl font-bold text-gray-500 shadow-xl group-hover:border-cyan-500 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110">
                                    <span className="relative z-10">{`0${step.step}`}</span>
                                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white mt-8 mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                    {step.title}
                                </h3>
                                
                                <p className="text-gray-400 max-w-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
