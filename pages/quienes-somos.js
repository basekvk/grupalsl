import Links from "../components/Metas";
import BannerSingle from '../components/BannerSingle';
import About from '../components/About';
import Footer from '../components/Footer';
import Header from "../components/Header";
import ServiceDetails from "../components/ServiceDetails";


export default function quienesSomos() {
  return (
    <>
      <Links />
      <Header />
      <BannerSingle 
      pageTitle={'Quiénes Somos'}
      migasPan={'Quiénes Somos'}
      />
      <About />
      <ServiceDetails />
      <Footer />
    </>
  );
}
