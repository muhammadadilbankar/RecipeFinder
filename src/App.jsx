import { useState } from 'react'
import './index.css'
import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import BlogPage from './pages/Blog';
import AboutPage from './pages/AboutPage';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';
import Footer from './components/Footer';
import RecipeDetailPage from './pages/RecipeDetailPage';

// Replace with your path
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipe" element={<RecipePage />} />  {/* Map the /recipe path to Recipe component */}
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/recipe-detail/:id" element={<RecipeDetailPage />} />
    </Routes>
      <Footer/>
  </Router>
  
  );
};
export default App
