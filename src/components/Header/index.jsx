import './style.css';

export const Header = ({ showMenu = true }) => {
  return (
    <header>
      <div className="header__content container">
        <div className="site-logo"></div>
        {showMenu ? (
          <nav className="main-nav">
            <button className="nav-btn"></button>
            <div className="rollout-nav nav-closed">
              <a href="#menu">Menu</a>
              <a href="#gallery">Galerie</a>
              <a href="#contact">Kontakt</a>
            </div>
          </nav>
        ) : (
          <a className="back-home" href="/">← Zpět na hlavní stránku</a>
        )}
      </div>
    </header>
  );
};