import "../styles/header.css";

const Header = ({ user }) => {
  // Si données par encore chargées (nul, undefined)
  if (!user || !user.userInfos) return <header>Chargement...</header>;
  return (
    <header>
      <h1>Bonjour <span className="user-name">{user.userInfos.firstName}</span></h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </header>
  );
};
export default Header;
