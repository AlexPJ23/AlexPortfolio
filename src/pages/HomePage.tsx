import React from 'react';
import profilePic from '../../public/images/profileImage.jpg';

const HomePage: React.FC = () => {
    return (
        <div className="flex justify-center items-center p-5">
            <div className="flex-shrink-0 text-center">
                <img src={profilePic} alt="Profile" className="w-full max-w-xs h-auto rounded-full"/>
            </div>
            <div className="flex-grow pl-5">
                <p className="text-lg text-gray-800">
                    Hi, I'm Alex! I'm a Full Stack Developer with a passion for building web applications. I have experience working with a variety of technologies including React, Node.js, and Python. I'm always looking for new opportunities to learn and grow as a developer.
                </p>
            </div>
        </div>
    );
};

export default HomePage;
