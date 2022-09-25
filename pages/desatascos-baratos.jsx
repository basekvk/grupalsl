import Metas from "../components/Metas";
import BannerSingle from "../components/BannerSingle";
import ServiceDetails from "../components/ServiceDetails";

function desatascosBaratos() {
  return (
    <>
      <Metas />

      <BannerSingle
        pageTitle={"Desatascos Baratos"}
        migasPan={"Desatascos Baratos"}
      />
      <ServiceDetails
        foto={"images/home1/client1.jpg"}
        fotoAlt={""}
        foto2={"images/home1/client1.jpg"}
        fotoAlt2={""}
        titleService={"DESATASCOS BARATOS"}
        textService1={
          "Grupal SL es una empresa líder en servicios de desatascos y desatrancos en la Comunidad de Madrid, Toledo y Guadalajara. Como profesionales del sector estamos disponibles las 24 horas, los 365 días del año y garantizamos el mejor servicio a un precio asequible. Nos importa la opinión de nuestros clientes, por ello, nuestros precios se ajustan para que sean los más económicos, sin perder la calidad.  "
        }
        textService2={
          "Somos la mejor opción de desatascos baratos en Madrid, contamos con más de 25 años de experiencia. Contamos con vehículos propios y un amplio personal cualificado para solucionar los atascos de tuberías de desagües, WC, lavadoras, lavavajillas, fregaderos, sumideros, bajantes comunitarias, industriales, viviendas, parkings, etc. En Grupal SL garantizamos el mejor servicio en el menor tiempo posible, somos los mejores en el servicio de desatascos baratos en Madrid. "
        }
        titleAcordeon1={"¿Por qué se produce un atasco?"}
        textAcordeon1={
          "Generalmente, los atascos se producen por acumulación de sustancias calcáreas o jabonosas que se incrustan en las paredes de las tuberías. Las sustancias suelen proceder del jabón en las lavadoras, el papel no desechable, la tierra de los desagües pluviales, las raíces que pueden penetrar en las tuberías. En consecuencia, las tuberías pierden fluidez y se provoca un atasco.  "
        }
        textAcordeon12={"Mercancías peligrosas y perecederas, Acuerdo 2019"}
        titleAcordeon2={"¿Qué Aconsejamos?"}
        textAcordeon2={
          "Nuestra empresa siempre aconseja un mantenimiento de las tuberías mediante vehículos de alta presión, inspección con vídeo cámara de grabación y registrar cualquier arqueta que pueda provocar un atasco. Desde  Grupo Taser recomendamos una revisión periódica, para poder revertir los posibles problemas en un futuro. Los pozos y fosas sépticas son depósitos que necesitan un mantenimiento y limpieza ininterrumpida.  Nuestros expertos cuentan con una gran experiencia en el vaciado de las aguas negras con  vehículos de succión. Contamos con los medios adecuados para la correcta conservación de estos depósitos."
        }
        titleAcordeon3={"Ventajas de nuestros Clientes"}
        textAcordeon3={
          "Trabajamos con todo tipo de empresas y particulares, desde las obras más pequeñas hasta las más grandes."
        }
        textAcordeon31={
          "Asesoramiento técnico profesional y eficiente.Coordinación en Madrid y Toledo.Expertos con más de 25 años de experienciaPrecios asequibles y competitivos.Solucionamos la incidencia en máximo 2 horas.Servicio personalizado de desatascos de tuberías.Camiones cuba rápidos y profesionales.Servicio las 24 horas del día y los 365 días del año en Madrid y Toledo.Soluciones garantizadas"
        }
      />
    </>
  );
}

export default desatascosBaratos;
