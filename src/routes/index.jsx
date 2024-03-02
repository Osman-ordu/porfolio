import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/mainLayout/MainLayout";

import Experience from '../pages/experience'
import Projects from '../pages/projects'
import Blog from '../pages/blog'
import Education from '../pages/education'
import Certificates from '../pages/certificates'
import About from "../pages/about";

const AppRoutes = () => {
    
    return (
        <Routes >
            <Route path='' element={<MainLayout/>}>
            <Route path="/about" index element={<About/>} />
            <Route path="/experience" index element={<Experience/>} />
            <Route path="/education" index element={<Education/>} />
            <Route path="/certificates" index element={<Certificates/>} />
            <Route path="/blog" index element={<Blog/>} />
            <Route path="/projects" index element={<Projects/>} />
            </Route>

        </Routes>
    )
}

export default AppRoutes