import React from "react";
import styles from "../styles/Header.module.scss";
import { ReactComponent as Inicio } from "../assets/inicio/inicio-icon.svg";
import { ReactComponent as Sobre } from "../assets/inicio/sobre-icon.svg";
import { ReactComponent as Projetos } from "../assets/inicio/projetos-icon.svg";
import { ReactComponent as Skills } from "../assets/inicio/skills-icon.svg";
import { ReactComponent as Contato } from "../assets/inicio/contato-icon.svg";

const Header = () => {
  const [menuActive, setMenuActive] = React.useState(false);
  const refButton = React.useRef();

  const activeMenu = () => {
    setMenuActive(!menuActive);
    if (menuActive) {
      refButton.current.ariaLabel = "Abrir Menu";
      refButton.current.ariaExpanded = "false";
    } else {
      refButton.current.ariaLabel = "Fechar Menu";
      refButton.current.ariaExpanded = "true";
    }
  };

  return (
    <header
      className={`maxWidth flex flex-row items-center justify-between pt-5 box-border ${styles.header}`}
    >
      <h1 className="font-audioWide text-3xl lg:text-4xl text-whiteColor">
        MP<span className={`text-whiteColor`}>.</span>
      </h1>
      <button
        ref={refButton}
        aria-label="Abrir Menu"
        aria-expanded="true"
        className={`${styles.menuHamburguer} ${
          menuActive && styles.mobileButtonActive
        }`}
        onClick={activeMenu}
      />
      {menuActive && (
        <nav
          className={`bg-blackColor p-6 rounded-lg shadow-inicioShadow animeLeft transition-all ${styles.containerMenu}`}
        >
          <ul
            className={`flex flex-col gap-8 justify-start ${styles.optionsMenu}`}
          >
            <li className="flex flex-row gap-2 items-center">
              <Inicio />
              <a
                className="font-audioWide text-whiteColor hover:text-yellowColor duration-300 ease-in-out"
                href="#inicio"
              >
                Início
              </a>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Sobre />
              <a
                className="font-audioWide text-whiteColor hover:text-greenColor duration-300 ease-in-out"
                href="#sobre"
              >
                Sobre
              </a>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Projetos />
              <a
                className="font-audioWide text-whiteColor hover:text-purpleColor duration-300 ease-in-out"
                href="#projetos"
              >
                Projetos
              </a>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Skills />
              <a
                className="font-audioWide text-whiteColor hover:text-redColor duration-300 ease-in-out"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="flex flex-row gap-2 items-center">
              <Contato />
              <a
                className="font-audioWide text-whiteColor hover:text-blueColor duration-300 ease-in-out"
                href="#contato"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
