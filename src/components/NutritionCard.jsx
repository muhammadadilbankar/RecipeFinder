import React from 'react';

const NutritionCard = () => {
    return (
        <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
            <ul className="list-none">
                <li className="flex justify-between mb-2">Calories: <span>494</span></li>
                <li className="flex justify-between mb-2">Carbs: <span>80g</span></li>
                <li className="flex justify-between mb-2">Fat: <span>18g</span></li>
                <li className="flex justify-between mb-2">Protein: <span>24g</span></li>
                <li className="flex justify-between mb-2">Fiber: <span>23g</span></li>
                <li className="flex justify-between mb-2">Net carbs: <span>56g</span></li>
                <li className="flex justify-between mb-2">Sodium: <span>444mg</span></li>
                <li className="flex justify-between mb-2">Cholesterol: <span>0mg</span></li>
            </ul>
        </div>
    );
};

export default NutritionCard;