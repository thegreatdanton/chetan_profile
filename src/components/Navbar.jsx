import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
            }`}>
            <div className="container-custom relative">
                <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 -mx-6 ${scrolled ? 'bg-opacity-80' : 'bg-opacity-40 border-transparent shadow-none'
                    } ${isOpen ? 'bg-[#1a1a1a] border-white/10' : ''}`}>

                    {/* Logo / Name */}
                    <Link to="/" className="text-lg font-bold tracking-tight hover:text-white/80 transition-colors z-50 relative">
                        Chetan
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-secondary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Socials */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="https://github.com/thegreatdanton" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <Github size={18} />
                        </a>
                        <a href="https://www.linkedin.com/in/chetan-reddy-piduru-11840373/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <Linkedin size={18} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white z-50 relative p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-[#0a0a0a] z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                    }`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-2xl font-bold transition-colors ${location.pathname === link.path ? 'text-white' : 'text-secondary'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-8 mt-4">
                        <a href="https://github.com/thegreatdanton" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/chetan-reddy-piduru-11840373/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
