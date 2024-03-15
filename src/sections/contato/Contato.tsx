import React from "react";
import css from "./contato.module.css";
import Linkedin from "../../assets/redes-sociais/linkedin.svg?react";
import Instagram from "../../assets/redes-sociais/instagram.svg?react";
import Facebook from "../../assets/redes-sociais/facebook.svg?react";
import Location from "../../assets/location-indicator.svg?react";

const Contato = () => {
  const [nome, setNome] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    alert("E-mail enviado com sucesso");
  }

  return (
    <section id="contato" className={css.container}>
      <h6>Contato</h6>
      <p>Entre em contato e solicite um orçamento.</p>
      <div className={css.box}>
        <div className={css.contatoForm}>
          <form action="" method="POST" onSubmit={sendEmail}>
            <div className={css.fieldHolder}>
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="seu nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>
            <div className={css.fieldHolder}>
              <label htmlFor="phone">Telefone</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="(XX) 12345-6789"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols={45}
                rows={10}
                placeholder="digite aqui sua mensagem"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              ></textarea>
            </div>
            <button className={css.btnForm}>Enviar</button>
          </form>
        </div>

        <div className={css.contatoInfo}>
          <p>MPM SOFTWARE</p>
          <div className={css.infoHolder}>
            <p>
              Franca{" "}
              <Location style={{ maxWidth: "20px", maxHeight: "20px" }} />
            </p>
            <p>(16) 98144-9732</p>
          </div>
          <div className={css.infoHolder}>
            <p>
              Ribeirão Preto{" "}
              <Location style={{ maxWidth: "20px", maxHeight: "20px" }} />
            </p>
            <p>(16) 98113-4582</p>
          </div>
          <div className={css.socialMediaHolder}>
            <a href="https://www.linkedin.com/company/mpmsistemas/">
              <Linkedin className={css.socialMediaIcon} />
            </a>
            <a href="https://www.instagram.com/mpmsoft/">
              <Instagram className={css.socialMediaIcon} />
            </a>
            <a href="https://www.facebook.com/mpmsistemas/">
              <Facebook className={css.socialMediaIcon} />
            </a>
          </div>
        </div>
      </div>
      <footer>
        <p>MPM Software - Todos os direitos reservados</p>
      </footer>
    </section>
  );
};

export default Contato;
