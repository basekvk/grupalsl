import Img from 'next/image'


function ServiceDetails({foto, altFoto, titleService, textService1, textService2,textService3, textService4,titleAcordeon1, titleAcordeon2, titleAcordeon3, textAcordeon1,textAcordeon12,textAcordeon2,textAcordeon21,textAcordeon3,textAcordeon31, foto2, altFoto2, ancho, altura, fotoInferior, altFotoInferior, anchoInferior, alturaInferior}) {
  return (
    <>
      {/* /.page-header */}
      <div id="content" className="service-detail-page">
        <div className="container">
          <div className="row">
            <main className="col-sm-8 col-md-8">
              <div className="service-detail">
                <div className="service-image">
                  <img src={foto} alt={altFoto} width={ancho} height={altura} />
                </div>
                <h2>{titleService}</h2>
                <p style={{ textAlign: "justify" }}>{textService1}</p>
                <p style={{ textAlign: "justify" }}>{textService2}</p>
                <p style={{ textAlign: "justify" }}>{textService3}</p>
                <p style={{ textAlign: "justify" }}> {textService4}</p>
              </div>
              {/* /.service-detail */}
              <div className="buyer-guide-area">
                <h2> Preguntas frecuentes</h2>
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {titleAcordeon1}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseOne"
                      className="panel-collapse collapse in"
                      role="tabpanel"
                      aria-labelledby="headingOne"
                    >
                      <div className="panel-body">
                        <p>{textAcordeon1}</p>
                        <p>{textAcordeon12}</p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          {titleAcordeon2}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseTwo"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingTwo"
                    >
                      <div className="panel-body">
                        <p>{textAcordeon2}</p>
                        <p>{textAcordeon21} </p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          {titleAcordeon3}
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapseThree"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="headingThree"
                    >
                      <div className="panel-body">
                        <p>{textAcordeon3}</p>
                        <p>{textAcordeon31} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.buyer-guide-area */}
            </main>
            <aside className="contact-sidebar col-sm-4 col-md-4">
              <div className="contact-info">
                <h3 className="contact-info-title">Contacto</h3>
                <ul>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </span>{" "}
                    <span className="detail">
                      Calle Málaga 4, Nave 39. P.I La Carrehuela. 28343 –
                      Valdemoro – Madrid
                    </span>
                  </li>
                  <li>
                    <span className="contact-icon">
                      <i className="fa fa-phone" />
                    </span>{" "}
                    <span className="detail">
                      <a href="tel:+34 915771849">91 577 18 49</a> -
                      <a href="tel:+34 695126600">695 126 600</a>
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
            <div className="clearfix" />
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        {/* our-client section start  */}
        <div id="client">
          <div className="container">
            <div className="row">
              <div className="client-area">
                <div className="client-slider-container">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src={fotoInferior} alt={altFotoInferior} width={anchoInferior} height={alturaInferior}/>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src="images/home1/client2.jpg" alt="client" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src="images/home1/client3.jpg" alt="client" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src="images/home1/client4.jpg" alt="client" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src="images/home1/client5.jpg" alt="client" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                    <div className="swiper-slide">
                      <div className="client-item">
                        <div className="client-item-inner">
                          <a href="#">
                            <img src={foto2} alt={altFoto2} />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /.swiper-slide */}
                  </div>
                  {/* /.swiper-wrapper */}
                </div>
                {/* /.client-slider-container */}
              </div>
              {/* /.client-area */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        {/* /#client */}
      </div>
      {/* #content  */}
    </>
  );
}

export default ServiceDetails;
