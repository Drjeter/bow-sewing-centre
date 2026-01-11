
import React from 'react';
import { GALLERY_ITEMS } from '../../constants';

const ServicesGallery = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-service-green mb-4">Before & After</h1>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">A showcase of our transformative work. See the difference expert tailoring can make.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {GALLERY_ITEMS.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-md shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-center mb-2 text-gray-500">Before</h3>
                  <img src={item.beforeUrl} alt={`${item.alt} before`} className="w-full h-auto object-cover rounded"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-center mb-2 text-service-green">After</h3>
                  <img src={item.afterUrl} alt={`${item.alt} after`} className="w-full h-auto object-cover rounded"/>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-800 font-semibold">{item.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGallery;
