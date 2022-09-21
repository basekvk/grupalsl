import Footer from "../components/Footer";
import Header from "../components/Header";
import Metas from "../components/Metas";
import BannerSingle from "./../components/BannerSingle";
import ServiceDetails from "./../components/ServiceDetails";

function obrasDePoceria() {
  return (
    <>
      <Metas />
      <Header />
      <BannerSingle
        pageTitle={"Obras de Pocería"}
        migasPan={"Obras de pocería"}
      />
      <ServiceDetails
        foto={"images/home1/client1.jpg"}
        fotoAlt={""}
        foto2={"images/home1/client1.jpg"}
        fotoAlt2={""}
        titleService={"Obras de Pocería"}
        textService1={
          "Grupal SL cuenta con especialistas en pocería altamente cualificados. Somos una empresa de obras de pocería con más de 25 años de trabajo. Nuestros expertos son líderes en obras de pocería en la Comunidad de Madrid."
        }
        textService2={
          "En Grupal SL disponemos de un amplio servicio de rehabilitación de colectores, arquetas, pozos, y todos los elementos deteriorados que completan una red de saneamiento. Recomendamos realizar revisiones periódicas, para comprobar el estado de la red de saneamiento. Con la ayuda de las revisiones continuadas se pueden hacer frente a futuros problemas. El deterioro de la red puede provocar fugas y filtraciones en las viviendas y pavimentos, generando daños en las estructuras, socavamientos en el terreno, etc."
        }
        textService3={
          "Disponemos del mejor equipo de trabajadores con titulación específica de pocería. Nuestros profesionales se mantienen actualizados para ofrecer los mejores materiales y tecnología de precisión, para conseguir así resultados eficientes y de calidad en todas las obras de pocería."
        }
        textService4={
          "También nos adaptamos a las necesidades de los clientes y a las características de la obra. Siempre adaptamos los materiales y las técnicas específicas. Somos una empresa puntual en los plazos de inicio de las obras como en la fecha de finalización. Como los mejores profesionales de pocería de Madrid nuestros presupuestos se ajustan al bolsillo de cada cliente."
        }
        titleAcordeon1={"¿Qué es un pocero?"}
        textAcordeon1={
          "Según el Diccionario de la Lengua Española «pocero» es la persona que limpia pozos, los construye o trabaja en ellos, sin embargo en la actualidad su principal función es el mantenimiento y rehabilitación del sistema de alcantarillado."
        }
        textAcordeon12={
          "En sus inicios este trabajo consistía en buscar y aflorar el agua y existen suficientes indicios en la literatura de las culturas más antiguas que así lo demuestran.El primer sistema de alcantarillado del que tenemos conocimiento se construyó en Nippur (India) en el año 3.750 A.C., aunque fue en la Grecia Antigua donde se construyeron los verdaderos sistemas de alcantarillado."
        }
        titleAcordeon2={"¿Qué trabajos realiza un pocero?"}
        textAcordeon2={
          "Hoy en día, las nuevas tecnologías de realización de sondeos con maquinaria y la extracción de agua con bombas y potentes motores han terminado con el oficio de pocero, tal y como se conocía hasta entonces."
        }
        textAcordeon21={
          "Como ya hemos dicho, en la actualidad los poceros se dedican principalmente al mantenimiento y rehabilitación del alcantarillado, utilizando los últimos avances tecnológicos han conseguido realizar lo que hace años era prácticamente imposible: limpiar, mantener y rehabilitar las tuberías deterioradas sin necesidad de abrir zanja ni correr grandes riesgos, ya que la pocería sin zanja consigue crear una nueva tubería en el interior de la que tenemos que reparar, utilizando alguna abertura existente."
        }
        titleAcordeon3={"¿Por qué elegir a GRUPALSL como poceros en Madrid?"}
        textAcordeon3={
          "Nuestro principal objetivo como poceros es ofrecer desatascos con los servicios de pocería, con la mayor rapidez y al mejor precio. Queremos ser los más completos para todos nuestros clientes. Garantizamos el mejor resultado en nuestros trabajos ya que disponemos de la mejor tecnología y de última generación para que los servicios urgentes a la hora del incidente sean solucionados lo antes posible. Tenemos valores de fidelidad, compromiso, seriedad, honestidad y transparencia."
        }
        textAcordeon31={
          "Trabajamos en ello realizando un mantenimiento adecuado para su correcto funcionamiento, rehabilitación de tuberías antiguas o deterioradas además de limpiar pozos negros, cloacas o realizando desatascos o desatrancos de tuberías o alcantarillados atascados por depósitos."
        }
      />
      <Footer />
    </>
  );
}

export default obrasDePoceria;
