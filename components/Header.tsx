
import React, { useState } from 'react';

type NavigateFunction = (pageName: string, slug?: string | null) => void;

const Logo: React.FC<{ navigate: NavigateFunction }> = ({ navigate }) => (
    <a href="#" onClick={(e) => { e.preventDefault(); navigate('home'); }} className="flex items-center space-x-2">
        <svg className="h-8 w-auto text-cyan-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22h20L12 2zm0 4.55L18.06 20H5.94L12 6.55z"/>
        </svg>
        <span className="text-2xl font-bold text-white tracking-wider">
            Ainar<span className="text-cyan-400">io</span>
        </span>
    </a>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface HeaderProps {
    navigate: NavigateFunction;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { page: 'services', label: 'Services' },
        { page: 'how-it-works', label: 'How It Works' },
        { page: 'portfolio', label: 'Portfolio' },
        { page: 'blog', label: 'Blog' },
        { page: 'contact', label: 'Contact' },
    ];
    
    const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, pageName: string) => {
        e.preventDefault();
        navigate(pageName);
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-gray-900/70 backdrop-blur-lg border-b border-gray-800">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <Logo navigate={navigate} />

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.page} 
                               href="#"
                               onClick={(e) => handleNavLinkClick(e, link.page)}
                               className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-white transition-colors">English</button>
                        <a href="#" onClick={(e) => handleNavLinkClick(e, 'contact')} className="bg-cyan-500 text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20">
                            Get a Free Quote
                        </a>
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900 border-t border-gray-800">
                    <nav className="flex flex-col items-center space-y-4 px-6 py-8">
                        {navLinks.map(link => (
                            <a key={link.page} 
                               href="#"
                               onClick={(e) => handleNavLinkClick(e, link.page)}
                               className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg">
                                {link.label}
                            </a>
                        ))}
                        <a href="#" onClick={(e) => handleNavLinkClick(e, 'contact')} className="w-full text-center bg-cyan-500 text-white font-semibold mt-4 px-5 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300 shadow-lg shadow-cyan-500/20">
                            Get a Free Quote
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
