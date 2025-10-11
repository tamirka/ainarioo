
import React from 'react';
import { services } from '../constants.tsx';
import type { Service } from '../types';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-900/20">
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-400 leading-relaxed">{service.description}</p>
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        From Chatbots to Custom Tools, We Build It All
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Whether you're a restaurant, online store, coach, or startup—we bring your AI idea to life, fully branded to YOUR business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
