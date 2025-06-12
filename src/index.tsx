import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import App from './App';
import "./assets/nav.css";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
      
      <App />
   
  </StrictMode>,
);
