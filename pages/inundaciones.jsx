import Metas from "../components/Metas";
import BannerSingle from "../components/BannerSingle";
import ServiceDetails from "../components/ServiceDetails";

function inundaciones() {
  return (
    <>
      <Metas />

      <BannerSingle pageTitle={"Inundaciones"} migasPan={"Inundaciones"} />
      <ServiceDetails
        foto={"images/home1/client1.jpg"}
        fotoAlt={""}
        foto2={"images/home1/client2.jpg"}
        fotoAlt2={""}
        titleService={"Inundaciones"}
        textService1={
          "Generalmente las inundaciones son de imprevisto, ya sea por una fuerte tormenta que inunda un garaje, o una vivienda, el dejar algún grifo abierto por despiste, la rotura de alguna tubería, etc… Principalmente ocasionado por la saturación de los desagües que no son suficientes, o no se les ha realizado un correcto mantenimiento y por ello evacuan bien."
        }
        textService2={
          "Para vaciar la saturación de agua en una inundación de cualquier superficie, ya sea el hueco de un ascensor, un garaje, sótanos, obras, viviendas, etc... Nuestro equipo de operarios esta disponible las 24h con un servicio urgente para la evacuación de aguas al igual que en de desatascos, tras la llamada están preparados para acudir de inmediato con nuestros camiones de limpieza y succión de aguas, que cuentan con instrumentos de bombeo de aguas en función de las necesidades del cliente. Aseguramos una evacuación de aguas completa, obteniendo los mejores resultados en el menor tiempo posible."
        }
        titleAcordeon1={"¿Cuando llamar de urgencia?"}
        textAcordeon1={
          "Es importante no dejar a que el problema sea muy grave para llamar a una empresa de desatascos, arriesgarse y dejarlo pasar puede suponer el terminarse por estropear el sistema de saneamientos de su vivienda oficina o empresa."
        }
        textAcordeon12={`Los primeros indicios para llamar a una empresa de desatascos son:Escuchar ruidos extraños en desagües o inodorosAtascos en el WC: sale agua por el inodoro o no desagua Atasco en la bañera: sale agua por la bañera, sale agua por el plato de ducha o no tragan los desagües correctamente.Atasco de arquetas, no recogen el agua o sale agua por ellas.Las arquetas de las parcelas no se vacían y desbordan el agua.Aparecen manchas de humedad en las paredes y no detectan el problema.Atasco en bajantes de la comunidadFregadero atascado , no traga, sale agua y huele mal.Detectar olores en el hogar salientes de los desagües.Canalones que rebosan y no se vacían con la lluvia.`}
        titleAcordeon2={"¿Pasos a realizar antes de un desatasco Urgente?"}
        textAcordeon2={
          "Asesoramiento Tras contactar con nuestro equipo, un técnico visita el desatasco para tener una primera toma de contacto y examinar todas las necesidadesVisita y valoración del desatascoEl técnico mide y valora el terreno para sacar conclusiones sobre los requerimientos que se deben realizar para hacer el desatranco."
        }
        textAcordeon21={
          "Inspección con cámara En ocasiones, nuestros profesionales analizan el interior del desatasco con la ayuda de una cámara TV para poder elaborar un presupuesto personalizado y cerrado.Informe técnico de la operación. Tras analizar el material gráfico recopilado, ejecutamos un informe técnico y presentamos un presupuesto completo de la obra.Inicio de los trabajos de desatascosCuando el cliente acepta el presupuesto, todo nuestro equipo técnico acude a la zona de trabajo para dar comienzo a la ejecución de la obra."
        }
        titleAcordeon3={"Ventajas de nuestro servicio urgente"}
        textAcordeon3={
          "Poceros Cualificados: Contamos con una cuadrilla de poceros altamente cualificados que se desplazarán rápidamente al lugar de la incidencia para realizar el servicio de desatasco urgentemente.Tecnología: utilizamos cámaras TV para encontrar eficientemente el problema y realizar el desatasco con rapidez.Nos adaptamos a vuestras necesidades: contamos con un equipo de atención al cliente que coordinará el servicio según vuestras necesidades las 24 horas y los 365 días del año."
        }
        textAcordeon31={
          "Llegamos a todos partes: nos desplazamos por toda la comunidad de Madrid, no importa cuán lejos nos quede el lugar de la incidencia. Cubrimos desde el centro de Madrid, hasta los pueblos más alejados de toda la Comunidad. Así como también a localidades cercanas: Toledo, Aranjuez, Guadalajara, etc …Flota de Camiones: disponemos de una flota de camiones de diferentes tamaños, para adaptarnos a los diferentes garajes, calles, hogares o empresas.Precios Asequibles: contamos con los precios más económicos del mercado."
        }
      />
    </>
  );
}

export default inundaciones;
