import Footer from "../components/Footer";
import Header from "../components/Header";
import Metas from "../components/Metas";
import BannerSingle from "../components/BannerSingle";
import ServiceDetails from "../components/ServiceDetails";

function limpiezaFosasSepticas() {
  return (
    <>
      <Metas />
      <Header />
      <BannerSingle
        pageTitle={"Limpieza Fosas Sépticas"}
        migasPan={"Limpieza Fosas Sépticas"}
      />
      <ServiceDetails
        foto={"images/home1/client1.jpg"}
        fotoAlt={""}
        foto2={"images/home1/client1.jpg"}
        fotoAlt2={""}
        titleService={"Limpieza Fosas Sépticas"}
        textService1={
          "Si estas buscando una empresa por que tienes una fosa séptica y necesitas que sea vaciada, realizar el mantenimiento correspondiente habitual o realizar alguna revisión por algún problema puntual, somos tu mejor opción así que no dudes en llamarnos para consultar nuestros precios económicos o solicitar nuestros servicios . Nuestros departamento de atención al cliente te informará del horario disponible para asistir al lugar de la incidencia, confirmando así con el cliente día y hora a la que el técnico acudirá en su ayuda. "
        }
        textService2={
          "Queremos ser tu empresa de confianza para cualquier tipo de servicio, recordando a nuestros clientes la seriedad de nuestro trato y lo económico de nuestros precios junto con la calidad de los resultados finales de cada uno de nuestros trabajos. * Servicios que ofrecemos *Vaciado de fosas sépticas  – Limpieza de fosa séptica – Reparación o cambio de fosa séptica -Instalación de fosa séptica"
        }
        titleAcordeon1={"¿Qué es una fosa séptica"}
        textAcordeon1={
          "Una fosa séptica es un artilugio para el tratamiento primario de las aguas residuales domésticas. En ella se realiza la separación y transformación físico-química de la materia orgánica contenida en esas aguas. Se trata de una forma sencilla y barata de tratar las aguas residuales y está indicada (preferentemente) para zonas rurales o residencias situadas en parajes aislados y sustituir con ventaja a las llamadas letrinas de hoyo. Sin embargo, el tratamiento no es tan completo como en una estación depuradora de aguas residuales."
        }
        
        titleAcordeon2={"Casos habituales"}
        textAcordeon2={
          "La fosa séptica ha absorbido directamente toda el agua a través de una arqueta de mantenimiento Fosa séptica que desprende mal olor Mantenimiento Vaciado con depuradora"
        }
        textAcordeon21={
          "La fosa séptica se ha movido Existe un atasco en los sistemas de filtrado de las fosas sépticas El campo de drenaje de la fosa séptica se ha inundado con las lluvias."
        }
        titleAcordeon3={"Nuestros principales Clientes"}
        textAcordeon3={
          "Trabajamos con todo tipo de empresas y particulares, desde las obras más pequeñas hasta las más grandes."
        }
        textAcordeon31={
          "Comunidades de Propietarios – Arquitectos – Administradores de Fincas – Responsables de mantenimiento de Empresas – Propietarios de Chalets o Pisos – Ayuntamientos – Empresas Constructoras – Empresas – Aseguradoras- Colegios -Autónomos."
        }
      />
      <Footer />
    </>
  );
}

export default limpiezaFosasSepticas;
