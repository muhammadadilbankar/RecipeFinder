import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AboutPage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-screen bg-red-600/50 rounded-bl-[100px]" />
    </div>
  );
};

export default AboutPage;
