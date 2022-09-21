import Footer from "../components/Footer";
import Header from "../components/Header";
import Metas from "../components/Metas";
import BannerSingle from "../components/BannerSingle";
import ServiceDetails from "../components/ServiceDetails";

function transporteResiduos() {
  return (
    <>
      <Metas />
      <Header />
      <BannerSingle
        pageTitle={"Transportes de Residuos"}
        migasPan={"Transportes de Residuos"}
      />
      <ServiceDetails
        foto={"images/home1/client1.jpg"}
        fotoAlt={""}
        foto2={"images/home1/client1.jpg"}
        fotoAlt2={""}
        titleService={"Transportes de Residuos"}
        textService1={
          "Disponemos de vehículos de equipos mixtos para la recogida, transporte y tratamiento de residuos tanto peligrosos como no peligrosos con cisternas equipadas con el acuerdo que ADR indica y exige para el transporte homologado. En Grupal SL recogemos y transportamos los residuos siendo respetuosos con el medio ambiente. Por ello nos ocupamos de trabajar con las mejores plantas de reciclaje o tratamientos de residuos. "
        }
        textService2={
          "Procedimiento para la recogida de residuos y tratamiento 1º – El equipo técnico e encargara de conocer y clasificar el tipo de residuo a recoger. 2º –  El equipo técnico una vez conozca el tipo de residuo a recoger buscara o se pondrá en contacto con la planta de tratamiento de residuos especifica, fiable y/o recomendada para el tratamiento de dicho residuos según el contenido o tipo. 3º –  Recogida, los operarios acudirán a la zona de trabajo, el día y a la hora acordada con el cliente para la sustracción de los residuos. 4º –  Una vez sustraídos los residuos, los operarios de inmediato acudirán a la planta concertada para la recogida y el tratamiento de dichos residuos.5 –  Una vez en la planta de Tratamiento de residuos se encargaran de la eliminación, fijación o encapsulación, o la reutilización, dependiendo de la naturaleza del residuo a tratar.  "
        }
        titleAcordeon1={"¿Qué es ADR"}
        textAcordeon1={
          "Las siglas ADR o también llamado acuerdo ADR (formalmente, Acuerdo Europeo sobre el Transporte Internacional de Mercancías Peligrosas por Carretera) es un acuerdo europeo firmado por varios países para regular el transporte de mercancías peligrosas por carretera. "
        }
        textAcordeon12={"Mercancías peligrosas y perecederas, Acuerdo 2019"}

        titleAcordeon2={"Sobre el transporte de residuos"}
        textAcordeon2={
          "El transporte profesional de residuos es una actividad de gestión de residuos que está sometida al control y vigilancia por parte de las autoridades competentes y que debe cumplir con la normativa en materia de residuos, y, en su caso, de transporte de mercancías peligrosas. Para facilitar la información a los transportistas y empresas de transportes de residuos el Ministerio para Transición Ecológica y el Reto Demográfico y el Ministerio de Transportes, Movilidad y Agenda Urbana han desarrollado la presente nota informativa sobre transporte de residuos."
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

export default transporteResiduos;
