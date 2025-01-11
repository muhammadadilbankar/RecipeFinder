import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import { useNavigate } from 'react-router-dom'; // for navigation

const TrendingRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

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
        fetch(`https://api.spoonacular.com/recipes/random?number=6&apiKey=e8198994896e44c0a6175d6bb65b7609`)
            .then(response => response.json())
            .then(data => {
                if (data && data.recipes) {
                    setRecipes(data.recipes);
                } else {
                    console.error("Failed to fetch recipes. Check API structure.");
                }
            })
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <section className="trending-recipe p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Trending Recipes</h1>
                <span
                    onClick={handleViewMore}
                    className="text-blue-500 cursor-pointer hover:underline"
                >
                    View more
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.length > 0 ? (
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
                ) : (
                    <p>Loading recipes...</p>
                )}
            </div>
        </section>
    );
};

export default TrendingRecipe;
