import React from "react";
import { ReactComponent as Github } from "../assets/skills/github-skills.svg";
import { ReactComponent as Instagram } from "../assets/skills/instagram-skills.svg";
import { ReactComponent as Linkedin } from "../assets/skills/linkedin-skills.svg";
import ReactIcon from "../assets/skills/react-icon.svg";
import JSIcon from "../assets/skills/javascript-icon.svg";
import SassIcon from "../assets/skills/sass-icon.svg";
import FigmaIcon from "../assets/skills/figma-icon.svg";
import TailwindIcon from "../assets/skills/tailwind-icon.svg";
import TSIcon from "../assets/skills/typescript-icon.svg";
import styles from "../styles/Skills.module.scss";
import ItemSkill from "./ItemSkill.jsx";

const Skills = () => {
  const [skillsIsVisible, setSkillsIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSkillsIsVisible(true);
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin: "-100px",
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      id="skills"
      ref={ref}
      className={`maxWidth pt-[60px] pb-[40px] sm:pt-[60px] sm:pb-[100px] ${styles.containerSkills}`}
    >
      <aside>
        <ul
          className={`${
            skillsIsVisible ? styles.listPagesActives : ""
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
        <div className={`${skillsIsVisible ? styles.containerTitle : ""}`}>
          <h1 className="font-audioWide text-4xl sm:text-5xl lg:text-6xl text-whiteColor text-center">
            Skills
          </h1>
          <div className={`${skillsIsVisible ? styles.blurEffect : ""}`} />
          <span
            className={`font-audioWide text-5xl sm:text-6xl lg:text-7xl text-center ${styles.backgroundText}`}
          >
            Skills
          </span>
          <h2
            className={`font-firaCode text-sm sm:text-lg text-whiteColor mt-4 ${styles.subTitle}`}
          >
            Pool
          </h2>
        </div>
        <div
          className={`mt-24 sm:pl-[60px] sm:pr-[60px] ml-auto mr-auto flex flex-row flex-wrap gap-y-5 gap-x-3 sm:gap-10 w-full justify-center items-center ${
            skillsIsVisible ? styles.skillsItems : ""
          }`}
        >
          <ItemSkill src={ReactIcon} alt="React Icon Framework" />
          <ItemSkill src={JSIcon} alt="JavaScript Icon Language" />
          <ItemSkill src={SassIcon} alt="Sass Icon Framework" />
          <ItemSkill src={FigmaIcon} alt="Figma Icon" />
          <ItemSkill src={TailwindIcon} alt="Tailwind Icon Framework" />
          <ItemSkill src={TSIcon} alt="TypeScript Icon Language" />
        </div>
      </section>
      <aside
        className={`flex items-center flex-row justify-center min-[700px]:flex-col mr-2 mt-16 ${
          skillsIsVisible ? styles.rightAside : ""
        }`}
      >
        <h1
          className={`font-audioWide text-xs sm:text-base lg:text-lg text-redColor acompanhe`}
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

export default Skills;
