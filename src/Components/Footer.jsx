import styles from "../styles/Footer.module.scss";
import { ReactComponent as Whatsapp } from "../assets/contato/whatsapp-white.svg";
import { ReactComponent as Github } from "../assets/contato/github-white.svg";
import { ReactComponent as Instagram } from "../assets/contato/instagram-white.svg";
import { ReactComponent as Linkedin } from "../assets/contato/linkedin-white.svg";

const Footer = () => {
  return (
    <footer className={`maxWidth h-[2px] pr-2 pl-2 mb-[60px] ${styles.footer}`}>
      <div className="pt-4 flex flex-row justify-between items-center">
          <p className="text-sm font-firaCode text-whiteColor">
            Feito por Mateus Paulo, inspirado no Design de{" "}
            <span className="text-purpleColor font-bold">Osama Daimallah</span>
          </p>
          <ul className="flex flex-row items-center gap-4">
            <li>
              <Whatsapp />
            </li>
            <li>
              <Github />
            </li>
            <li>
              <Instagram />
            </li>
            <li>
              <Linkedin />
            </li>
          </ul>
      </div>
    </footer>
  );
};

export default Footer;
