
import React from 'react';
import { ALTERATION_SERVICES, SERVICES_INSTAGRAM_URL } from '../../constants';

const ServicesList = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-service-green mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ALTERATION_SERVICES.map(service => (
            <div key={service.id} className="bg-white border border-gray-200 rounded-md p-6 flex flex-col text-center items-center shadow-sm hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-service-green mb-3">{service.name}</h3>
              <p className="text-gray-600 flex-grow mb-6">{service.description}</p>
              <a
                href={SERVICES_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-service-green text-white font-bold py-2 px-6 rounded-sm hover:bg-opacity-90 transition-colors"
              >
                Message on Instagram
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
