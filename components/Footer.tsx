import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                <p className="text-gray-400 text-sm">&copy; 2025 Ainario. All rights reserved.</p>
                <p className="text-gray-400 text-sm mt-4 md:mt-0">
                    <span className="text-cyan-400 font-semibold">Scenario for all.</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;