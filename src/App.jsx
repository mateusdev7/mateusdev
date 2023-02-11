import Inicio from "./Components/Inicio.jsx";
import Sobre from "./Components/Sobre.jsx";
import Projetos from "./Components/Projetos.jsx";
import Skills from "./Components/Skills.jsx";
import Contato from "./Components/Contato.jsx";
// import Footer from "./Components/Footer.jsx";
import './global.scss'

function App() {
  return (
    <div>
      <Inicio />
      <Sobre />
      <Projetos />
      <Skills />
      <Contato />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
