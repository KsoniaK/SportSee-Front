import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Rectangle, // utilisé pour créer un curseur personnalisé au survol
} from "recharts";
import "../styles/averageSessionsGraph.css";

const AverageSessionsGraph = ({ data }) => {
  if (!data || data.length === 0) return null; // Si data n’existe pas ou est vide = on n’affiche rien. évite les erreurs de rendu
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  // Recharts attend des données formatées
  const chartData = data.map((item) => ({
    day: days[item.day - 1],
    value: item.sessionLength, // durée de la session.
  }));

  // on déclare un composant interne pour le tooltip
  const CustomTooltip = ({ active, payload }) => { // active : true quand on survole un point / payload : contient la valeur de la donnée survolée
    if (active && payload && payload.length) { // vérification tooltip est actif + des données existent
      return (
        <div className="sessions-tooltip">
          {payload[0].value} min
        </div>
      );
    }
    return null; // si pas de survol = on affiche rien
  };

  // Curseur sombre au survol (2e nuance de rouge)
  const CustomCursor = ({ points, width, height }) => {
    const { x } = points[0]; // position horizontale du point survolé
    return ( // on récupère la coordonnée X du point actif 
      <Rectangle // on dessine un rectangle sombre semi-transparent
        fill="rgba(0, 0, 0, 0.1)"
        x={x}
        y={0}
        width={width}
        height={height}
      />
    );
  };

  return (
    // Conteneur principal du graphique
    <div className="average-sessions-graph">
      {/* Titre DANS le graph */}
      <h3 className="sessions-title">Durée moyenne des sessions</h3>
      {/* Permet au graphique de s’adapter automatiquement à son parent */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData} // données formatées
          margin={{ top: 60, right: 20, left: 20, bottom: 20 }}
        >
          {/* Axe Y caché mais obligatoire */}
          <YAxis hide domain={["dataMin - 10", "dataMax + 10"]} />
          {/* Axe X jours */}
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="rgba(255,255,255,0.6)" // Texte blanc légèrement transparent
            tick={{ fontSize: 12 }}
          />
          <Tooltip
            content={<CustomTooltip />} // tooltip personnalisé
            cursor={<CustomCursor />} // curseur sombre au survol.
          />
          {/* Courbe */}
          <Line
            type="monotone" // courbe fluide
            dataKey="value"
            stroke="#FFFFFF"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 0 }} // Petit point uniquement au survol
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
export default AverageSessionsGraph;
