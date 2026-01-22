import { render, screen } from '@testing-library/react'; // permet de chercher des éléments affichés à l’écran
import App from './App';
import Dashboard from './pages/Dashboard';

test('renders learn react link', () => { // test() est une fonction fournie par Jest
  render(<App />); // Monte le composant App dans un DOM de test ( c'est la même chose que : ReactDOM.createRoot(...).render(<App />) mais en version test)
  const linkElement = screen.getByText(/learn react/i); // Cherche dans le DOM un texte qui correspond à "learn react" (i = insensible à la casse)
  expect(linkElement).toBeInTheDocument(); // Vérifie que l’élément trouvé : existe bien dans le DOM et n'est pas null. Si l'élement n'existe pas = le test échoue
});

// Pour ce projet il n'est pas utile (pas de lien "learn react" et a une navigation + dashboard). On peut donc supprimer ce fichier (demander pour être sûre) ou le laisser vide.

// -------------------------------

// // On peut remplacer par : 
// test("renders SportSee navigation", () => {
//   render(<App />);
//   const navElement = screen.getByText(/sportsee/i);
//   expect(navElement).toBeInTheDocument();
// });
 
// Ou : 
test("renders activity title", () => {
  render(<Dashboard />);
  const title = screen.getByText(/activité quotidienne/i);
  expect(title).toBeInTheDocument();
});
