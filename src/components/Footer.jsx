import React from 'react';
import { Link } from 'react-router-dom';
import footerimg from '../assets/banner.png'

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="mx-auto w-full max-w-screen-xl p-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
                    <div className="flex items-center">
                        <img src={footerimg} className="h-8 me-3" alt="Phoenix Logo" />
                        <span className="text-xl font-semibold text-white">Phoenix Cybersecurity</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-12 text-sm">
                        <div className="space-y-4">
                            <h2 className="font-semibold text-white text-base">Contact Us</h2>
                            <a className="text-gray-400 hover:underline block">phoenixcybersec008@gmail.com</a>
                            <a className="text-gray-400 hover:underline block">+91 9284689196</a>
                            {/* <a 
                                href="https://forms.gle/dxFDkNuVe5YTWnYH8" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-red-500 text-white text-sm rounded-lg hover:scale-105 transition-transform duration-300"
                            >
                                Click if any query
                            </a>     */}
                        </div>
                        <div className="space-y-4">
                            <h2 className="font-semibold text-white text-base">Follow us</h2>
                            <ul className="text-gray-400 flex flex-col gap-2">
                                <li><a href="https://www.instagram.com/phoenix_cybersec/" className="hover:underline">Instagram</a></li>
                                <li><a href="https://discord.gg/ng5WjzPp" className="hover:underline">Discord</a></li>
                                <li><a href="https://www.youtube.com/@phoenixcybersec1673" className="hover:underline">Youtube</a></li>
                                <li><a href="https://www.linkedin.com/company/phoenix-cybersec/" className="hover:underline">LinkedIn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;