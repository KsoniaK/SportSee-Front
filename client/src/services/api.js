// URL racine du backend pour toutes les routes
const BASE_URL = "http://localhost:3000/user/";

export const getUser = async (id) => { // Appel HTTP GET vers : http://localhost:3000/user/12 (ou 18 ici)
  const response = await fetch(`${BASE_URL}${id}`); // fetch renvoie une promesse / await permet d’attendre la réponse
  return await response.json(); // conversion de la réponse en JSON / on retourne un objet contenant = non, âge, score et données nutritionnelles
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
