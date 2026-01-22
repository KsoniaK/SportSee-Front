import React from "react";
import {
  RadialBarChart,
  RadialBar, // barre circulaire représentant une valeur
  ResponsiveContainer
} from "recharts";
import "../styles/userScore.css";

// Remarqur : ici il faut DEUX barres empilées ( 1 pour le score réel en rouge et une 2ème pour le reste jusqu'à 100 en transparent). Recharts ne gère pas directement un "cercle" de progression
function UserScore({ user }) {
  if (!user) return null; // si l’utilisateur n’est pas encore chargé : on affiche rien

  const score = (user.todayScore || user.score) * 100; // Attention au piège dans data.js !! / on multiplie par 100 car le graphique attend une valeur entre 0 et 100 !!
  const data = [ // tableau de données pour Recharts (obligatoire)
    {
      name: "score",
      value: score,
      fill: "#FF0000",
    },
    {
      name: "rest",
      value: 100 - score,
      fill: "transparent",
    },
  ];

  return (
    // Conteneur principal du composant
    <div className="user-score">
      <h3>Score</h3>
      <ResponsiveContainer width="100%" height={250}>
        <RadialBarChart
          innerRadius="70%" // on crée un anneau (pas un disque plein)
          outerRadius="85%" // épaisseur de l’anneau
          startAngle={90} // faire un tour complet dans le sens horaire
          endAngle={450}
          data={data} // les 2 barres empilées
        >
          <RadialBar
            dataKey="value"
            cornerRadius={10}
            stackId="score"
            barSize={12}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <strong>{score}%</strong>
        <span>de votre<br />objectif</span>
      </div>
    </div>
  );
}
export default UserScore;
