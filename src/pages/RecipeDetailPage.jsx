import React from "react";
import { Star, Clock, Share2, Bookmark } from 'lucide-react';

const RecipeDetailPage = () =>{
    return (
        <div className="max-w-6xl mx-auto p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <span>Home</span>
                <span>›</span>
                <span>Recipe</span>
                <span>›</span>
                <span className="text-gray-900">{recipe?.title}</span>
            </div>
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">{recipe?.title}</h1>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <img src="RecipeFinder /src/assets/person.jpg" alt="author" className="w-6 h-6 rounded-full" />
                        <span>Author name</span>
                    </div>
                    <div>Jul 1, 2023</div>
                    <div className="flex items-center gap-1">
                        <div className="flex">★★★★☆</div>
                        <span>39 Reviews</span>
                    </div>
                    <div>22 comments</div>
                    <div>126 Saves</div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden mb-6">
                        <img
                            src={recipe?.image}
                            alt={recipe?.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}