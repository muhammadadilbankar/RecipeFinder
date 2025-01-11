import React from 'react';
import { useState } from 'react';
import { StarIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import TrendingRecipe from '../components/TrendingRecipe';
import NewsLetter from '../components/NewsLetter';

const LandingPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white relative">
      {/* Split Background */}
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-red-600/50 rounded-bl-[100px]" />
      
      {/* Navigation */}

      {/* Hero Section */}
      <main className="relative z-10 flex items-center h-[calc(100vh-72px)] px-8">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6 text-gray-900">
              Your Daily Dish
              <br />
              A <span className="text-red-500">Food Journey</span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
            </p>
            
            <button className="px-8 py-3 bg-red-500 text-white rounded-md text-lg font-medium hover:bg-pink-600 mb-4">
              Sign up
            </button>
            
            <div className="text-sm text-gray-600">
              Do you have an account?{' '}
              <span 
                onClick={() => setIsLoginOpen(true)}
                className="text-red-500 hover:text-blue-600 cursor-pointer">
                Log in
              </span>

              {/* Login modal */}
              <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            {/* Circular background for food image */}
            <div className="relative w-[500px] h-[500px] rounded-full bg-slate-800 overflow-hidden">
              <img 
                src="./src/assets/roundsalad-modified.png"
                alt="Salad dish"
                className="w-full h-full object-cover"
              />
              
              {/* Decorative Leaves */}
              <div className="absolute -top-4 -left-4 z-20">
                <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.88,6.05a1,1,0,0,0-1.05-.14A14.91,14.91,0,0,1,12,8.14,14.91,14.91,0,0,1,3.17,5.91a1,1,0,0,0-1.05.14,1,1,0,0,0-.37,1V16.87a1,1,0,0,0,.49.86,15.88,15.88,0,0,0,19.52,0,1,1,0,0,0,.49-.86V7A1,1,0,0,0,21.88,6.05Z"/>
                </svg>
              </div>
              <div className="absolute top-1/2 -right-4 z-20">
                <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.88,6.05a1,1,0,0,0-1.05-.14A14.91,14.91,0,0,1,12,8.14,14.91,14.91,0,0,1,3.17,5.91a1,1,0,0,0-1.05.14,1,1,0,0,0-.37,1V16.87a1,1,0,0,0,.49.86,15.88,15.88,0,0,0,19.52,0,1,1,0,0,0,.49-.86V7A1,1,0,0,0,21.88,6.05Z"/>
                </svg>
              </div>
              <div className="absolute -bottom-4 left-1/4 z-20">
                <svg className="w-12 h-12 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.88,6.05a1,1,0,0,0-1.05-.14A14.91,14.91,0,0,1,12,8.14,14.91,14.91,0,0,1,3.17,5.91a1,1,0,0,0-1.05.14,1,1,0,0,0-.37,1V16.87a1,1,0,0,0,.49.86,15.88,15.88,0,0,0,19.52,0,1,1,0,0,0,.49-.86V7A1,1,0,0,0,21.88,6.05Z"/>
                </svg>
              </div>
            </div>

            {/* Review Card */}
            <div className="absolute -bottom-8 -left-24 bg-white p-4 rounded-lg shadow-lg max-w-xs z-20">
              <div className="flex items-center space-x-3 mb-2">
                <img 
                  src="/api/placeholder/40/40"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="font-medium">Sara Johnson</span>
              </div>
              
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">4.8/5</span>
              </div>
              
              <p className="text-sm text-gray-600">
                Wow this recipe is a flavor explosion in my mouth! very delicious.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Share Your Recipes Section */}
      <section className="relative z-0 flex items-center h-[calc(100vh-72px)] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-12">
            <div className="w-1/2">
              <img 
                src="./src/assets/phone-food.jpg" // Update this path to your actual image path
                alt="Phone capturing food photo"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            
            <div className="w-1/2">
              <h2 className="text-4xl font-bold mb-6">Share Your Recipes</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae enim pharetra, venenatis nunc eget, finibus est. Proin velit
              </p>
              <Link to="/create-recipe">
                <button className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  Create New Recipe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <TrendingRecipe/> */}
      <NewsLetter/>
    </div>
  );
};

export default LandingPage;