import Metas from "../components/Metas";
import BannerSingle from "../components/BannerSingle";
import About from "../components/About";
import ServiceDetails from "../components/ServiceDetails";

export default function quienesSomos() {
  return (
    <>
      <Metas
      title="Quienes Somos"
      content="Somos una empresa de servicios de limpieza y mantenimiento de comunidades de vecinos, empresas, oficinas, locales comerciales, etc. Nuestro objetivo es ofrecer un servicio de calidad a un precio competitivo."
      keywords="limpieza, mantenimiento, comunidades, empresas, oficinas, locales comerciales"
      />
      <BannerSingle pageTitle={"Quiénes Somos"} migasPan={"Quiénes Somos"} />
      <About />
      <ServiceDetails />
    </>
  );
}
