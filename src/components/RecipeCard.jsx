import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{recipe.description || 'No description available.'}</p>
                <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:text-blue-800 font-semibold">View Recipe</Link>
            </div>
        </div>
    );
};

export default RecipeCard;
