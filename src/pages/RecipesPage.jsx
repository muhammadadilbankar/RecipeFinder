import React, { useEffect, useState } from 'react';
import Recipe from '../components/Recipe';

const RecipesPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?number=18&apiKey=YOUR_API_KEY`)
            .then(response => response.json())
            .then(data => {
                if (data && data.recipes) {
                    setRecipes(data.recipes);
                } else {
                    console.error("Failed to fetch recipes.");
                }
            })
            .catch(error => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">All Recipes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {recipes.length > 0 ? (
                    recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe} />)
                ) : (
                    <p>Loading recipes...</p>
                )}
            </div>
        </div>
    );
};

export default RecipesPage;
