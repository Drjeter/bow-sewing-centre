
import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOLS } from '../../constants';

const SchoolListPage = () => {
  return (
    <div className="bg-uniform-light py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-uniform-navy mb-2">Find Your School</h1>
        <p className="text-center text-gray-600 mb-10">Select your child's school to view the available uniform items.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SCHOOLS.map(school => (
            <Link 
              to={`/uniforms/schools/${school.id}`} 
              key={school.id} 
              className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden text-center"
            >
              <div className="p-6 bg-gray-50 flex items-center justify-center h-40">
                <img src={school.logoUrl} alt={`${school.name} logo`} className="max-h-24 max-w-full object-contain" />
              </div>
              <div className="p-4 border-t border-gray-200">
                <h3 className="text-lg font-bold text-uniform-navy group-hover:text-blue-800 transition-colors">{school.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolListPage;
