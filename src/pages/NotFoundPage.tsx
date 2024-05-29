import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
                <p className="text-2xl font-semibold text-gray-600 mb-8">Oops! Page not found.</p>
                <Link 
                    to="/" 
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
