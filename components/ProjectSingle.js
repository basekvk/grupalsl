function projectSingle() {
  return (
    <>
      <>
        <div className="page-header">
          <div className="overlay" />
          <div className="page-header-content">
            <div className="container">
              <div className="row">
                <h3 className="page-title">Portfolio Single</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li className="active">Portfolio Single</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* /.page-header */}
        <div id="content" className="project-single">
          <div className="project-single-wrapper">
            <div className="container">
              <div className="row">
                <main className="project-main col-md-8">
                  <div className="project-desc">
                    <img
                      src="images/project-single/01.jpg"
                      alt="Project Thumb"
                    />
                    <p>
                      Holisticly scale inexpensive services and client-centered
                      bandwidth. Assertively extend standdized expertise without
                      enterprise-wide solutions. Monotonectally deliver tactical
                      testing procedures via transparent scenarios. Complete
                      fabricate transparent innovation metrics. Competently
                      parallel task cross-unit process improvements for viral
                      functionalities.
                    </p>
                    <p>
                      Dynamically synergize one-to-one markets business
                      e-commerce. Energistically seize revolonary initiatives
                      through real-time sources. Synergistically provide access
                      client-focused results via leading edge relationships.
                      Quickly aggregate materials with proactive ROI.
                      Compellingly cultivate impactful e-tailers with 2.0 core
                      competencies.
                    </p>
                    <p>
                      Seamlessly administrate alternative users for go forward
                      paradigms. Dynamically pontificate corp orate
                      infomediaries after intuitive best practices.
                    </p>
                  </div>
                  {/* /.project-desc */}
                </main>
                <aside className="project-sidebar col-md-4">
                  <div className="project-detail">
                    <h3 className="title">Project Details</h3>
                    <ul>
                      <li>
                        <span>Date:</span>January, 2016
                      </li>
                      <li>
                        <span>Client:</span>Angilina Roma
                      </li>
                      <li>
                        <span>Area:</span>New Market Road, Arigona, USA
                      </li>
                      <li>
                        <span>Project Start:</span>20 January, 2016
                      </li>
                      <li>
                        <span>Project Complete:</span>20 January, 2017
                      </li>
                      <li>
                        <span>Catagories:</span>Plumbing, Works
                      </li>
                      <li>
                        <span>Value:</span>$12,12,000.00
                      </li>
                    </ul>
                  </div>
                  {/* /.project-detail */}
                </aside>
              </div>
            </div>
          </div>
          <div className="clearfix" />
          {/* start project section */}
          <div id="project" className="project">
            <div className="container">
              <div className="row">
                <div className="section-title">
                  <h2 className="title">
                    <span>Our Projects</span>
                  </h2>
                  <p className="title-desc">
                    Out Service is so much helpful for your business
                  </p>
                </div>
                <div className="clearfix" />
                <div className="our-project-wrapper">
                  <div className="col-sm-4 col-md-4">
                    <div className="project-item">
                      <div className="post-thumb">
                        <a href="#">
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
                          <a href="#" className="search-link">
                            <i className="fa fa-link" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Bathroom Plumbing</a>
                        </h3>
                        <div className="ccr-cats">
                          <a href="#">Repairs</a>
                          <span>,</span>
                          <a href="#">Fixing</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="project-item">
                      <div className="post-thumb">
                        <a href="#">
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
                          <a href="#" className="search-link">
                            <i className="fa fa-link" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Bathroom Plumbing</a>
                        </h3>
                        <div className="ccr-cats">
                          <a href="#">Repairs</a>
                          <span>,</span>
                          <a href="#">Fixing</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-4">
                    <div className="project-item">
                      <div className="post-thumb">
                        <a href="#">
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
                          <a href="#" className="search-link">
                            <i className="fa fa-link" />
                          </a>
                        </div>
                      </div>
                      <div className="content">
                        <h3>
                          <a href="#">Bathroom Plumbing</a>
                        </h3>
                        <div className="ccr-cats">
                          <a href="#">Repairs</a>
                          <span>,</span>
                          <a href="#">Fixing</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.our-project-wrapper */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /#project */}
        </div>
        {/* #content  */}
      </>
    </>
  );
}

export default projectSingle;
