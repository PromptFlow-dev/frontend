import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthMateClient } from 'authmate';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    // Check if current route is active
    const isActive = (path) => {
        return location.pathname === path;
    };

    // Update active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'progress', 'how-it-works', 'founders', 'contact'];
            const scrollPosition = window.scrollY + 150; // Adjust for navbar height

            let activeSection = 'home'; // Default to home

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop } = element;
                    // If we've scrolled past this section's start, it becomes active
                    if (scrollPosition >= offsetTop) {
                        activeSection = section;
                    }
                }
            }

            setActiveSection(activeSection);
        };

        // Set initial active section
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isAuthenticated = AuthMateClient.isAuthenticated();

    const handleLogout = () => {
        AuthMateClient.logout();
        navigate('/');
    };

    // Only show landing page navigation on home route
    const isLandingPage = location.pathname === '/';


    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'progress', label: "What's Our Progress" },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'founders', label: 'Founder Corner' },
        { id: 'contact', label: 'Contact' }
    ];
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="/WhatsApp Image 2025-08-25 at 20.56.58_52843934.jpg"
                            alt="PromptFlow Logo"
                            className="h-10 w-auto"
                        />
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            PromptFlow
                        </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {isLandingPage ? (
                            <>
                                {navItems.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === item.id
                                            ? 'text-blue-400 bg-blue-400/10'
                                            : 'text-gray-300 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                ))}
                                <motion.button
                                    onClick={() => scrollToSection('contact')}
                                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Join Waitlist
                                </motion.button>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/"
                                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/')
                                        ? 'text-blue-400 bg-blue-400/10'
                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    Home
                                </Link>

                                {isAuthenticated ? (
                                    <>
                                        <Link
                                            to="/dashboard"
                                            className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/dashboard')
                                                ? 'text-blue-400 bg-blue-400/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/login"
                                            className={`px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/login')
                                                ? 'text-blue-400 bg-blue-400/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            to="/signup"
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                                        >
                                            Sign Up
                                        </Link>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-black/40 backdrop-blur-md rounded-lg mb-4"
                        >
                            <div className="px-4 py-2 space-y-2">
                                {isLandingPage ? (
                                    <>
                                        {navItems.map((item) => (
                                            <button
                                                key={item.id}
                                                onClick={() => scrollToSection(item.id)}
                                                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/"
                                            className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/')
                                                ? 'text-blue-400 bg-blue-400/10'
                                                : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Home
                                        </Link>

                                        {isAuthenticated ? (
                                            <>
                                                <Link
                                                    to="/dashboard"
                                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/dashboard')
                                                        ? 'text-blue-400 bg-blue-400/10'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    Dashboard
                                                </Link>
                                                <button
                                                    onClick={() => {
                                                        handleLogout();
                                                        setIsMenuOpen(false);
                                                    }}
                                                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                                                >
                                                    Logout
                                                </button>
                                            </>
                                        ) : (
                                            <>
                                                <Link
                                                    to="/login"
                                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/login')
                                                        ? 'text-blue-400 bg-blue-400/10'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    Login
                                                </Link>
                                                <Link
                                                    to="/signup"
                                                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-300 ${isActive('/signup')
                                                        ? 'text-blue-400 bg-blue-400/10'
                                                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                                                        }`}
                                                    onClick={() => setIsMenuOpen(false)}
                                                >
                                                    Sign Up
                                                </Link>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    )
}

export default Navbar
