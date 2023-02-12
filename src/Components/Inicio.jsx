/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header.jsx";
import styles from "../styles/Inicio.module.scss";
import ArrowNextPage from "./ArrowNextPage.jsx";
import { ReactComponent as Download } from "../assets/inicio/download-icon.svg";
import { ReactComponent as Github } from "../assets/inicio/github-inicio.svg";
import { ReactComponent as Instagram } from "../assets/inicio/instagram-inicio.svg";
import { ReactComponent as Linkedin } from "../assets/inicio/linkedin-inicio.svg";

const Inicio = () => {
  return (
    <div
      id="inicio"
      className="pb-[90px] sm:pb-[120px]"
    >
      <Header pointColor="yellowColor" blurBg="yellowColor" />
      <main className={`maxWidth sm:pt-28 lg:pt-28 ${styles.containerInicio}`}>
        <aside>
          <ul
            className={`${styles.listPagesActives} min-[700px]:flex flex-col gap-8 ml-4 mt-28`}
          >
            <a
              href="#inicio"
              className="bg-yellowColor h-3 w-3 lg:w-4 lg:h-4 rounded-full"
            >
              {" "}
            </a>
            <a
              href="#sobre"
              className="bg-greenColor h-3 w-3 lg:w-4 lg:h-4 rounded-full"
            >
              {" "}
            </a>
            <a
              href="#projetos"
              className="bg-purpleColor h-3 w-3 lg:w-4 lg:h-4 rounded-full"
            >
              {" "}
            </a>
            <a
              href="#skills"
              className="bg-redColor h-3 w-3 lg:w-4 lg:h-4 rounded-full"
            >
              {" "}
            </a>
            <a
              href="#contato"
              className="bg-blueColor h-3 w-3 lg:w-4 lg:h-4 rounded-full"
            >
              {" "}
            </a>
          </ul>
        </aside>
        <section className="pt-10 flex flex-col items-center w-full">
          <div className={styles.containerTitle}>
            <h1 className="font-audioWide text-4xl sm:text-5xl lg:text-6xl text-whiteColor text-center">
              Mateus <br />
              Paulo da Silva
            </h1>
            <div className={`${styles.blurEffect}`} />
            <span
              className={`font-audioWide text-5xl sm:text-6xl lg:text-7xl text-center ${styles.backgroundText}`}
            >
              Mateus
            </span>
          </div>
          <p
            className={`font-firaCode text-center text-sm lg:text-base text-whiteColor max-w-sm sm:max-w-lg lg:max-w-xl mt-5 ${styles.inicioText}`}
          >
            Olá, sou um <strong>Desenvolver Front end Jr</strong>, nascido no
            Espirito Santo. Tenho 22 anos e uma ambição enorme em estar sempre
            aprendendo e desenvolvendo.
          </p>
          <button
            className={`flex flex-row items-center gap-4 mt-10 lg:mt-14 font-audioWide uppercase text-whiteColor text-sm lg:text-base border-2 border-yellowColor rounded-2xl py-[4px] px-[26px] lg:py-[8px] lg:px-[32px] box-border ${styles.button}`}
            aria-label="Baixar Curriculo"
            aria-expanded="false"
          >
            Download CV
            <Download />
          </button>
          <ArrowNextPage />
        </section>
        <aside
          className={`flex items-center flex-row justify-center min-[700px]:flex-col mr-2 sm:mt-10 mt-20 ${styles.rightAside}`}
        >
          <h1
            className={`font-audioWide text-xs sm:text-base lg:text-lg text-yellowColor acompanhe`}
          >
            ME ACOMPANHE EM:
          </h1>
          <ul className="flex items-center gap-4 sm:gap-8 flex-row min-[700px]:flex-col">
            <li className="cursor-pointer">
              <a
                href="https://github.com/mateusdev7"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.instagram.com/rmateus07/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
            <li className="cursor-pointer">
              <a
                href="https://www.linkedin.com/in/mateus-paulo-51aa9521a/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default Inicio;
