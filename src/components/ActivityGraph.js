import React from "react";
import { // import de plusieurs composants de la librairie Recharts, utilisée pour créer les graphiques
  BarChart,
  Bar, // représente une série de données sous forme de barre
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer, // conteneur qui rend le graphique adaptatif à la taille de son parent
} from "recharts";
import CustomTooltipActivity from "./CustomTooltipActivity"; // importe un tooltip personnalisé
import "../styles/activityGraph.css";

function ActivityGraph({ data }) {
  if (!data) return null; // si data est null ou undefined, le composant ne retourne rien = éviter les erreurs

  // Légende personnalisée avec ronds
  const renderLegend = () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "flex-end",
        marginBottom: "10px",
      }}
    >
      {/* légende pour le Poids */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#282D30",
          }}
        ></div>
        <span style={{ fontSize: "14px", color: "#74798C" }}>Poids (kg)</span>
      </div>
      {/* légende pour les Calories brûlées */}
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "#E60000",
          }}
        ></div>
        <span style={{ fontSize: "14px", color: "#74798C" }}>
          Calories brûlées (kCal)
        </span>
      </div>
    </div>
  );

  return (
    // Conteneur principal du graphique
    <div className="activity-graph">
      <div>
        <h3>Activité quotidienne</h3>
      </div>
      {/* Rend le graphique adaptatif à la taille de son parent (width et height à 100%) */}
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={8} // espace entre les barres
          margin={{ top: 30, right: 30, left: 30, bottom: 10 }} // marge interne autour du graphique pour le dégagement
        >
          {/* Quadrillage horizontal uniquement (vertical={false}) avec des traits en pointillés (3 3) */}
          <CartesianGrid strokeDasharray="3 3" vertical={false}/>
          {/* Axe horizontal / tickLine={false} et axisLine={false} : supprime les traits du tick et de l’axe */}
          <XAxis dataKey="day" tickLine={false} axisLine={false}/> 
          {/* Axe vertical pour le Poids */}
          <YAxis
            yAxisId="kg"
            orientation="right" // axe à droite du graphique
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 1", "dataMax + 1"]} // ajustement automatique pour que les barres ne touchent pas les bords
            allowDecimals={false}
          />
          {/* On cache l'axe vertical pour les Calories brûlées */}
          <YAxis yAxisId="cal" hide />
          {/* Bulles : affiche un tooltip personnalisé en utilisant composant CustomTooltipActivity */}
          <Tooltip content={<CustomTooltipActivity />} />
          {/* Légende personnalisée définie dans renderLegend*/}
          <Legend content={renderLegend} verticalAlign="top" align="right" />
          {/* les barres du poids */}
          <Bar
            yAxisId="kg"
            dataKey="kilogram"
            fill="#282D30"
            radius={[10, 10, 0, 0]}
            barSize={7}
            name="Poids (kg)"
          />
          {/* barres des calories */}
          <Bar
            yAxisId="cal"
            dataKey="calories"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            barSize={7}
            name="Calories brûlées (kCal)"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
export default ActivityGraph;
