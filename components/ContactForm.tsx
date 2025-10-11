
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [idea, setIdea] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically handle form submission,
        // e.g., send data to a backend or an email service.
        console.log({ name, email, idea });
        setSubmitted(true);
    };
    
    if (submitted) {
        return (
             <section id="contact" className="py-20 bg-gray-900/50 bg-grid-pattern">
                <div className="container mx-auto px-6 text-center">
                     <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg border border-cyan-500/30">
                         <h2 className="text-3xl font-bold text-white mb-4">Thank You, {name}!</h2>
                         <p className="text-gray-300 text-lg">Your vision has been received. We'll be in touch shortly to discuss the next steps.</p>
                     </div>
                 </div>
            </section>
        )
    }

    return (
        <section id="contact" className="py-20 bg-gray-900/50 bg-grid-pattern">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                        Ready to Build Your AI?
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Tell us your vision. We'll provide a free, no-obligation quote and roadmap to bring it to life.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-gray-800 p-8 md:p-12 rounded-lg border border-gray-700 mt-12 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Jane Doe"
                                required
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="jane.doe@example.com"
                                required
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="idea" className="block text-sm font-medium text-gray-300 mb-2">Tell us about your AI idea</label>
                            <textarea
                                id="idea"
                                value={idea}
                                onChange={(e) => setIdea(e.target.value)}
                                rows={5}
                                placeholder="e.g., An AI chatbot for my Shopify store that can answer questions about products and order status."
                                required
                                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-cyan-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500"
                            >
                                Submit My Idea
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
