import css from "./clientes.module.css";

import AcaiTigela from "../../assets/clientes/Açai-Tigela.jpg";
import AJaponesa from "../../assets/clientes/AJaponesa.jpg";
import BarBuds from "../../assets/clientes/BarBuds.jpg";
import BauDaPizza from "../../assets/clientes/BauDaPizza.jpg";
import BeckBedidas from "../../assets/clientes/BeckBedidas.jpg";
import BeerStop from "../../assets/clientes/BeerStop.jpg";
import BellaDondoca from "../../assets/clientes/BellaDondoca.jpg";
import Biquinis from "../../assets/clientes/Biquinis.jpg";
import Brodis from "../../assets/clientes/Brodis.jpg";
import Cafezinho from "../../assets/clientes/Cafezinho.jpg";
import CarolinaMartori from "../../assets/clientes/Carolina-Martori.jpg";
import CasaFrangoAssado from "../../assets/clientes/Casa-frango-assado.jpg";
import CasaCarnesSantaAdelia from "../../assets/clientes/CasaCarnesSantaAdelia.png";
import CasaDasPersianas from "../../assets/clientes/CasaDasPersianas.jpg";
import CentraldosFiltros from "../../assets/clientes/Central-dos-filtros.jpg";
import ChaveiroModelo from "../../assets/clientes/Chaveiro-Modelo.jpg";
import CicaModas from "../../assets/clientes/Cica-Modas.jpg";
import DalvaSalgados from "../../assets/clientes/Dalva-salgados.jpg";
import Dboneca from "../../assets/clientes/Dboneca.jpg";
import DoceMenina from "../../assets/clientes/DoceMenina.jpg";
import DreamCoffee from "../../assets/clientes/DreamCoffee.jpg";
import EmporioLeal from "../../assets/clientes/EmporioLeal.jpg";
import EstacaoRolamentos from "../../assets/clientes/Estacao-Rolamentos.jpg";
import EstiloElegante from "../../assets/clientes/Estilo-Elegante.jpg";
import estrela from "../../assets/clientes/estrela.jpg";
import EstudioA2 from "../../assets/clientes/EstudioA2.jpg";
import Eterfran from "../../assets/clientes/Eterfran.jpeg";
import FernandaPapelaria from "../../assets/clientes/FernandaPapelaria.jpg";
import Feronia from "../../assets/clientes/Feronia.jpg";
import Franfer from "../../assets/clientes/Franfer.jpg";
import Gateway from "../../assets/clientes/Gateway.jpg";
import GibaPapelaria from "../../assets/clientes/GibaPapelaria.jpg";
import Idefran from "../../assets/clientes/Idefran.jpg";
import ImperiodasCarnes from "../../assets/clientes/Imperio-das-carnes.jpg";
import ImperiodoKibe from "../../assets/clientes/Imperio-kibe.jpg";
import ImperioSalgaderia from "../../assets/clientes/ImperioSalgaderia.jpeg";
import Jacare from "../../assets/clientes/jacare.jpg";
import Keyko from "../../assets/clientes/Keyko.jpg";
import LaFinestra from "../../assets/clientes/La-Finestra.jpg";
import Levogue from "../../assets/clientes/Levogue.jpg";
import LojaJaponesa from "../../assets/clientes/Loja-Japonesa.jpg";
import LuciaBovo from "../../assets/clientes/Lucia-bovo.jpg";
import Madricapas from "../../assets/clientes/Madricapas.jpg";
import Marmorista from "../../assets/clientes/Marmorista.jpg";
import MassaPura from "../../assets/clientes/Massa-Pura.jpg";
import MB from "../../assets/clientes/MB.jpg";
import Minuano from "../../assets/clientes/Minuano.jpg";
import MyBaby from "../../assets/clientes/MyBaby.jpg";
import NonnoGrill from "../../assets/clientes/NonnoGrill.jpg";
import Officinna from "../../assets/clientes/Officinna.jpg";
import PadariaPriscila from "../../assets/clientes/PadariaPriscila.jpeg";
import PapelariaMendonca from "../../assets/clientes/Papelaria-Mendonca.jpg";
import ParadadoPao from "../../assets/clientes/Parada-do-pao.jpg";
import Percar from "../../assets/clientes/Percar.jpg";
import PontoNatural from "../../assets/clientes/PontoNatural.jpg";
import RoanneJoias from "../../assets/clientes/RoanneJoias.jpg";
import salvia from "../../assets/clientes/salvia.jpg";
import Sansebastian from "../../assets/clientes/San-sebastian.jpg";
import sansiro from "../../assets/clientes/sansiro.jpg";
import SantaDevocao from "../../assets/clientes/SantaDevocao.jpg";
import SantoCrepe from "../../assets/clientes/Santo-crepe.jpg";
import Savelli from "../../assets/clientes/Savelli.jpg";
import Sedezero from "../../assets/clientes/Sedezero.jpg";
import SenhorPao from "../../assets/clientes/SenhorPao.jpg";
import Sucaju from "../../assets/clientes/sucaju.jpg";
import Sumo from "../../assets/clientes/Sumo.jpg";
import SupermercadoSaoPaulo from "../../assets/clientes/Supermercado-sao-paulo.jpg";
import Tabacaria5Estrelas from "../../assets/clientes/Tabacaria5Estrelas.jpg";
import TalitaMagazine from "../../assets/clientes/Talita-Magazine.jpg";
import Tom from "../../assets/clientes/Tom.jpg";
import Trigalle from "../../assets/clientes/Trigalle.jpg";
import Unioll from "../../assets/clientes/Unioll.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCube } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const Clientes = () => {
  return (
    <section id="clientes" className={css.container}>
      <h5>Quem confia na MPM Software</h5>
      <p>Conheça os parceiros que confiam em nossos sistemas.</p>
      <div>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 1,
            shadowScale: 0.8,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={AcaiTigela} alt="AcaiTigela" />
              <img src={AJaponesa} alt="AJaponesa" />
              <img src={BarBuds} alt="BarBuds" />
              <img src={BauDaPizza} alt="BauDaPizza" />
              <img src={BeckBedidas} alt="BeckBedidas" />
              <img src={BeerStop} alt="BeerStop" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={BellaDondoca} alt="BellaDondoca" />
              <img src={Biquinis} alt="Biquinis" />
              <img src={Brodis} alt="Brodis" />
              <img src={Cafezinho} alt="Cafezinho" />
              <img src={CarolinaMartori} alt="CarolinaMartori" />
              <img src={CasaFrangoAssado} alt="CasaFrangoAssado" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={CasaCarnesSantaAdelia} alt="CasaCarnesSantaAdelia" />
              <img src={CasaDasPersianas} alt="CasaDasPersianas" />
              <img src={CentraldosFiltros} alt="CentraldosFiltros" />
              <img src={ChaveiroModelo} alt="ChaveiroModelo" />
              <img src={CicaModas} alt="CicaModas" />
              <img src={DalvaSalgados} alt="DalvaSalgados" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={Dboneca} alt="Dboneca" />
              <img src={DoceMenina} alt="DoceMenina" />
              <img src={DreamCoffee} alt="DreamCoffee" />
              <img src={EmporioLeal} alt="EmporioLeal" />
              <img src={EstacaoRolamentos} alt="EstacaoRolamentos" />
              <img src={EstiloElegante} alt="EstiloElegante" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={estrela} alt="estrela" />
              <img src={EstudioA2} alt="EstudioA2" />
              <img src={Eterfran} alt="Eterfran" />
              <img src={FernandaPapelaria} alt="FernandaPapelaria" />
              <img src={Feronia} alt="Feronia" />
              <img src={Franfer} alt="Franfer" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={Gateway} alt="Gateway" />
              <img src={GibaPapelaria} alt="GibaPapelaria" />
              <img src={Idefran} alt="Idefran" />
              <img src={ImperiodasCarnes} alt="ImperiodasCarnes" />
              <img src={ImperiodoKibe} alt="ImperiodoKibe" />
              <img src={ImperioSalgaderia} alt="ImperioSalgaderia" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={Jacare} alt="Jacare" />
              <img src={Keyko} alt="Keyko" />
              <img src={LaFinestra} alt="LaFinestra" />
              <img src={Levogue} alt="Levogue" />
              <img src={LojaJaponesa} alt="LojaJaponesa" />
              <img src={LuciaBovo} alt="LuciaBovo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={Madricapas} alt="Madricapas" />
              <img src={Marmorista} alt="Marmorista" />
              <img src={MassaPura} alt="MassaPura" />
              <img src={MB} alt="MB" />
              <img src={Minuano} alt="Minuano" />
              <img src={MyBaby} alt="MyBaby" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={NonnoGrill} alt="NonnoGrill" />
              <img src={Officinna} alt="Officinna" />
              <img src={PadariaPriscila} alt="PadariaPriscila" />
              <img src={PapelariaMendonca} alt="PapelariaMendonca" />
              <img src={ParadadoPao} alt="ParadadoPao" />
              <img src={Percar} alt="Percar" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={PontoNatural} alt="PontoNatural" />
              <img src={RoanneJoias} alt="RoanneJoias" />
              <img src={salvia} alt="salvia" />
              <img src={Sansebastian} alt="Sansebastian" />
              <img src={sansiro} alt="sansiro" />
              <img src={SantaDevocao} alt="SantaDevocao" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={SantoCrepe} alt="SantoCrepe" />
              <img src={Savelli} alt="Savelli" />
              <img src={Sedezero} alt="Sedezero" />
              <img src={SenhorPao} alt="SenhorPao" />
              <img src={Sucaju} alt="Sucaju" />
              <img src={Sumo} alt="Sumo" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.carousel}>
              <img src={SupermercadoSaoPaulo} alt="SupermercadoSaoPaulo" />
              <img src={Tabacaria5Estrelas} alt="Tabacaria5Estrelas" />
              <img src={TalitaMagazine} alt="TalitaMagazine" />
              <img src={Tom} alt="Tom" />
              <img src={Trigalle} alt="Trigalle" />
              <img src={Unioll} alt="Unioll" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clientes;
