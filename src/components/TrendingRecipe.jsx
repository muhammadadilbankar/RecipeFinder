import React, { useState } from 'react';
import RecipeCard from './RecipeCard'; // Assuming RecipeCard is your recipe component
import LoginModal from './LoginModal';  // Import your login form component

const TrendingRecipe = ({ recipes }) => {
    const [showLogin, setShowLogin] = useState(false); // State to control login form visibility

    const handleViewMoreClick = () => {
        setShowLogin(true); // Show login form on "View more" click
    };

    const closeLoginForm = () => {
        setShowLogin(false); // Close login form when login is complete or dismissed
    };

    return (
        <div className="trending-recipes">
            <h2 className="text-2xl font-bold mb-4">Trending Recipes</h2>
            <div className="grid grid-cols-3 gap-4">
                {recipes.slice(0, 6).map((recipe, index) => (
                    <RecipeCard key={index} {...recipe} />
                ))}
            </div>
            <div className="flex justify-end mt-4">
                <span
                    className="text-blue-500 hover:underline cursor-pointer"
                    onClick={handleViewMoreClick}
                >
                    View more
                </span>
            </div>

            {showLogin && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <LoginModal onClose={closeLoginForm} /> {/* Show login form */}
                </div>
            )}
        </div>
    );
};

export default TrendingRecipe;
