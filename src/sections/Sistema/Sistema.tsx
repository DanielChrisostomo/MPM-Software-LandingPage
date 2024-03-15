import css from "./sistema.module.css";
import Computer from "../../assets/computer-and-people.svg?react";
import Ecommerce from "../../assets/vantagens/ecommerce.svg?react";
import Sat from "../../assets/vantagens/sat.svg?react";
import Alimentacao from "../../assets/vantagens/alimentacao.svg?react";

const lista = [
  "ECFe - SAT",
  "Notas Fiscais Eletrônicas - NFe",
  "Notas Fiscais Eletrônicas de Serviço - NFSe",
  "Nota Fiscal Paulista",
  "Transmissão Eletrônica de Fundos - TEF",
  "SPED",
  "Controle de Estoque",
  "Gerência de Vendas, Pedidos e Orçamentos",
  "Faturamento com integração bancária",
  "Reserva de Produtos",
  "Consignação",
  "Ordens de Serviço",
  "Controle de Comissões por Vendedores e Produtos",
  "Gestão de Clientes e Fornecedores",
  "Importação de XML das Compras",
  "Gerência Financeira",
  "Contas a Pagar e Receber",
  "Controle de Contas Bancárias",
  "Fluxo de Caixa",
  "Contabilidade Gerencial",
  "Livro Caixa",
  "Módulo CRM",
  "Relatórios e Gráficos Personalizados",
  "Integração com Plataformas Móveis",
  "Integração com Ifood",
  "Integração com AnotaAi",
  "Integração com Marketplaces através da plataforma Irroba",
];

const Sistema = () => {
  return (
    <section id="sistema" className={css.container}>
      <h4>Fast Store</h4>
      <p>Sistema de Automação Comercial</p>
      <div className={css.box}>
        <div className={css.especificacao}>
          <p>
            Excelente gestor administrativo, atendendo às exigências da
            legislação - SAT / NFe / NFSe (serviços) - além de trabalhar
            integrado com plataformas móveis.
          </p>
          <div className={css.computer}>
            <Computer className={css.imageSVG} />
          </div>
          <p>
            Sistema totalmente integrado, voltado para a gestão do comércio em
            geral, com a finalidade de promover a automação dos procedimentos
            administrativos e financeiros, desenvolvido para que seus recursos
            estejam plenamente direcionados para a otimização de processos,
            incremento da produtividade, ampliação dos resultados e dotado de
            atributos facilitadores da operação.
          </p>
          <br />
          <div className={css.segmentos}>
            <p>
              Veja quais segmentos essa solução atende: <br />
              <span>padarias</span> <span>lojas de roupa</span>{" "}
              <span>restaurantes</span> <span>lojas de calçados</span>{" "}
              <span>lanchonetes</span> <span>lojas de móveis e decorações</span>{" "}
              <span>joalherias</span> <span>materiais de construção</span>{" "}
              <span>conveniências</span> <span>presentes e utilidades</span>{" "}
              <span>mercados</span> <span>papelarias</span>{" "}
              <span>oficinas mecânicas</span> <span>autopeças</span>{" "}
              <span>prestadores de serviços em geral</span>{" "}
              <span>pizzarias</span>
            </p>
          </div>
        </div>
        <div>
          <ul className={css.FastStoreList}>
            {lista.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={css.vantagens}>
        <div className={css.vantagem}>
          <Alimentacao className={css.icon} />
          <details>
            <summary>Alimentação</summary>
            <span>
              Temos uma excelente solução para o segmento de alimentação,
              atendendo bares, pizzarias, restaurantes, lanchonetes, depósitos
              de bebidas, conveniências e mercados. Uma integração completa com
              IFOOD e com o aplicativo ANOTA AI para pedidos via Whatsapp é um
              diferencial de nosso sistema de gestão. Nossas aplicações FAST
              Comanda e FAST Delivery são soluções eficientes para atendimento
              de mesa, balcão e para as entrega. O pagamento por PIX é outra
              facilidade importante e funcional.
            </span>
          </details>
        </div>

        <div className={css.vantagem}>
          <Sat className={css.icon} />
          <details>
            <summary>Fiscal</summary>
            <span>
              Todas as demandas fiscais estão resolvidas pelo nosso sistema
              FASTSTORE. Emissão de cupons fiscais via SAT ou NFCe (Nota Fiscal
              eletrônica), emissão de DANFE relativo às Notas Fiscais
              eletrônicas, como também a integração TEF para cartões de crédito
              e débito. Temos integração com as mais importantes instituições
              bancárias destinada à emissão de boletos bancários e troca de
              arquivos de remessa e retorno.
            </span>
          </details>
        </div>

        <div className={css.vantagem}>
          <Ecommerce className={css.icon} />
          <details>
            <summary>Ecommerce</summary>
            <span>
              Uma solução de integração com uma plataforma especializada em
              operações com E-commerce e Marketplace está disponível, onde
              nossos processos de gerência financeira, administração de
              estoques, vendas e emissão de documentos fiscais, tornam nosso
              sistema FASTSTORE uma importante ferramenta de apoio operacional
              e, principalmente, às decisões estratégicas e de gestão.
            </span>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Sistema;
