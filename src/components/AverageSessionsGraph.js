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
  // Si data n’existe pas ou est vide = on n’affiche rien. évite les erreurs de rendu
  if (!data || data.length === 0) return null; 
  
  const days = ["L", "M", "M", "J", "V", "S", "D"];

  // Recharts attend des données formatées
  const chartData = data.map((item) => ({ // data.map() crée un nouveau tableau, élément par élément (item).
    day: days[item.day - 1],
    value: item.sessionLength, // durée de la session (sessionLength devient value)
  }));

  // on déclare un composant interne pour le tooltip
  const CustomTooltip = ({ active, payload }) => { // active : true quand on survole un point / payload : contient la valeur de la donnée survolée
    // vérification tooltip est actif + des données existent
    if (active && payload && payload.length) { 
      return (
        <div className="sessions-tooltip">
          {payload[0].value} min
        </div>
      );
    }
    // si pas de survol = on affiche rien
    return null; 
  };

  // Curseur sombre au survol (2e nuance de rouge)
  const CustomCursor = ({ points, width, height }) => {
    // position horizontale et vertical du point survolé
    const { x, y } = points[0]; 
    // on récupère la coordonnée X du point actif 
    return ( 
      <Rectangle // on dessine un rectangle sombre semi-transparent
        fill="rgba(0, 0, 0, 0.1)"
        x={x}
        y={y - 100}
        width={width}
        height={height +200} // agrandissement du rectangle pour couvrir toute la colonne du graphique
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
