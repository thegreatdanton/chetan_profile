import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, ExternalLink, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const location = useLocation();
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMeme, setShowMeme] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const handleThemeToggle = () => {
        if (theme === 'dark') {
            setShowMeme(true);
            setTimeout(() => {
                setTheme('light');
                setShowMeme(false);
            }, 2500);
        } else {
            setTheme('dark');
        }
    };

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
    ];

    return (
        <>
            {showMeme && (
                <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                    <div className="max-w-2xl bg-white p-1 rounded-lg shadow-2xl overflow-hidden transform rotate-2">
                        <div className="bg-[#0a0a0a] p-8 border-4 border-white">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter leading-none italic">
                                "If you use light theme, you are not a developer"
                            </h2>
                            <p className="text-xl text-gray-400 font-mono">- Wisdom of the Void</p>
                        </div>
                    </div>
                </div>
            )}

            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'
                }`}>
                <div className="container-custom relative">
                    <div className={`glass-panel rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 -mx-6 ${scrolled ? 'bg-opacity-80' : 'bg-opacity-40 border-transparent shadow-none'
                        } ${isOpen ? 'bg-[var(--navbar-bg)] border-[var(--glass-border)]' : ''}`}>

                        {/* Logo / Name */}
                        <Link to="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity z-50 relative">
                            Chetan
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors hover:text-[var(--text-primary)] ${location.pathname === link.path ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Socials & Theme */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                onClick={handleThemeToggle}
                                className="p-2 rounded-full hover:bg-[var(--accent-glow)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <div className="w-px h-4 bg-[var(--glass-border)] mx-1" />
                            <a href="https://github.com/thegreatdanton" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[#2dba4e] transition-colors p-2 hover:bg-[#2dba4e]/10 rounded-full">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/chetan-reddy-piduru-11840373/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-[#0077b5] transition-colors p-2 hover:bg-[#0077b5]/10 rounded-full">
                                <Linkedin size={18} />
                            </a>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 md:hidden">
                            <button
                                onClick={handleThemeToggle}
                                className="p-2 rounded-full text-[var(--text-secondary)]"
                                aria-label="Toggle Theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button
                                className="text-[var(--text-primary)] z-50 relative p-1"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 bg-[var(--bg-primary)] z-40 transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-center items-center gap-8 ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
                        }`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-2xl font-bold transition-colors ${location.pathname === link.path ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-8 mt-4">
                            <a href="https://github.com/thegreatdanton" target="_blank" rel="noopener noreferrer" className="text-[#2dba4e] p-3 bg-[#2dba4e]/10 rounded-full">
                                <Github size={24} />
                            </a>
                            <a href="https://www.linkedin.com/in/chetan-reddy-piduru-11840373/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] p-3 bg-[#0077b5]/10 rounded-full">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
