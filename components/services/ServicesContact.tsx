
import React from 'react';
import { SHOP_ADDRESS, OPENING_HOURS, SERVICES_INSTAGRAM_URL } from '../../constants';

const ServicesContact = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-service-green mb-4">Get In Touch</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
          Visit our shop in Bow or send us a message on Instagram for inquiries and quotes.
        </p>

        <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Address</h3>
            <p className="text-2xl text-service-green mt-1">{SHOP_ADDRESS}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider">Opening Hours</h3>
            <p className="text-2xl text-service-green mt-1">{OPENING_HOURS}</p>
          </div>
          <a
            href={SERVICES_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto inline-block bg-service-green text-white font-bold text-lg py-4 px-8 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Message on Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesContact;
