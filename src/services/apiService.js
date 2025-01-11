// src/services/apiService.js

const API_KEY = "e8198994896e44c0a6175d6bb65b7609"; // Replace this with your actual API Key
const BASE_URL = "https://api.spoonacular.com"; // This URL should remain as it is
// Function to get recipes from the API
export const fetchRecipes = async (query) => {
    try {
        const response = await fetch(
            `${BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        return data.results; // Returns an array of recipes
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};
export const randomRecipes = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/recipes/random?number=6&apiKey=${API_KEY}`
        );
        const data = await response.json();
        return data.recipes; // Returns an array of recipes
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};

// Function to get detailed information of a specific recipe
export const fetchRecipeDetails = async (id) => {
    try {
        const response = await fetch(
            `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`
        );
        const data = await response.json();
        return data; // Returns detailed information about the recipe
    } catch (error) {
        console.error("Error fetching recipe details:", error);
        return null;
    }
};

// Example function to fetch food blogs, if an endpoint is available (mock example)
export const fetchFoodBlogs = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/blogs?apiKey=${API_KEY}`
        );
        const data = await response.json();
        return data; // Assuming there's an endpoint that returns food blogs
    } catch (error) {
        console.error("Error fetching food blogs:", error);
        return [];
    }
};

