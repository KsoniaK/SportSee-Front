import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import KpiCards from "../components/KpiCards";
import ActivityGraph from "../components/ActivityGraph";
import AverageSessionsGraph from "../components/AverageSessionsGraph";
import PerformanceGraph from "../components/PerformanceGraph";
import UserScore from "../components/UserScore";
import { getUser, getActivity, getAverageSessions, getPerformance } from "../services/api";
import "../styles/main.css";
import "../styles/dashboard.css";

const Dashboard = () => {
  // id de l'utilisateur récupéré
  const { id } = useParams(); // retourne un objet / id est toujours une chaîne de caractères, même si c’est un nombre.
  // on redirige l'utilisateur si besoin
  const navigate = useNavigate();
  // on stocks les données utilisateur
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState([]);
  const [sessionsData, setSessionsData] = useState([]);
  const [performanceData, setPerformanceData] = useState(null);

  // Redirection si id absent
  useEffect(() => { // Le hook se relance uniquement si l’ID change
    // sécurité, si url /user/undefined ou /user/ = renvoie accueil
    if (!id) navigate("/");
  }, [id, navigate]);

  // Récupération données
  // idem, si id n'existe pas on arrête (evite appels API inutiles)
  useEffect(() => {
    if (!id) return;

    // appel API
    const fetchData = async () => {
      try {
        // Appelle /user/:id
        const user = await getUser(id);
        // Appelle /user/:id/activity
        const activity = await getActivity(id);
        const sessions = await getAverageSessions(id);
        const performance = await getPerformance(id);

        // Mise à jour des states on stock les données
        setUserData(user.data);
        // sécurité : si data n'existe pas on renvoit tableau vide
        setActivityData(activity.data?.sessions || []);
        setSessionsData(sessions.data?.sessions || []);
        setPerformanceData(performance.data || null);
        // erreur API
      } catch (error) {
        console.error(error);
      }
    };

    // on appelle fetchData, le useEffect se lance si id change
    fetchData();
  }, [id]);

  // Sécurité
  if (!userData) return <div>Chargement...</div>;
  return (
    <div className="dashboard">
      <main className="main-dashboard">
        <Header user={userData}/>
        <div className="dashboard-container">
          <div className="graphs-section">
            <ActivityGraph data={activityData}/>
            <div className="graphs_display-flex">
              <AverageSessionsGraph data={sessionsData}/>
              <PerformanceGraph data={performanceData}/>
              <UserScore user={userData}/>
            </div>
          </div>
          <div className="kpi-section">
            <KpiCards data={userData.keyData}/>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
