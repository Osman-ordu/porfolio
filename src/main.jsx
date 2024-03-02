import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.jsx";
import './App.css'
import { App } from "antd";
import GeneralLayout from "./components/layout/generalLayout/index.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GeneralLayout>
    <App>
      <ToastContainer />
      <Router> 
        <AppRoutes />
      </Router>
    </App>
    </GeneralLayout>
  </React.StrictMode>
);
