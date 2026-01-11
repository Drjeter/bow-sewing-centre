
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import UniformsLayout from './components/uniforms/UniformsLayout';
import UniformsHome from './components/uniforms/UniformsHome';
import UniformsProducts from './components/uniforms/UniformsProducts';
import SchoolListPage from './components/uniforms/SchoolListPage';
import ServicesLayout from './components/services/ServicesLayout';
import ServicesHome from './components/services/ServicesHome';
import ServicesList from './components/services/ServicesList';
import ServicesGallery from './components/services/ServicesGallery';
import ServicesContact from './components/services/ServicesContact';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Uniforms Mini-Site Routes */}
        <Route path="/uniforms" element={<UniformsLayout />}>
          <Route index element={<UniformsHome />} />
          <Route path="schools" element={<SchoolListPage />} />
          <Route path="schools/:schoolId" element={<UniformsProducts />} />
        </Route>

        {/* Services Mini-Site Routes */}
        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<ServicesHome />} />
          <Route path="list" element={<ServicesList />} />
          <Route path="gallery" element={<ServicesGallery />} />
          <Route path="contact" element={<ServicesContact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
