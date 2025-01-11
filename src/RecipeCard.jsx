import React from "react";

const RecipeCard = ({ title, image, time, difficulty }) => {
    return (
    <div className="border rounded-lg shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-2">{title}</h2>
      <p className="text-gray-600">Time: {time} mins</p>
      <p className="text-gray-600">Difficulty: {difficulty}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-700">
        View Recipe
      </button>
    </div>
  );
};
export default RecipeCard;  