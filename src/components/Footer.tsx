import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 p-6 shadow-md mt-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300">
                <div className="mb-4 md:mb-0">
                    <h4 className="text-white text-xl font-bold mb-2">Alex P. Joseph</h4>
                    <p className="text-sm">Full Stack Developer</p>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-white text-lg font-bold mb-2">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><NavLink to="/about" className="hover:text-white transition duration-300">About Me</NavLink></li>
                        <li><NavLink to="/portfolio" className="hover:text-white transition duration-300">Portfolio</NavLink></li>
                        <li><NavLink to="/blogs" className="hover:text-white transition duration-300">Blogs</NavLink></li>
                        <li><NavLink to="/achievements" className="hover:text-white transition duration-300">Achievements</NavLink></li>
                    </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h4 className="text-white text-lg font-bold mb-2">Contact Me</h4>
                    <p>Email: AlexPJ.SE23@gmail.com</p>
                    <p>Phone: (347) 932-5781</p>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/alex-joseph-51469b234/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/AlexPJ23" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://huggingface.co/APJ23" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-300">
                        <i className="fab fa-twitter"></i> HuggingFace
                    </a>
                </div>
            </div>
            <div className="text-center text-gray-500 mt-4">
                &copy; {new Date().getFullYear()} Alex P. Joseph. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
