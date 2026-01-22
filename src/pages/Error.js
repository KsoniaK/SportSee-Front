import React from "react";
import { Link } from "react-router-dom";
import "../styles/error.css"

function Error() {
  return (
    <div className="error-container">
      <h1>404 - Page introuvable</h1>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default Error;
