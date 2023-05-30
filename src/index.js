import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    <ToastContainer />
    
  </React.StrictMode>
);