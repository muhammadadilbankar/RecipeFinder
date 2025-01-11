import React from 'react';

const Recipe = ({ recipe }) => (
    <div className="border rounded-lg shadow-lg p-4">
        <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-t-lg" />
        <h2 className="text-xl font-bold mt-2">{recipe.title}</h2>
        <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-login-popup', { detail: recipe.id }))}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700"
        >
            View Recipe
        </button>
    </div>
);

export default Recipe;
