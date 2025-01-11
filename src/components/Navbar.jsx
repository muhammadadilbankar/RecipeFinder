import React from 'react';
import { NavLink } from 'react-router-dom';

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
                {/* Apply active class dynamically based on route */}
                <NavLink
                    to="/home"
                    className={({ isActive }) => isActive ? "text-pink-600 font-semibold underline" : "text-gray-700"}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/recipe"
                    className={({ isActive }) => isActive ? "text-pink-600 font-semibold underline" : "text-gray-700"}
                >
                    Recipe
                </NavLink>
                <NavLink
                    to="/add-recipe"
                    className={({ isActive }) => isActive ? "text-pink-600 font-semibold underline" : "text-gray-700"}
                >
                    Add Recipe
                </NavLink>
                <NavLink
                    to="/blog"
                    className={({ isActive }) => isActive ? "text-pink-600 font-semibold underline" : "text-gray-700"}
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "text-pink-600 font-semibold underline" : "text-gray-700"}
                >
                    About us
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
