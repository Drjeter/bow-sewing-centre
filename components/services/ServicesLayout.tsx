
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const ServicesLayout = () => {
  const location = useLocation();

  const navLinkClasses = (path: string) => 
    `relative text-lg after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-service-dark-beige after:transition-transform after:duration-300 ${location.pathname === path ? 'after:scale-x-100' : 'after:scale-x-0'} hover:after:scale-x-100`;

  return (
    <div className="min-h-screen bg-service-beige text-service-green font-serif">
      <header className="sticky top-0 z-50 bg-service-beige bg-opacity-90 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <Logo className="h-10 w-10 text-service-green"/>
            <span className="text-xl font-bold">Bow Sewing Centre</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/services" className={navLinkClasses('/services')}>Home</Link>
            <Link to="/services/list" className={navLinkClasses('/services/list')}>Services</Link>
            <Link to="/services/gallery" className={navLinkClasses('/services/gallery')}>Gallery</Link>
            <Link to="/services/contact" className={navLinkClasses('/services/contact')}>Contact</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-service-green text-service-beige py-8 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Bow Sewing Centre Ltd. Artisan Alterations.</p>
          <p className="text-sm mt-1">Return to <Link to="/" className="underline hover:text-white">Main Site</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default ServicesLayout;
