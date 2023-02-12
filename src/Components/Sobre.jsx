/* eslint-disable no-unused-vars */
import React from "react";
import styles from "../styles/Sobre.module.scss";
import { ReactComponent as Github } from "../assets/sobre/github-sobre.svg";
import { ReactComponent as Instagram } from "../assets/sobre/instagram-sobre.svg";
import { ReactComponent as Linkedin } from "../assets/sobre/linkedin-sobre.svg";
const Sobre = () => {
  const ref = React.useRef();

  const [aboutIsVisible, setAboutIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setAboutIsVisible(true);
        observer.unobserve(ref.current);
      }
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="sobre"
      ref={ref}
      className={`maxWidth pt-[120px] pb-[40px] ${styles.containerSobre}`}
    >
      <aside>
        <ul
          className={`${
            aboutIsVisible ? styles.listPagesActives : ""
          } min-[700px]:flex flex-col gap-8 ml-4`}
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
        <div className={`${aboutIsVisible ? styles.containerTitle : ""}`}>
          <h2 className="font-audioWide text-4xl sm:text-5xl lg:text-6xl text-whiteColor text-center">
            Sobre
          </h2>
          <div className={`${aboutIsVisible ? styles.blurEffect : ""}`} />
          <h1
            className={`font-audioWide text-5xl sm:text-6xl lg:text-7xl text-center ${styles.backgroundText}`}
          >
            Sobre
          </h1>
          <h3
            className={`font-firaCode mt-3 text-sm sm:text-lg text-whiteColor ${styles.subTitle}`}
          >
            Explorando meu perfil
          </h3>
        </div>

        <div className="w-full m-auto sm:w-[550px] lg:w-[850px] my-[60px] lg:my-[100px] mx-auto">
          <ul
            className={`flex flex-col gap-16 ${
              aboutIsVisible ? styles.listSobre : ""
            }`}
          >
            <li className="text-left">
              <h1 className="font-audioWide text-whiteColor text-xl lg:text-2xl">
                Quem sou eu?
              </h1>
              <p className="font-firaCode text-[#d1d1d1] text-sm lg:text-base mt-2">
                Sou um estudando de Ciência da Computação, que é encantado pela tecnologia e o que podemos fazer com ela.
              </p>
            </li>

            <li className="sm:text-right">
              <h1 className="font-audioWide text-whiteColor text-xl lg:text-2xl">
                Minhas Experiências
              </h1>
              <p className="font-firaCode text-[#d1d1d1] text-sm lg:text-base mt-2 sm:text-right">
                Comecei na área no começo do ano de 2022 e possuo poucas experiências em projetos, mas estou sempre desenvolvendo e treinando com desafios que encontro na internet e com ideias que vem a mente. Portanto, no meu estágio atual, desenvolvo projetos em equipes, no qual me enriquece e me gerou muito conhecimento. 
              </p>
            </li>

            <li className="text-left">
              <h1 className="font-audioWide text-whiteColor text-xl lg:text-2xl">
                Aplicações
              </h1>
              <p className="font-firaCode text-[#d1d1d1] text-sm lg:text-base mt-2">
                Buscando sempre desenvolver com boas práticas, melhorando e
                criando protótipos/interfaces no figma e criando códigos mais
                limpos e acessíveis para todo o público.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <aside
        className={`flex items-center flex-row justify-center min-[700px]:flex-col mr-2 sm:mt-16 ${
          aboutIsVisible ? styles.rightAside : ""
        }`}
      >
        <h1
          className={`font-audioWide text-xs sm:text-base lg:text-lg text-greenColor acompanhe`}
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
  );
};

export default Sobre;
