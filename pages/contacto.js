import Footer from "../components/footer";
import Header from "../components/header";

import Metas from "../components/Metas";
import BannerSingle from './../components/BannerSingle';

function contacto() {
  return (
    <>
      <Metas />
      <Header />
      <BannerSingle pageTitle={"Contacto"} migasPan={"Contacto"} />

      {/* /.page-header */}
      <div id="content" className="contact-page">
        <div className="container">
          <div className="row">
            <main className="contact-main col-sm-8 col-md-8">
              <div className="comment-respond ccr-section">
                <div className="section-title">
                  <h2 className="title">
                    <span>ESCRÍBENOS</span>
                  </h2>
                  <p className="title-desc">
                    Escribenos para preguntarnos por cualquier cuestión.
                    Estaremos encantados de atenderte
                  </p>
                </div>
                <div className="clearfix" />
                <form
                  role="search"
                  method="get"
                  className="search-form"
                  action="#"
                >
                  <div className="input-box">
                    <input
                      id="author"
                      name="author"
                      type="text"
                      defaultValue="Nombre"
                      aria-required="true"
                    />
                    <input
                      id="email"
                      name="email"
                      type="text"
                      defaultValue="Email"
                      aria-required="true"
                    />
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      defaultValue="Asunto"
                      aria-required="true"
                    />
                  </div>
                  <div className="text-area-box">
                    <textarea
                      id="comment"
                      name="comment"
                      cols={45}
                      rows={5}
                      placeholder="Tu Mensaje"
                      aria-required="true"
                      defaultValue={""}
                    />
                  </div>
                  <div className="clearfix" />
                  <p className="form-submit">
                    <input
                      name="submit"
                      type="submit"
                      id="submit"
                      className="submit"
                      defaultValue="Submit"
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
              {/* #respond */}
            </main>
            <aside className="contact-sidebar col-sm-4 col-md-4">
              <div className="contact-info">
                <h3 className="contact-info-title">Info Contacto</h3>
                <ul>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </span>{" "}
                    <span className="detail">
                      Calle Málaga 4, Nave 39. P.I La Carrehuela. 28343
                      Valdemoro - Madrid
                    </span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-phone" />
                    </span>{" "}
                    <span className="detail">
                      +34 91 577 18 49, +34 695 126 600
                    </span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-envelope" />
                    </span>{" "}
                    <span className="detail">info@grupalsl.es</span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-globe" />
                    </span>{" "}
                    <span className="detail">www.grupalsl.es</span>
                  </li>
                </ul>
                <div className="contact-soical">
                  <h4>Síguenos</h4>
                  <ul className="social-media">
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="instagram">
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.contact-info */}
            </aside>
            <div className="container">
              <div className="row">
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      width={1080}
                      height={417}
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=calle%20m%C3%A1laga%204%20valdemoro&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                    <a href="https://putlocker-is.org" />
                    <br />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".mapouter{position:relative;text-align:right;height:417px;width:1080px;}",
                      }}
                    />
                    <a href="https://www.embedgooglemap.net" />
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".gmap_canvas {overflow:hidden;background:none!important;height:417px;width:1080px;}",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix" />
            <div id="map" />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* #content  */}
      

      <Footer />
    </>
  );
}

export default contacto;
