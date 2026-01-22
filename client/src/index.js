import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // Outil de mesure de performances (temps de chargement) = pas necessaire ici

// sélectionne la <div id="root"></div> dans public/index.html et crée un root React "moderne"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // il englobe toute l’application. grâce à lui : les routes dynamiques /user/:id , useParams() dans Dashboard et a navigation sans rechargement
  <Router>
    <App />
  </Router>
);
reportWebVitals();
