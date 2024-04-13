import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/mainLayout/MainLayout';
import Experience from '../pages/experience';
import Education from '../pages/education';
import About from '../pages/about';
import Stack from '../pages/stack'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<MainLayout />}>
        <Route path='/' index element={<About />} />
        <Route path='/about' index element={<About />} />
        <Route path='/experience' index element={<Experience />} />
        <Route path='/education' index element={<Education />} />
        <Route path='/stack' index element={<Stack />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
