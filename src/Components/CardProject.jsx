import { ReactComponent as GithubProject } from "../assets/projetos/github-project.svg";

const CardProject = ({ src, hrefProject, hrefGitHub, nameProject }) => {
  return (
    <main className="relative border-purpleColor border-2 p-7 rounded-xl flex justify-center items-center">
      <p className="absolute -top-4 left-3 text-whiteColor bg-blackColor px-2 font-firaCode">
        {nameProject}
      </p>
      <a href={hrefGitHub} target="_blank" rel="noreferrer">
        <div className="absolute -top-4 right-3 text-whiteColor bg-blackColor px-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out">
          <GithubProject />
        </div>
      </a>
      <a href={hrefProject} target="_blank" rel="noreferrer">
        <img
          src={src}
          alt="Projeto"
          className="hover:scale-105 transition-all duration-300 ease-in-out shadow-inicioShadow rounded-xl object-cover"
        />
      </a>
    </main>
  );
};

export default CardProject;
