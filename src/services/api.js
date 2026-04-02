// URL racine du backend pour toutes les routes
// const BASE_URL = "http://localhost:3000/user/";
import { BASE_URL } from "./config";

// const fetchData = async (url) => {
//   const response = await fetch(url);
//   const json = await response.json();
//   return json.data;
// };

// export const getUser = (id) => fetchData(`${BASE_URL}${id}`);
// export const getActivity = (id) => fetchData(`${BASE_URL}${id}/activity`);
// export const getAverageSessions = (id) => fetchData(`${BASE_URL}${id}/average-sessions`);
// export const getPerformance = (id) => fetchData(`${BASE_URL}${id}/performance`);

// Appel HTTP GET vers : http://localhost:3000/user/12 (ou 18 ici)
export const getUser = async (id) => { 
  // fetch renvoie une promesse / await permet d’attendre la réponse
  const response = await fetch(`${BASE_URL}${id}`); 
  // conversion de la réponse en JSON / on retourne un objet contenant = non, âge, score et données nutritionnelles
  return await response.json(); 
};

export const getActivity = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/activity`);
  return await response.json();
};

export const getAverageSessions = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/average-sessions`);
  return await response.json();
};

export const getPerformance = async (id) => {
  const response = await fetch(`${BASE_URL}${id}/performance`);
  return await response.json();
};
