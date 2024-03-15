import "./App.css";
import Header from "./components/Header";
import Inicio from "./sections/inicio/Inicio";
import Servicos from "./sections/servicos/Servicos";
import Sistema from "./sections/Sistema/Sistema";
import Clientes from "./sections/clientes/Clientes";
import Depoimentos from "./sections/depoimentos/Depoimentos";
import Sobre from "./sections/sobre/Sobre";
import Whatsapp from "./assets/whatsapp.svg?react";
import Contato from "./sections/contato/Contato";

function App() {
  return (
    <>
      <Header />
      <main>
        <Inicio />
        <Servicos />
        <Sistema />
        <Clientes />
        <Depoimentos />
        <Sobre />
        <a className="whatsLink" href="">
          <Whatsapp className="whatsIcon" />
        </a>
        <Contato />
      </main>
    </>
  );
}

export default App;
