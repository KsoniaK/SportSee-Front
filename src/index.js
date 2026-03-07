import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// // Outil de mesure de performances (temps de chargement) = pas necessaire ici
import reportWebVitals from './reportWebVitals';

// Condition local ou githubPages
const basename = process.env.NODE_ENV === "production" ? "/SportSee-Front" : ""

// sélectionne la <div id="root"></div> dans public/index.html et crée un root React "moderne"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // il englobe toute l’application. grâce à lui : les routes dynamiques /user/:id , useParams() dans Dashboard et a navigation sans rechargement
  <Router basename={basename}>
    <App />
  </Router>
);
reportWebVitals();




// Remarque : 
  // En local : process.env.NODE_ENV === "development"
        //  -> Donc : basename = "/"
            // -> Projet tourne sur : http://localhost:3000

  // GitHub Pages quand je build (npm run build) , NODE_ENV devient "production"
        //  -> Donc : basename = "/SportSee-Front"
            // -> Projet tourne sur = https://username.github.io/SportSee-Front