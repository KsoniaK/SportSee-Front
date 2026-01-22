import React from "react";
import {
  Radar,
  RadarChart, // conteneur du graphique radar
  PolarGrid,
  PolarAngleAxis, // axe des catégories (autour du cercle)
  ResponsiveContainer,
} from "recharts";
import "../styles/performanceGraph.css";


const PerformanceGraph = ({ data }) => {
  // data n’existe pas ou si data.data (les valeurs) est manquant ou si data.kind (les types) est manquant = on affiche pas le composant (évite toute erreur)
  if (!data || !data.data || !data.kind) return null; // kind : correspondance des catégories

  // Traductions des performances (maquette)
  const labelsFR = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  // Formatage + inversion de l’ordre
  const chartData = data.data // formatage des données pour Recharts
    .map((item) => ({ // transformation des données
      subject: labelsFR[data.kind[item.kind]], // item.kind est un nombre (1 à 6) / data.kind[item.kind] permet de récupérer la clé texte : 1 = "cardio"
      value: item.value,
    }))
    .reverse(); // Recharts affiche les axes dans l’ordre du tableau mais maquette impose un ordre précis autour du radar !!

  // Conteneur principal du graphique
  return (
    <div className="performance-graph">
      <ResponsiveContainer width="100%" height="100%">
        {/* outerRadius = taille du radar par rapport au conteneur */}
        <RadarChart data={chartData} outerRadius="65%">
          <PolarGrid />
          <PolarAngleAxis // Affiche les labels autour du radar
            dataKey="subject"
            stroke="#FFFFFF"
            tick={{ fontSize: 12 }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default PerformanceGraph;
