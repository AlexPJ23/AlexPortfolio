import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    // List of tabs to populate the navbar given the tab name and the path
    const ListOfItems: [string, string][] = [
        ["Endeavors", "/endeavors"],
        ["Projects", "/projects"],
        ["Blogs", "/blogs"],
        ["Achievements", "/achievements"]
    ];

    const LinkClass = ({ isActive }) => (
        isActive ? "text-white" : "text-gray-300"
    );

    return (
        <nav className="bg-gray-900 p-6 shadow-md top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <NavLink to="/">Alex P. Joseph</NavLink>
                </div>
                <ul className="flex space-x-6">
                    {
                        ListOfItems.map((tuple) => (
                            <li className="text-gray-300 text-lg" key={tuple[1]}>
                                <NavLink to={tuple[1]} className={({ isActive }) => `${LinkClass({ isActive })} hover:text-white transition duration-300`}>
                                    {tuple[0]}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
