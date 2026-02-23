import React from 'react';

interface FooterProps {
    navigate: (name: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-gray-400 text-sm">&copy; 2025 Ainario. All rights reserved.</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <button 
                        onClick={() => navigate('admin')}
                        className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
                    >
                        Admin
                    </button>
                    <p className="text-gray-400 text-sm">
                        <span className="text-cyan-400 font-semibold">Scenario for all.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;