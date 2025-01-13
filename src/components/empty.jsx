import React from 'react';
import { Star, Clock, Share2, Bookmark } from 'lucide-react';

const RecipeDetailPage = ({ recipe }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < Math.floor(rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
            />
        ));
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <span>Home</span>
                <span>›</span>
                <span>Recipe</span>
                <span>›</span>
                <span className="text-gray-900">{recipe?.title}</span>
            </div>

            {/* Recipe Title and Meta Section */}
            <div className="mb-6">
                <h1 className="text-3xl font-bold mb-4">{recipe?.title}</h1>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                        <img src={recipe?.authorImage} alt={recipe?.author} className="w-6 h-6 rounded-full" />
                        <span>Author name</span>
                    </div>
                    <div>{recipe?.date}</div>
                    <div className="flex items-center gap-1">
                        <div className="flex">{renderStars(recipe?.rating)}</div>
                        <span>({recipe?.reviews} Reviews)</span>
                    </div>
                    <div>{recipe?.comments} comments</div>
                    <div>{recipe?.saves} Saves</div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recipe Content - Left Side */}
                <div className="lg:col-span-2">
                    {/* Main Image */}
                    <div className="rounded-lg overflow-hidden mb-6">
                        <img
                            src={recipe?.image}
                            alt={recipe?.title}
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Recipe Quick Info */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-gray-600">Prep time</div>
                            <div className="font-bold">{recipe?.prepTime} mins</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-gray-600">Cook time</div>
                            <div className="font-bold">{recipe?.cookTime} mins</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <div className="text-gray-600">Serving</div>
                            <div className="font-bold">{recipe?.serving} Serving</div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-8">{recipe?.description}</p>

                    {/* Ingredients */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Ingredients:</h2>
                        <ul className="space-y-2">
                            {recipe?.ingredients?.map((ingredient, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <input type="checkbox" className="rounded" />
                                    <span>{ingredient}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sidebar - Right Side */}
                <div>
                    {/* Action Buttons */}
                    <div className="flex gap-4 mb-6">
                        <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2">
                            Print Recipe
                        </button>
                        <button className="p-2 border rounded-lg">
                            <Share2 className="w-5 h-5" />
                        </button>
                        <button className="p-2 border rounded-lg">
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Nutrition Facts */}
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                        <h2 className="text-xl font-bold mb-4">Nutrition Facts</h2>
                        <div className="space-y-2">
                            {recipe?.nutrition?.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <span className="text-gray-600">{item.name}</span>
                                    <span className="font-medium">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trending Recipes */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Trending Recipes</h2>
                        <div className="space-y-4">
                            {recipe?.trendingRecipes?.map((trending) => (
                                <div key={trending.id} className="flex gap-4">
                                    <img
                                        src={trending.image}
                                        alt={trending.title}
                                        className="w-20 h-20 rounded-lg object-cover"
                                    />
                                    <div>
                                        <h3 className="font-medium mb-1">{trending.title}</h3>
                                        <div className="flex">{renderStars(trending.rating)}</div>
                                        <div className="text-sm text-gray-600">{trending.calories} cals</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetailPage;