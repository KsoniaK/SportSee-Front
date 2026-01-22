import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="accueil">
      <h1>Choisissez un utilisateur</h1>
      <div className="buttons">
        <Link to="/user/12"><button>User 12</button></Link>
        <Link to="/user/18"><button>User 18</button></Link>
      </div>
    </div>
  );
}

export default Home;
