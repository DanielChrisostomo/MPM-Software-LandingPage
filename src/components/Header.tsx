import React from "react";
import css from "./header.module.css";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [match, setMatch] = React.useState(false);

  function scrollPageToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenu(!mobileMenu);
  }

  React.useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia("(max-width: 900px)");
      setMatch(matches);
      if (!matches) {
        setMobileMenu(false);
      }
    }
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, []);

  return (
    <header className={css.header}>
      <img
        className={css.logo}
        src="./src/assets/Logo.svg"
        alt="MPM Software Logo"
      />
      <nav className={css.nav}>
        {match && (
          <button
            className={css.btnMobile}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span
              className={`${css.hamburguer} ${
                mobileMenu && css.hamburguerActive
              }`}
            ></span>
          </button>
        )}
        <ul className={`${mobileMenu && match ? css.menuMobile : css.menu}`}>
          <li>
            <a href="#inicio" onClick={scrollPageToTop}>
              Início
            </a>
          </li>
          <li>
            <a href="#sistema" onClick={() => setMobileMenu(!mobileMenu)}>
              Sistema
            </a>
          </li>
          <li>
            <a href="#clientes" onClick={() => setMobileMenu(!mobileMenu)}>
              Clientes
            </a>
          </li>
          <li>
            <a href="#depoimentos" onClick={() => setMobileMenu(!mobileMenu)}>
              Depoimentos
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={() => setMobileMenu(!mobileMenu)}>
              Sobre nós
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMobileMenu(!mobileMenu)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
