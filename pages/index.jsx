import LatestNews from "../components/LatestNews";
import Metas from '../components/Metas';



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
      
     
      {/* start main-content  */}
      <div id="content">
        <div className="home-slider-area">
          <div className="sleekslider">
            {/* Slider Pages */}
            <div className="slide active bg-1">
              <div className="slide-container item-one">
                <div className="image-one">
                  <img src="images/home-slider/item-one/man.png" alt="images" />
                </div>
                <div className="image-two">
                  <img
                    src="images/home-slider/item-one/image-area.png"
                    alt="images"
                  />
                </div>
                <div className="text">
                  <h2>Expertos Cualificados</h2>
                  <h2
                    style={{ fontSize: 50, fontWeight: 900, color: "#ffc527" }}
                  >
                    Obras de Pocería
                  </h2>
                </div>
              </div>
            </div>
            <div className="slide bg-2">
              <div className="slide-container item-two">
                <div className="text">
                  <h2 className="itext1">Desatascos 24 Horas</h2>
                  <h1 className="itext2">Poceros en Madrid</h1>
                  <h3 className="itext3">
                    Empresa de pocería con los mejores precios
                  </h3>
                  <a href="#" className="custom-btn">
                    Llámanos
                  </a>
                </div>
                <div className="iimage2">
                  <img
                    src="images/home-slider/item-two/image.png"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            <div className="slide bg-3">
              <div className="slide-container item-three">
                <div className="text">
                  <h2 className="itext1">Servicios 24 horas</h2>
                  <h2 className="itext2">Desatascos en Madrid</h2>
                  <h3 className="itext3">
                    Más de 25 años experiencia en el sector
                  </h3>
                  <ul>
                    <li>
                      <i className="fa fa-caret-right" />
                      Los desatascos mas económicos
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Mejor calidad-precio del mercado
                    </li>
                    <li>
                      <i className="fa fa-caret-right" />
                      Inspección con cámara gratuita
                    </li>
                  </ul>
                  <a href="#" className="custom-btn">
                    Llama YA
                  </a>
                </div>
                <div className="iimage3">
                  <img
                    src="images/home-slider/item-three/slider03.png"
                    alt="images"
                  />
                </div>
              </div>
            </div>
            {/* Navigation Arrows with Thumbnails */}
            <nav className="nav-split">
              <a className="prev" href="">
                <span className="icon-wrap">
                  <i className="fa fa-angle-left" />
                </span>
                <div className="slider-thumb">
                  <h3>Desatascos en Madrid</h3>
                  <img
                    src="images/wallhaven-27263-thumbnail.jpg"
                    alt="Previous thumb"
                  />
                </div>
              </a>
              <a className="next" href="">
                <span className="icon-wrap">
                  <i className="fa fa-angle-right" />
                </span>
                <div className="slider-thumb">
                  <h3>Poceros en Madrid</h3>
                  <img src="images/wallhaven-3178-thumb.jpg" alt="Next thumb" />
                </div>
              </a>
            </nav>
          </div>
        </div>
        {/* end home slider area */}
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
        <div id="project" className="project">
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
                          src="images/home1/project-img1.jpg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/home1/project-img1.jpg"
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
                          src="images/home1/project-img2.jpg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/home1/project-img2.jpg"
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
                          src="images/home1/project-img3.jpg"
                          alt="Projects"
                        />
                      </a>
                      <div className="overlay" />
                      <div className="overlay-search-link">
                        <a
                          href="images/home1/project-img3.jpg"
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
                  <a href="single.html" className="custom-btn">
                    Ver todos los proyectos
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
      </div>
    </>
  );
}
