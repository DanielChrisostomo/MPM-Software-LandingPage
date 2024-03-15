import css from "./inicio.module.css";

const Inicio = () => {
  return (
    <section className={css.container}>
      <div className={css.inicio}>
        <h1>Bem Vindo à MPM Software!</h1>
        <h2>Soluções em Sistemas de Gestão para sua empresa.</h2>
        <p>
          Somos especializados em sistemas de automação para lojas,
          restaurantes, lanchonetes, oficinas e indústrias. Atendemos empresas
          comerciais e de prestação de serviços dos mais diversos segmentos.
        </p>
        <a href="#contato" className={css.btn}>
          solicitar orçamento
        </a>
      </div>
    </section>
  );
};

export default Inicio;
