import React from "react";
import { ReactComponent as Github } from "../assets/projetos/github-projetos.svg";
import { ReactComponent as Instagram } from "../assets/projetos/instagram-projetos.svg";
import { ReactComponent as Linkedin } from "../assets/projetos/linkedin-projetos.svg";
import ReactRouterDomImage from "../assets/projetos/router-dom.jpg";
import NFTCodelandia from "../assets/projetos/nft-codelandia.jpg";
import RDRCodelandia from "../assets/projetos/rdr-codelandia.jpg";
import ModernSidebar from "../assets/projetos/modern-sidebar.jpg";
import styles from "../styles/Projetos.module.scss";
import CardProject from "./CardProject.jsx";

const Projetos = () => {
  const [projectIsVisible, setProjectIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setProjectIsVisible(true);
        observer.unobserve(ref.current);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="projetos"
      ref={ref}
      className={`maxWidth pt-[160px] pb-[80px] sm:pb-[140px] ${styles.containerProjetos}`}
    >
      <aside>
        <ul
          className={`${
            projectIsVisible ? styles.listPagesActives : ""
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
        <div className={`${projectIsVisible ? styles.containerTitle : ""}`}>
          <h2 className="font-audioWide text-4xl sm:text-5xl lg:text-6xl text-whiteColor text-center">
            Projetos
          </h2>
          <div className={`${projectIsVisible ? styles.blurEffect : ""}`} />
          <h1
            className={`font-audioWide text-5xl sm:text-6xl lg:text-7xl text-center ${styles.backgroundText}`}
          >
            Projetos
          </h1>
          <h3
            className={`font-firaCode text-sm sm:text-lg text-whiteColor mt-4 ${styles.subTitle}`}
          >
            Projetos Executados
          </h3>
        </div>
        <div
          className={`grid grid-cols-1 m-auto w-full sm:w-[500px] gap-10 lg:grid-cols-2 lg:w-[850px] lg:gap-x-10 mt-20 ${
            projectIsVisible ? styles.listProjects : ""
          }`}
        >
          <CardProject
            hrefProject="https://routerdomheroes.vercel.app/"
            src={ReactRouterDomImage}
            nameProject="Router Dom Heroes"
            hrefGitHub="https://github.com/mateusdev7/react-challenges/tree/main/my-project"
          />
          <CardProject
            hrefProject="https://nftcodelandia.vercel.app/"
            src={NFTCodelandia}
            nameProject="NFT Codelândia"
            hrefGitHub="https://github.com/mateusdev7/codelandiaDesafios/tree/main/desafio-34"
          />
          <CardProject
            hrefProject="https://rdrcodelandia.vercel.app/"
            src={RDRCodelandia}
            nameProject="RDR Codelândia"
            hrefGitHub="https://github.com/mateusdev7/codelandiaDesafios/tree/main/desafio-30"
          />
          <CardProject
            hrefProject="https://sidebar-puce.vercel.app/"
            src={ModernSidebar}
            nameProject="Modern Sidebar"
            hrefGitHub="https://github.com/mateusdev7/react-challenges/tree/main/modern-sidebar"
          />
        </div>
      </section>
      <aside
        className={`flex items-center flex-row justify-center min-[700px]:flex-col mr-2 mt-16 ${
          projectIsVisible ? styles.rightAside : ""
        }`}
      >
        <h1
          className={`font-audioWide text-xs sm:text-base lg:text-lg text-purpleColor acompanhe`}
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

export default Projetos;
