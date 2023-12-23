import Contato from "./Components/Contato.jsx";
import Inicio from "./Components/Inicio.jsx";
import Projetos from "./Components/Projetos.jsx";
import Skills from "./Components/Skills.jsx";
import Sobre from "./Components/Sobre.jsx";
import "./global.scss";

function App() {
  return (
    <>
      <Inicio />
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
    </>
  );
}

export default App;
