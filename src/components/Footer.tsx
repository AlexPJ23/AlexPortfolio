import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-700 p-3 shadow-md mt-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-300">
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
                        <i className="fab fa-huggingface"></i> HuggingFace
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
