import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import GeneralLayout from './components/layout/generalLayout/index.jsx';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralLayout>
      <ToastContainer />
      <Router>
        <AppRoutes />
      </Router>
    </GeneralLayout>
  </React.StrictMode>
);
