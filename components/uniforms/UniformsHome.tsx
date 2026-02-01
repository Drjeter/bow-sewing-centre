
import React from 'react';
import { Link } from 'react-router-dom';

const UniformsHome = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[60vh] text-white flex items-center"
        style={{ backgroundImage: "url('https://media.istockphoto.com/id/911029160/photo/home-time.webp?a=1&b=1&s=612x612&w=0&k=20&c=_B7H-nzX4hJB3x7kO8OElTPjqj59RVVm1hv6O9NL-ao=')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            School Uniforms for Bow Families
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Providing durable, comfortable, and affordable schoolwear. We are proud to be your local uniform supplier.
          </p>
          <Link
            to="/uniforms/schools"
            className="mt-8 inline-block bg-white text-uniform-navy font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Browse by School
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-uniform-navy mb-4">Quality You Can Trust</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We source only the best materials to ensure our uniforms can withstand the rigors of the school day, wash after wash. From blazers to sportswear, we've got your children covered from head to toe.
          </p>
        </div>
      </section>
    </div>
  );
};

export default UniformsHome;
