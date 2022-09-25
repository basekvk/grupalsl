function BannerSingle({pageTitle, migasPan}) {
    return (
      <>
        <div className="page-header">
          <div className="overlay" />
          <div className="page-header-content">
            <div className="container">
              <div className="row">
                <h3 className="page-title">{pageTitle}</h3>
                <ul className="breadcrumb">
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li className="active">{migasPan}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default BannerSingle;