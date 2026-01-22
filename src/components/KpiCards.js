import React from "react";
import caloriesIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import fatIcon from "../assets/fat-icon.png";
import carbsIcon from "../assets/carbs-icon.png";
import "../styles/kpiCards.css";

const KpiCards = ({ data }) => {
  // Si données par encore chargées (nul, undefined)
  if (!data) return null;
  return (
    <div className="kpi-cards">
      <div className="kpi-card">
        <img className="kpi-icon" src={caloriesIcon} alt="calorie icon"/>
        <div className="card">
          <h3>{data.calorieCount} kcal</h3>
          <p>Calories</p>
        </div>
      </div>
      <div className="kpi-card">
        <img className="kpi-icon" src={proteinIcon} alt="protein icon"/>
        <div className="card">
          <h3>{data.proteinCount} g</h3>
          <p>Protéines</p>
        </div>
      </div>
      <div className="kpi-card">
        <img className="kpi-icon" src={fatIcon} alt="fat icon"/>
        <div className="card">
          <h3>{data.carbohydrateCount} g</h3>
          <p>Glucides</p>
        </div>
      </div>
      <div className="kpi-card">
        <img className="kpi-icon" src={carbsIcon} alt="carbs icon"/>
        <div className="card">
          <h3>{data.lipidCount} g</h3>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
};
export default KpiCards;
