import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav
            className="bg-white flex items-center justify-between px-6 py-4 shadow-md 
              fixed top-0 left-0 right-0 z-50"
        >
            <div className="flex items-center">
                <span className="text-xl font-bold">✕ Perfect<span className="text-rose-500">Recipe</span></span>
            </div>

            <div className="flex items-center space-x-6 mr-4">
                <Link to="/home" className="text-gray-700">Home</Link>
                <Link to="/recipe" className="text-gray-700">Recipe</Link>
                <Link to="/add-recipe" className="text-gray-700">Add Recipe</Link>
                <Link to="/blog" className="text-gray-700">blog</Link>
                <Link to="/about" className="text-gray-700">About us</Link>
            </div>
        </nav>
    );
};

export default Navbar;