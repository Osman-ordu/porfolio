import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/mainLayout/MainLayout';
import Experience from '../pages/experience';
import Education from '../pages/education';
import About from '../pages/about';
import Stack from '../pages/stack';
import Contact from '../pages/contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="education" element={<Education />} />
        <Route path="stack" element={<Stack />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
