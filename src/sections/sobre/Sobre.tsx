import css from "./sobre.module.css";
import Manutencao from "../../assets/servicos/manutencao.svg?react";
import Implementacao from "../../assets/servicos/implementacao.svg?react";
import Mpm from "../../assets/codeIcon.svg?react";
import Location from "../../assets/location.svg?react";
import Professionals from "../../assets/professionals.svg?react";
import Hands from "../../assets/hands.svg?react";
import Idea from "../../assets/idea.svg?react";
import Writing from "../../assets/writing.svg?react";

const Sobre = () => {
  return (
    <>
      <section id="sobre" className={css.container}>
        <h6>Sobre</h6>
        <p>Saiba os motivos pelos quais você também pode confiar em nós.</p>
        <article className={css.box}>
          <div className={css.info}>
            <Mpm className={css.svgIcon} />
            <div className={css.column}>
              <p>A MPM SOFTWARE</p>
              <p>
                A MPM é especialista em sistemas de gestão empresarial. Iniciou
                suas atividades como desenvolvedora de sistemas específicos para
                os mais variados segmentos, direcionando-se então para a
                automação no comércio e na indústria, e hoje é um completo
                provedor de soluções em tecnologia da informação para o
                comércio.
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Location className={css.svgIcon} />
            <div className={css.column}>
              <p>MAIS DE 20 ANOS DE MERCADO</p>
              <p>
                Presente no mercado do interior de São Paulo há mais de 20 anos,
                seus diretores são profissionais com larga experiência e sólida
                formação acadêmica, destacando-se a UNICAMP (Universidade
                Estadual de Campinas).
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Professionals className={css.svgIcon} />
            <div className={css.column}>
              <p>PROFISSIONAIS QUALIFICADOS</p>
              <p>
                Os profissionais da empresa se distribuem em áreas de
                desenvolvimento de sistemas, suporte e manutenção, contando com
                Analistas, Programadores e Técnicos amplamente capacitados para
                atender as dúvidas e solicitações de nossos clientes.
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Manutencao className={css.svgIcon} />
            <div className={css.column}>
              <p>SUPORTE, TREINAMENTO E ATENDIMENTO</p>
              <p>
                Além de produzir as melhores soluções, a MPM preocupa-se em
                oferecer um serviço de suporte técnico de alto padrão, com
                competência técnica para orientar a sua implantação, fornecer
                treinamento e solucionar dúvidas sobre a operação dos sistemas,
                otimizando ao máximo seus resultados, seja por contato
                telefônico, on-line, e-mail ou on-site.
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Hands className={css.svgIcon} />
            <div className={css.column}>
              <p>PRINCÍPIOS BÁSICOS</p>
              <p>
                Nossos produtos e serviços se traduzem em produtividade,
                economia e competitividade para nossos clientes, pois
                trabalhamos com três princípios básicos: software de qualidade,
                permanente atualização tecnológica e o melhor custo-benefício
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Idea className={css.svgIcon} />
            <div className={css.column}>
              <p>PROJETOS ESPECIAIS</p>
              <p>
                Nossa área de desenvolvimento atua na confecção de sistemas
                voltados à automação e gestão administrativa aplicadas a
                diversos segmentos comerciais e industriais, contando também com
                a área de Projetos Especiais, onde são desenvolvidos sistemas
                específicos por solicitação de uma empresa ou empreendimento.
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Implementacao className={css.svgIcon} />
            <div className={css.column}>
              <p>EXCELÊNCIA EM TI</p>
              <p>
                Temos como objetivo constante fornecer meios através dos
                softwares por nós concebidos para agilizar a tomada de decisões,
                permitindo o acesso às informações de maneira rápida, eficiente
                e segura.
              </p>
            </div>
          </div>

          <div className={css.info}>
            <Writing className={css.svgIcon} />
            <div className={css.column}>
              <p>POLÍTICA DE QUALIDADE E MISSÃO</p>
              <p>
                Nosso compromisso com a qualidade se expressa em todas as ações
                que levem à satisfação dos nossos clientes, buscando disseminar
                continuamente as informações, garantir a excelência dos serviços
                e valorizar o ser humano profissional e individualmente.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Sobre;
