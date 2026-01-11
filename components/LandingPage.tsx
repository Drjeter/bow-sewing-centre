
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <header className="text-center mb-12">
        <Logo className="h-20 w-20 mx-auto text-gray-700 mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Bow Sewing Centre Ltd
        </h1>
        <p className="text-lg text-gray-600 mt-2">Choose a service below</p>
      </header>
      
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* School Uniforms Card */}
        <Link to="/uniforms" className="group block rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="relative h-96">
            <img src="https://picsum.photos/800/600?random=uniform" alt="School uniforms" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-uniform-navy bg-opacity-60 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
              <h2 className="text-3xl font-extrabold mb-2">School Uniforms Shop</h2>
              <p className="text-lg font-light mb-4">High-quality uniforms for Bow families</p>
              <span className="mt-4 bg-white text-uniform-navy font-semibold py-2 px-6 rounded-full shadow-lg group-hover:bg-gray-200 transition-colors">
                Enter Shop
              </span>
            </div>
          </div>
        </Link>
        
        {/* Alterations & Sewing Services Card */}
        <Link to="/services" className="group block rounded-lg overflow-hidden shadow-2xl transform transition-transform hover:scale-105 duration-300 ease-in-out">
          <div className="relative h-96">
            <img src="https://picsum.photos/800/600?random=sewing" alt="Sewing machine" className="absolute inset-0 w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-service-green bg-opacity-60 group-hover:bg-opacity-70 transition-opacity duration-300"></div>
            <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
              <h2 className="text-3xl font-extrabold mb-2">Alterations & Sewing</h2>
              <p className="text-lg font-light mb-4">Professional tailoring, repairs, and more</p>
              <span className="mt-4 bg-service-beige text-service-green font-semibold py-2 px-6 rounded-full shadow-lg group-hover:bg-opacity-90 transition-colors">
                View Services
              </span>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
};

export default LandingPage;
