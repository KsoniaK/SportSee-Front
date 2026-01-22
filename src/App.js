import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/Error";

// Composant racine de l’application. Il structure : la navigation, le routage et l'affichage des pages
function App() {
  return (
    // "Fragment React"
    <>
      <Nav /> {/* Nav horizontale + verticale toujours visible / lorsque la Nav est placé en dehors de <Routes> elle est affichée sur toutes les pages */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:id" element={<Dashboard/>}/>
        <Route path="*" element={<ErrorPage/>}/> 
      </Routes>
    </>
  );
}
export default App;
