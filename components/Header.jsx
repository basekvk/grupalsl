import Link from "next/link";

export default function Header() {
  return (
    <>
      
      {/* start header  */}
      <header id="header">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="logo">
                <Link href="/">
                  <a>
                    <img
                      src="assets/images/logo.png"
                      width={150}
                      height={30}
                      alt="Logo"
                    />
                  </a>
                </Link>
              </div>
              {/* /.logo */}
              <div className="contact-place">
                <div className="cp-01 phone">
                  <div className="cp-inner">
                    <div className="icon flaticon-phone41" />
                    <div className="phone-text">
                      <a href="tel:+34695126600">
                        <span className="text">Llama ahora</span>
                        <span className="numbers">695 126 600</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/*  end phone */}
                <div className="cp-01 mail">
                  <div className="cp-inner">
                    <div className="icon flaticon-email19" />
                    <div className="phone-text">
                      <span className="text">Contacta Email</span>
                      <a href="#" className="numbers">
                        info@grupalsl.es
                      </a>
                    </div>
                  </div>
                </div>
                {/*  end phone */}
              </div>
              {/* /.contact-place */}
              <div className="top-social-media">
                <ul className="social-media">
                  <li>
                    <a
                      href="https://www.facebook.com/GRUPALSL/"
                      className="facebook"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/grupal_sl" className="twitter">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/grupalsl/?hl=es"
                      className="instagram"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* /.top-social-media */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /.header-top */}
        <div className="header-bottom">
          <div className="primary-menu">
            <div className="container">
              <div className="row">
                <div className="menu">
                  <div className="menu-inner">
                    <div className="navbar-header ">
                      <Link href="/">
                        <a className="menu-logo">
                          <img
                            src="assets/images/menu-logo.png"
                            alt="Logo"
                            width={100}
                          />
                        </a>
                      </Link>

                      <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                      >
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    {/* /.menu-logo */}
                    <div
                      className="collapse navbar-collapse"
                      id="bs-example-navbar-collapse-1"
                    >
                      <ul className="navbar-menu">
                        <li className="dropdown">
                          <Link href="/">
                            <a
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span>Inicio</span>
                            </a>
                          </Link>
                        </li>

                        <li>
                          <Link href="/about">
                            <a>
                              <span>Qui??nes Somos</span>
                            </a>
                          </Link>
                        </li>

                        <li className="dropdown">
                          <Link href="#">
                            <a
                              className="dropdown-toggle"
                              data-toggle="dropdown"
                              role="button"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span>Servicios</span>
                              <i className="fa fa-angle-down" />
                            </a>
                          </Link>

                          <ul className="sub-menu dropdown-menu">
                            <li>
                              <Link href="obras-de-poceria">
                                <a>Obras de pocer??a</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="desatrancos">
                                <a>Desatrancos</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="desatascos-24-horas">
                                <a>Desatascos 24 Horas</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="limpieza-de-tuberias">
                                <a>Limpieza de tuber??as</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="inundaciones">
                                <a>Inundaciones</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="limpieza-fosas-septicas">
                                <a>Limpieza Fosas S??pticas</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="transporte-de-residuos">
                                <a>Transporte de Residuos</a>
                              </Link>
                            </li>
                            <li>
                              <Link href="desatascos-baratos">
                                <a>Desatascos Baratos</a>
                              </Link>
                            </li>

                            <li>
                              <Link href="excavaciones">
                                <a>Excavaciones</a>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="dropdown">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <span>Trabajamos en </span>
                            <i className="fa fa-angle-down" />
                          </a>
                          <ul className="sub-menu dropdown-menu">
                            <li className="dropdown">
                              <Link href="poceros-madrid">
                                <a
                                  className="dropdown-toggle"
                                  data-toggle="dropdown"
                                  role="button"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  Madrid Zona Centro
                                </a>
                              </Link>
                            </li>
                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Madrid Zona Sur
                                <i className="fa fa-angle-right" />
                              </a>
                              <ul className="sub-menu dropdown-menu">
                                <li>
                                  <Link href="poceros-fuenlabrada">
                                    <a>Fuenlabrada</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-valdemoro">
                                    <a>Valdemoro</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-getafe">
                                    <a>Getafe</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-mostoles">
                                    <a>M??stoles</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-leganes">
                                    <a>Legan??s</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-alcorcon">
                                    <a>Alcorc??n</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-parla">
                                    <a>Parla</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-pinto">
                                    <a>Pinto</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-arroyomolinos">
                                    <a>Arroyomolinos</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-aranjuez">
                                    <a>Aranjuez</a>
                                  </Link>
                                </li>

                                <li>
                                  <Link href="poceros-humanes">
                                    <a>Humanes de Madrid</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-grinon">
                                    <a>Gri??on</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-ciempozuelos">
                                    <a>Ciempozuelos</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-torrejon-de-la-calzada">
                                    <a>Torrej??n de la Calzada</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-cubas">
                                    <a>Cubas de la Sagra</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-san-martin-de-la-vega">
                                    <a>San Mart??n de la Vega</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-perales">
                                    <a>Perales del R??o</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Madrid Zona Oeste
                                <i className="fa fa-angle-right" />
                              </a>
                              <ul className="sub-menu dropdown-menu">
                                <li>
                                  <Link href="poceros-las-rozas">
                                    <a>Las Rozas de Madrid</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-pozuelo">
                                    <a>Pozuelos de Alarc??n</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-majadahonda">
                                    <a>Majadahonda</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-boadilla">
                                    <a>Boadilla del Monte</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-galapagar">
                                    <a>Galapagar</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-villaviciosa">
                                    <a>Villaviciosa de Od??n</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-brunete">
                                    <a>Brunete</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-quijorna">
                                    <a>Quijorna</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Madrid Zona Este
                                <i className="fa fa-angle-right" />
                              </a>
                              <ul className="sub-menu dropdown-menu">
                                <li>
                                  <Link href="poceros-alcala-de-henares">
                                    <a>Alcal?? de Henares</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-torrejon-de-ardoz">
                                    <a>Torrej??n de Ardoz</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-algete">
                                    <a>Algete</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-alcobendas">
                                    <a>Alcobendas</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-colmenar">
                                    <a>Colmenar Viejo</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-colmenar">
                                    <a>Coslada</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-arganda">
                                    <a>Arganda del Rey</a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="poceros-rivas">
                                    <a>Rivas Vaciamadrid</a>
                                  </Link>
                                </li>
                              </ul>
                            </li>

                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Toledo
                                <i className="fa fa-angle-right" />
                              </a>
                              <ul className="sub-menu dropdown-menu">
                                <li>
                                  <a href="poceros-illescas">Illescas</a>
                                </li>
                                <li>
                                  <a href="poceros-sesena">Sese??a</a>
                                </li>
                                <li>
                                  <a href="poceros-ocana">Oca??a</a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                href="#"
                                className="dropdown-toggle"
                                data-toggle="dropdown"
                                role="button"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Guadalajara
                                <i className="fa fa-angle-right" />
                              </a>
                              <ul className="sub-menu dropdown-menu">
                                <li>
                                  <a href="poceros-azuqueca">
                                    Azuqueca de Henares
                                  </a>
                                </li>
                                <li>
                                  <a href="poceros-guadalajara">Guadalajara</a>
                                </li>
                                <li>
                                  <a href="poceros-alovera">Alovera</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link href="contacto">
                            <a>
                              <span>Contacto</span>
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*  end menu-inner  */}
                </div>
                {/* end menu  */}
              </div>
              {/*  end row  */}
            </div>
            {/*  end container  */}
          </div>
          {/* end primary menu */}
        </div>
        {/* /.header-bottom */}
      </header>
    </>
  );
}
