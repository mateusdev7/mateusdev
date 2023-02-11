import React from "react";
import { ReactComponent as Github } from "../assets/contato/github-contato.svg";
import { ReactComponent as Instagram } from "../assets/contato/instagram-contato.svg";
import { ReactComponent as Linkedin } from "../assets/contato/linkedin-contato.svg";
import styles from "../styles/Contato.module.scss";
import Form from "./Form.jsx";

const Contato = () => {
  const [contatoIsVisible, setContatoIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setContatoIsVisible(true);
        observer.unobserve(ref.current);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="contato"
      ref={ref}
      className={`maxWidth relative pt-[160px] pb-[120px] ${styles.containerContato}`}
    >
      <aside>
        <ul
          className={`${
            contatoIsVisible ? styles.listPagesActives : ""
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
      <section className="pt-20 pb-[60px] flex flex-col items-center w-full">
        <div className={`${contatoIsVisible ? styles.containerTitle : ""}`}>
          <h2 className="font-audioWide text-4xl sm:text-5xl lg:text-6xl text-whiteColor text-center">
            Contato
          </h2>
          <div className={`${contatoIsVisible ? styles.blurEffect : ""}`} />
          <h1
            className={`font-audioWide text-5xl sm:text-6xl lg:text-7xl text-center ${styles.backgroundText}`}
          >
            Contato
          </h1>
          <h3
            className={`font-firaCode text-sm sm:text-lg text-whiteColor mt-4 ${styles.subTitle}`}
          >
            Entre em contato comigo
          </h3>
        </div>
        <div className={`mt-20 flex flex-col justify-center items-center`}>
          <Form isVisible={contatoIsVisible} />
        </div>
      </section>
      <aside
        className={`flex items-center flex-row justify-center min-[700px]:flex-col mr-2 mt-16 ${
          contatoIsVisible ? styles.rightAside : ""
        }`}
      >
        <h1
          className={`font-audioWide text-xs sm:text-base lg:text-lg text-blueColor acompanhe`}
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
      <footer
        className={`maxWidth h-[2px] m-auto mb-[60px] absolute bottom-0 left-0 right-0 mr-4 ml-4 ${styles.footer}`}
      >
        <div
          className={`pt-4 flex gap-4 pb-8 text-center flex-col md:flex-row justify-between items-center`}
        >
          <p className="text-sm font-firaCode text-whiteColor">
            Feito por Mateus Paulo, inspirado no Design de{" "}
            <span className="text-purpleColor font-bold">Osama Daimallah</span>
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Contato;
