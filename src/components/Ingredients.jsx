import React, { useEffect, useState } from 'react';
import { fetchRecipeDetails } from '../services/apiService'; // Importing fetchRecipeDetails

const Ingredients = ({ recipeId }) => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        const getRecipeDetails = async () => {
            const recipeData = await fetchRecipeDetails(recipeId); // Fetch recipe details using the provided recipeId
            if (recipeData && recipeData.extendedIngredients) {
                setIngredients(recipeData.extendedIngredients); // Assuming extendedIngredients contains the ingredient data
            }
        };
        getRecipeDetails();
    }, [recipeId]);

    return (
        <div className="ingredients-list">
            <h2 className="text-2xl font-bold mb-4">Ingredients:</h2>
            <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="rounded"
                            checked={false} // For now, this can be controlled if needed
                            onChange={() => { }}
                        />
                        <span className="text-sm">
                            {ingredient.amount.us.value} {ingredient.amount.us.unit} {ingredient.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;
