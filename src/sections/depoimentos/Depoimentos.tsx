import css from "./depoimentos.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Alex from "../../assets/depoimentos/alex-marques.png";
import Stelio from "../../assets/depoimentos/stelio-robusti.png";

const Depoimentos = () => {
  return (
    <>
      <section id="depoimentos" className={css.container}>
        <h6>Depoimentos</h6>
        <p>Veja o que dizem nossos parceiros.</p>
        <div className={css.carousel}>
          <Swiper
            grabCursor={true}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={css.depoimento}>
                <p>
                  <q>
                    A qualidade dos sistemas de gestão da MPM permitiu a
                    ampliação da eficiência no gerenciamento integrado de todas
                    as empresas do grupo. A competência e prestatividade da
                    equipe dos seus técnicos em muito contribuiram para a
                    evolução de nosso ambiente de TI.
                  </q>
                </p>
                <div className={css.column}>
                  <img src={Stelio} alt="Stelio Robusti" />
                  <strong>Stelio Robusti</strong>
                  <span>Grupo Robusti</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={css.depoimento}>
                <p>
                  <q>
                    A integração de todos os setores da empresa através dos
                    processos informatizados desenvolvidos pela MPM nos permite
                    uma gestão eficiente e segura. São mais de dez anos de
                    convivência e parceria.
                  </q>
                </p>
                <div className={css.column}>
                  <img src={Alex} alt="Stelio Robusti" />
                  <strong>Alex Marques Xavier</strong>
                  <span>Padaria Estrela</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Depoimentos;
