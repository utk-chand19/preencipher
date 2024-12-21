import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import navimg from '../assets/banner.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/domains', label: 'Our Domains' },
        { path: '/aboutus', label: 'About Us' },
        { path: '/gallery', label: 'Gallery' },
        { path: '/ourjourney', label: 'Our Journey' },
        { path: '/team', label: 'Team' }
    ];
    
    return (
        <header>
            <nav className={`z-50 fixed w-full transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-black/70'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link to="/" className="flex items-center space-x-3 group">    
                            <img src={navimg} className="h-10 w-24 transition-transform duration-300 group-hover:scale-105" alt="Phoenix Logo" />
                            <span className="text-sm sm:text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300 truncate">
                                Phoenix Cybersecurity
                            </span>
                        </Link>

                        {/* Mobile menu button */}
                        <button 
                            onClick={toggleNavbar}
                            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                        {/* Desktop menu */}
                        <div className="hidden md:flex md:items-center md:space-x-6">
                            <div className="flex items-center gap-4">
                                <Link
                                    to="/"
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        isActive('/') 
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                >
                                    Home
                                </Link>
                                <a
                                    href="http://encipherx.phoenixcybersec.in"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
                                >
                                    EncipherX 3.0
                                </a>
                                <Link
                                    to="/domains"
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        isActive('/domains')
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                >
                                    Our Domains
                                </Link>
                                <Link
                                    to="/aboutus"
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        isActive('/aboutus')
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/team"
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        isActive('/team')
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                >
                                    Team
                                </Link>
                                <Link
                                    to="/ourjourney"
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                                        isActive('/ourjourney')
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                >
                                    Our Journey
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                                        isActive(link.path)
                                        ? 'text-white bg-blue-500/20 hover:bg-blue-500/30'
                                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
