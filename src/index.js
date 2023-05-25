import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Routes from './routes'
import MenuAdm from './components/menuadm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes />
    
  </React.StrictMode>
);