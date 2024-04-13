import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import GeneralLayout from './components/layout/generalLayout/index.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GeneralLayout>
      <Router>
        <AppRoutes />
      </Router>
    </GeneralLayout>
);
