import React from 'react';

interface ToolsPageProps {
    navigate: (page: string) => void;
}

const ToolsPage: React.FC<ToolsPageProps> = ({ navigate }) => {
    return (
        <div className="min-h-screen bg-gray-900 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Tools</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                    Explore our suite of AI-powered tools designed to streamline your workflow and boost productivity.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                        <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-cyan-400 text-2xl">🏥</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Medical Landing Page Prompt</h3>
                        <p className="text-gray-400 mb-4">Generate a complete, ready-to-publish landing page prompt for doctors and medical clinics with zero placeholders.</p>
                        <button onClick={() => navigate('tool-doctor-prompt')} className="text-cyan-400 hover:text-cyan-300 font-medium">Try it out &rarr;</button>
                    </div>

                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                        <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-cyan-400 text-2xl">🎙️</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Darija Audio Studio</h3>
                        <p className="text-gray-400 mb-4">Transcribe Moroccan Darija audio, edit the text, and generate new voiceovers using Gemini AI.</p>
                        <button onClick={() => navigate('tool-darija-audio')} className="text-cyan-400 hover:text-cyan-300 font-medium">Try it out &rarr;</button>
                    </div>
                    
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-cyan-500 transition-colors">
                        <div className="w-12 h-12 bg-cyan-900/50 rounded-lg flex items-center justify-center mb-4">
                            <span className="text-cyan-400 text-2xl">📊</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Data Analyzer</h3>
                        <p className="text-gray-400 mb-4">Quickly analyze datasets and extract meaningful insights using AI.</p>
                        <button className="text-cyan-400 hover:text-cyan-300 font-medium">Coming Soon &rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsPage;
