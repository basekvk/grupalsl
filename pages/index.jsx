import LatestNews from "../components/LatestNews";
import Metas from '../components/Metas';
import Carrusel from '../components/Carrusel'




export default function Home() {
  return (
    <>
      <Metas
        title={"Pocería y desatascos Madrid-Valdemoro ☎ [695 126 600]"}
        content={
          "✅Poceros en Madrid. 🔝 Empresa de desatascos en Madrid 24 horas. 📢 Desatascos baratos con los mejores precios. ☎️​ 695 126 600"
        }
        keywords={
          "poceros madrid, desatascos tuberias, desatascos madrid, desatascos, desatarancos madrid, desatrancos, desatrancos Toledo , desatrancos en Madrid, desatrancos urgentes Madrid, limpieza de tuberias,  desatranco Illescas, desatascos en Madrid, pocería, desatrancos baratos Madrid, empresas de desatrancos, desatrancos Alcalá de Henares, poceros en Getafe, poceros en Griñon, poceros en Humanes, poceros en Móstoles, poceros en Navalcarnero, poceros en Parla, poceros en Pinto, Poceros en Valdemoro, poceros en Pozuelo, poceros en Majadahonda"
        }
      />

      <Carrusel />


        {/*  start service section  */}
        <div id="service">
          <div className="container">
            <div className="row">
              <div className="our-service">
                <div className="section-title">
                  <h2 className="title">
                    <span>NUESTROS SERVICIOS</span>
                  </h2>
                  <p className="title-desc">
                    Servicios de desatascos y pocería en Madrid
                  </p>
                </div>
                <div className="clearfix" />
                <div className="our-service-wrapper">
                  {/* Scroll content */}
                  <div className="scroll-content">
                    <div className="our-sevice-item">
                      <div className="service-icon">
                        <div className="service-icon-inner">
                          <span className="icon flaticon-plumber3" />
                        </div>
                      </div>
                      <div className="service-item-content">
                        <h3>Obras de pocería</h3>
                        <div className="excerpt">
                          Especialistas en pocería altamente cualificados. Somos
                          una empresa de obras de pocería con más de 25 años de
                          trabajo.
                        </div>
                        <a href="#" className="custom-btn">
                          Saber Más <i className="fa fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    <div className="our-sevice-item">
                      <div className="service-icon">
                        <div className="service-icon-inner">
                          <span className="icon flaticon-wrench119" />
                        </div>
                      </div>
                      <div className="service-item-content">
                        <h3>Desatascos</h3>
                        <div className="excerpt">
                          Empresa líder en servicios de desatascos y desatrancos
                          en Madrid, Toledo y Guadalajara siendo el servicio más
                          demandado que realizamos.
                        </div>
                        <a href="single.html" className="custom-btn">
                          Saber Más <i className="fa fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    <div className="our-sevice-item">
                      <div className="service-icon">
                        <div className="service-icon-inner">
                          <span className="icon flaticon-plumber3" />
                        </div>
                      </div>
                      <div className="service-item-content">
                        <h3>Inspección de tuberías</h3>
                        <div className="excerpt">
                          Realizamos la mejor inspección de tuberías de toda la
                          Comunidad de Madrid. Tras finalizar la inspección,
                          entregamos un informe técnico del estado de las
                          tuberías.
                        </div>
                        <a href="single.html" className="custom-btn">
                          Saber Más <i className="fa fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* .our-service wrapper */}
              </div>
              {/* .our-service  */}
              <div className="quite-quote">
                <div className="service-quite-quote-image">
                  <img src="images/home1/service1.png" alt="service" />
                </div>
                <div className="quote">
                  <h2>Presupuesto Gratuito</h2>

                  <div className="clearfix" />
                  <form action="#">
                    <input
                      id="author"
                      name="author"
                      type="text"
                      defaultValue=""
                      placeholder="Nombre"
                      aria-required="true"
                    />
                    <input
                      id="email"
                      name="email"
                      type="text"
                      defaultValue=""
                      placeholder="Email"
                      aria-required="true"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      defaultValue=""
                      placeholder="Teléfono"
                    />
                    <textarea
                      id="comment"
                      name="comment"
                      placeholder="Escribe tu mensaje"
                      aria-required="true"
                      defaultValue={""}
                    />
                    <p className="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                        defaultValue="Enviar"
                      />
                      <input
                        type="hidden"
                        name="comment_post_ID"
                        defaultValue={1016}
                        id="comment_post_ID"
                      />
                      <input
                        type="hidden"
                        name="comment_parent"
                        id="comment_parent"
                        defaultValue={0}
                      />
                    </p>
                  </form>
                </div>
              </div>
              {/*  .quite-quote  */}
            </div>
          </div>
        </div>
        {/* #service */}
        {/* start project section */}
        <div id="project" className="project mt-10">
          <div className="container">
            <div className="row">
              <div className="section-title">
                <h2 className="title">
                  <span>GRUPAL SL ⚒️ Poceros en Madrid</span>
                </h2>
                <p className="title-desc">
                  Mejores servicios de pocería y desatrancos más baratos de
                  Madrid
                </p>
              </div>
              <div className="clearfix" />
              <div className="our-project-wrapper">
                <div className="col-sm-4 col-md-4">
                  <div className="project-item">
                    <div className="post-thumb">
                      <a href="single.html">
                        <img
                          src="images/grupal/alcantarillados.jpeg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/grupal/alcantarillados.jpeg"
                          className="search-link boxer"
                        >
                          <i className="fa fa-search" />
                        </a>
                        <a href="single.html" className="search-link">
                          <i className="fa fa-link" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h3>
                        <a href="single.html">Pocería </a>
                      </h3>
                      <div className="ccr-cats">
                        <a href="single.html">Desatascos</a>
                        <span>,</span>
                        <a href="single.html">Alcantarillados</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="project-item">
                    <div className="post-thumb">
                      <a href="single.html">
                        <img
                          src="images/grupal/zanjas.jpeg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/grupal/zanjas.jpeg"
                          className="search-link boxer"
                        >
                          <i className="fa fa-search" />
                        </a>
                        <a href="single.html" className="search-link">
                          <i className="fa fa-link" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h3>
                        <a href="single.html">Tuberías </a>
                      </h3>
                      <div className="ccr-cats">
                        <a href="single.html">Inspección CCTV</a>
                        <span>,</span>
                        <a href="single.html">limpieza tuberias</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 col-md-4">
                  <div className="project-item">
                    <div className="post-thumb">
                      <a href="single.html">
                        <img
                          src="images/grupal/retroexcavadora.jpeg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/grupal/retroexcavadora.jpeg"
                          className="search-link boxer"
                        >
                          <i className="fa fa-search" />
                        </a>
                        <a href="single.html" className="search-link">
                          <i className="fa fa-link" />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h3>
                        <a href="single.html">Excavaciones</a>
                      </h3>
                      <div className="ccr-cats">
                        <a href="single.html">Piscinas</a>
                        <span>,</span>
                        <a href="single.html">Tierras, Zanjas</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="view-all-project">
                  <a href="servicios" className="custom-btn">
                    Ver todos los servicios
                  </a>
                </div>
                {/* /.view-all-project */}
              </div>
              {/* /.our-project-wrapper */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /#project */}

        <LatestNews />

        {/* jquery include */}
      
    </>
  );
}
