import React from "react";
import "./Header.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const Header = ({ state, login }) => {
  const buttonToggle = useRef(),
    menuContainer = useRef(),
    menuToggle = useRef();
  const XD = () => {
    buttonToggle.current.classList.toggle("active");
    menuContainer.current.classList.toggle("menu-container__active");
    menuToggle.current.classList.toggle("menu-toggle__active");
  };
  const onMenuToggle = () => {
    XD();
  };
  const MenuUl = () => {
    if (buttonToggle.current.classList[1]) {
      XD();
    }
  };
  return (
    <header className="header">
      <div ref={buttonToggle} onClick={onMenuToggle} className="button-toggle">
        <div className="linea-toggle"></div>
      </div>
      <div className="header-nav" ref={menuContainer}>
        <nav className="main-nav" ref={menuToggle}>
          <ul className="main-nav__list flx-a-c" onClick={MenuUl}>
            <li className="main-nav__item" id="link">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="inicio"
                  smooth={true}
                  offset={0}
                  duration={600}
                >
                  Inicio
                </Scroll>
              ) : (
                <Link className="main-nav__link" to="/">
                  Inicio
                </Link>
              )}
            </li>
            {state ? (
              <li className="main-nav__item">
                <Scroll
                  className="main-nav__link"
                  to="ponentes"
                  smooth={true}
                  offset={50}
                  duration={600}
                >
                  Ponentes
                </Scroll>
              </li>
            ) : (
              ""
            )}
            <li className="main-nav__item">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="agenda"
                  smooth={true}
                  offset={200}
                  duration={600}
                >
                  Agenda
                </Scroll>
              ) : (
                <Link className="main-nav__link" to="/">
                  Agenda
                </Link>
              )}
            </li>
            <li className="main-nav__item">
              {state ? (
                <Scroll
                  className="main-nav__link"
                  to="lugar"
                  smooth={true}
                  offset={0}
                  duration={600}
                >
                  Lugar
                </Scroll>
              ) : (
                <Link className="main-nav__link" to="/">
                  Lugar
                </Link>
              )}
            </li>
            {state ? (
              <li className="main-nav__item">
                <Scroll
                  className="main-nav__link"
                  to="contactanos"
                  smooth={true}
                  offset={50}
                  duration={600}
                >
                  Contactanos
                </Scroll>
              </li>
            ) : (
              ""
            )}

            {state ? (
              <li className="main-nav__item">
                <Link
                  className="main-nav__link main-nav__link--inscrip flx-a-c"
                  to="/login"
                >
                  Inicia Sesión
                </Link>
              </li>
            ) : (
              <li className="main-nav__item">
                <Link
                  className="main-nav__link"
                  to="/login"
                  style={{ visibility: "hidden" }}
                ></Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
