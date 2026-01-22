import "../styles/activityGraph.css"

// props envoyées automatiquement par Recharts
const CustomTooltipActivity = ({ active, payload }) => { // active : si true on survol une barre + payload : tableau contenant les données de la barre survolée, chaque entrée correspond à une série (Bar) du graphique
  if (!active || !payload || payload.length < 2) return null; // si : tooltip n’est pas actif, ou payload n’existe pas, ou il y a moins de 2 valeurs = on affiche rien. Avec .length on veut être sûr que les deux valeurs (DES DEUX BARRES DONC !!) sont disponibles avant d’afficher le tooltip
  return (
    <div className="activity-tooltip">
      <p>{payload[0].value}kg</p>
      <p>{payload[1].value}kCal</p>
    </div>
  );
};
export default CustomTooltipActivity;
