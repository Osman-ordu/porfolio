import React from "react";
import About from './about'
import Blog from "./blog";
import Experience from "./experience";
import Certificates from "./certificates";
import Education from "./education";
import Projects from "./projects";


const ContentManager = ({ selectedContent }) => {
  
  switch (selectedContent) {
    case "about":
      return <About />;
    case "blog":
      return <Blog />;
    case "experience":
      return <Experience />;
    case "certificates":
      return <Certificates />;
    case "education":
      return <Education />;
    case "projects":
      return <Projects />;
    default:
      return null; 
  }
};

export default ContentManager;
