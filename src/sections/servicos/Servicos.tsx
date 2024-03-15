import css from "./servicos.module.css";
import Instalacao from "../../assets/servicos/instalacao.svg?react";
import Implementacao from "../../assets/servicos/implementacao.svg?react";
import Manutencao from "../../assets/servicos/manutencao.svg?react";
import Suporte from "../../assets/servicos/suporte.svg?react";

const Servicos = () => {
  return (
    <section className={css.container}>
      <h3>Sistemas de Automação Comercial</h3>
      <p>Desenvolvidos especialmente para agilizar seus negócios.</p>
      <div className={css.flex}>
        <div className={css.card}>
          <Instalacao className={css.svgIcon} />
          <p>instalacao</p>
        </div>
        <div className={css.card}>
          <Implementacao className={css.svgIcon} />
          <p>implementacao</p>
        </div>
        <div className={css.card}>
          <Manutencao className={css.svgIcon} />
          <p>manutencao</p>
        </div>
        <div className={css.card}>
          <Suporte className={css.svgIcon} />
          <p>suporte</p>
        </div>
      </div>
    </section>
  );
};

export default Servicos;
