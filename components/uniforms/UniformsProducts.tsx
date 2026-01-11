
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { UNIFORM_PRODUCTS, UNIFORM_CATEGORIES, SCHOOLS, UNIFORMS_INSTAGRAM_URL } from '../../constants';

const UniformsProducts = () => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const school = SCHOOLS.find(s => s.id === schoolId);
  const schoolProducts = UNIFORM_PRODUCTS.filter(p => p.schoolId === schoolId);

  if (!school) {
    return (
      <div className="bg-uniform-light py-12 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-uniform-navy mb-4">School Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">We couldn't find the school you were looking for.</p>
          <Link 
            to="/uniforms/schools" 
            className="inline-block bg-uniform-navy text-white font-bold py-3 px-6 rounded-md hover:bg-blue-800 transition-colors"
          >
            Back to Schools List
          </Link>
        </div>
      </div>
    );
  }

  const filteredProducts = selectedCategory === 'All'
    ? schoolProducts
    : schoolProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-uniform-light py-12">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <Link to="/uniforms/schools" className="text-blue-700 hover:underline">&larr; Back to Schools List</Link>
        </div>
        
        <div className="text-center mb-10 p-6 bg-white rounded-lg shadow-md">
          <img src={school.logoUrl} alt={`${school.name} logo`} className="h-24 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-uniform-navy">{school.name}</h1>
          <p className="text-lg text-gray-600">Uniform Catalog</p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${selectedCategory === 'All' ? 'bg-uniform-navy text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Items
          </button>
          {UNIFORM_CATEGORIES.map(category => {
            if (schoolProducts.some(p => p.category === category)) {
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${selectedCategory === category ? 'bg-uniform-navy text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  {category}
                </button>
              );
            }
            return null;
          })}
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group">
                <div className="relative h-64 overflow-hidden">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-uniform-navy">{product.name}</h3>
                  <p className="text-gray-600 text-sm mt-1 flex-grow">{product.description}</p>
                  <p className="text-lg font-semibold text-uniform-navy mt-4">{product.price}</p>
                </div>
                <div className="p-4 pt-0">
                  <a 
                    href={UNIFORMS_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center bg-uniform-navy text-white font-bold py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
                  >
                    Order on Instagram
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow-md">
            <p className="text-xl text-gray-600">No products found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UniformsProducts;
