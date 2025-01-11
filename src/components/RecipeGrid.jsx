import React from 'react';
import { Star } from 'lucide-react';

const RecipeGrid = ({ title, recipes }) => {
    return (
        <div className="w-full max-w-6xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                <button className="text-blue-600 hover:underline">View more</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        <div className="relative">
                            <img
                                src={recipe.image}
                                alt={recipe.title}
                                className="w-full h-48 object-cover"
                            />
                            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className={`w-4 h-4 ${index < Math.floor(recipe.rating)
                                                ? 'fill-yellow-400 text-yellow-400'
                                                : 'fill-gray-200 text-gray-200'
                                            }`}
                                    />
                                ))}
                            </div>

                            <h3 className="font-medium text-lg mb-2">{recipe.title}</h3>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gray-200" />
                                    <span>{recipe.author}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                    <span>{recipe.views}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecipeGrid;