import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../services/apiService';  // Import the fetchRecipes function
import { randomRecipes } from '../services/apiService';
const TrendingRecipe = () => {
    const [recipes, setRecipes] = useState([]);  // State to store the fetched recipes
    const [loading, setLoading] = useState(true); // Loading state to show spinner until data is fetched

    const handleViewMore = () => {
        const isLoggedIn = true; // Replace with actual login check later
        if (!isLoggedIn) {
            // Trigger login popup (simplified here)
            alert("Please log in to view more recipes.");
        } else {
            navigate('/recipes'); // Navigate to the recipes page
        }
    };
    useEffect(() => {
        // Fetch trending recipes when the component mounts
        const getTrendingRecipes = async () => {
            try {
                const recipesData = await randomRecipes(); // Fetch recipes based on 'trending' query
                setRecipes(recipesData);  // Update state with fetched recipes
                setLoading(false);  // Stop loading when the data is fetched
            } catch (error) {
                console.error("Error fetching trending recipes:", error);
                setLoading(false);  // Stop loading even if there's an error
            }
        };

        getTrendingRecipes();  // Call the function to fetch data
    }, []);

    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner or loading skeleton
    }

    return (
        <section className="trending-recipe p-6">
            <div className="flex justify-between items-center mb-6 mr-4">
                <h1 className="text-3xl font-bold">Trending Recipes</h1>
                <span
                    onClick={handleViewMore}
                    className="text-pink-600 font-semibold cursor-pointer hover:text-black"
                >
                    View more
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <div key={recipe.id} className="recipe-card border p-4 rounded-md shadow-md">
                        <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2">{recipe.title}</h3>
                        <p className="text-sm text-gray-600">{recipe.summary.slice(0, 100)}...</p> {/* Truncate the summary */}
                        <button
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                            onClick={() => alert(`Redirecting to full recipe: ${recipe.id}`)} // Replace this with your actual redirection logic
                        >
                            View Recipe
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingRecipe;
