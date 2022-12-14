import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Metas from "../components/Metas";

function errorPage() {
  return (
    <>
      <Metas />
    
      <div className="page-header">
        <div className="overlay" />
        <div className="page-header-content">
          <div className="container">
            <div className="row">
              <h3 className="page-title">404 Error</h3>
              <ul className="breadcrumb">
                <li>
                  <a href="/">Inicio</a>
                </li>
                <li className="active">Error 404</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /.page-header */}
      <div id="content" className="error-page">
        <div className="error">
          <div className="container">
            <div className="row">
              <div className="error-inner">
                <span className="error-404">404</span>
                <span className="opps">opps</span>
                <span className="sorry">
                  Lo sentimos, no podemos encontrar la página!
                </span>
                <span className="reason">
                  Se ha encontrado algún error en la página o esta no existe.
                </span>
                <Link href="/">
                <a className="custom-btn">
                  Volver a la página de inicio
                </a>
                </Link>
                
              </div>
              {/* /.error-inner */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.error */}
      </div>
      {/* #content  */}
     
    </>
  );
}

export default errorPage;
