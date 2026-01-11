
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const UniformsLayout = () => {
  const location = useLocation();

  const navLinkClasses = (path: string, exact: boolean = false) => {
    const isActive = exact ? location.pathname === path : location.pathname.startsWith(path);
    return `px-4 py-2 rounded-md transition-colors duration-200 ${isActive ? 'bg-white text-uniform-navy font-semibold' : 'hover:bg-blue-800'}`;
  }

  return (
    <div className="min-h-screen bg-uniform-light text-uniform-navy font-sans">
      <header className="bg-uniform-navy text-uniform-light sticky top-0 z-50 shadow-md">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Logo className="h-10 w-10"/>
            <span className="text-xl font-bold">Bow Sewing Centre</span>
          </Link>
          <div className="flex items-center gap-4 text-lg">
            <Link to="/uniforms" className={navLinkClasses('/uniforms', true)}>Home</Link>
            <Link to="/uniforms/schools" className={navLinkClasses('/uniforms/schools')}>Schools</Link>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-uniform-navy text-uniform-light py-6 text-center">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Bow Sewing Centre Ltd. All Rights Reserved.</p>
          <p className="text-sm mt-1">Back to <Link to="/" className="underline hover:text-white">Main Site</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default UniformsLayout;
