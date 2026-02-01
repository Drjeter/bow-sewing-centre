
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesHome = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[70vh] text-white flex flex-col justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1536867520774-5b4f2628a69b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFpbG9yaW5nfGVufDB8fDB8fHww')" }}
      >
        <div className="absolute inset-0 bg-service-green bg-opacity-60"></div>
        <div className="relative container mx-auto px-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl text-service-beige">
            Professional Alterations, Tailoring & Repairs
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl text-service-beige font-light">
            With decades of experience, we bring a careful, artisan touch to every garment.
          </p>
          <Link
            to="/services/list"
            className="mt-8 inline-block bg-service-dark-beige text-white font-bold text-lg py-3 px-8 rounded-sm shadow-lg hover:bg-opacity-90 transition-all transform hover:translate-y-[-2px]"
          >
            Explore Our Services
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-service-green mb-4">Welcome to Our Workshop</h2>
          <p className="max-w-3xl mx-auto text-gray-700 text-xl leading-relaxed">
            Nestled in the heart of Bow, our sewing centre is a place where craftsmanship lives on. We believe that well-fitting clothes empower you, and a simple repair can give a beloved item a new lease on life. We handle every piece with the utmost care and precision.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesHome;
