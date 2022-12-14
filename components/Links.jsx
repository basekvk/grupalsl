function Links({title, content, keywords}) {
  return (
    <>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      {/* Meta */}
      <meta
        name="description"
        content={content}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta name="author" content="Grupal SL" />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      {/* Mobile Specific Meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Framework Styles */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/bootstrap.min.css"
      />
      {/* Fonts Styles */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/flat-icon/MyIcons/flaticon.css"
      />
      {/* Plugins Styles */}
      <link rel="stylesheet" href="/assets/css/animate.css" />
      <link
        rel="stylesheet"
        href="/assets/css/jquery.mCustomScrollbar.min.css"
      />
      <link rel="stylesheet" href="/assets/css/jquery.fs.boxer.min.css" />
      <link rel="stylesheet" href="/assets/css/flexslider.css" />
      <link rel="stylesheet" href="/assets/css/swiper.min.css" />
      <link rel="stylesheet" href="/assets/css/screen.css" />
      {/* <link rel="stylesheet" href="assets/css/fakeLoader.css"> */}
      {/* Home slider style */}
      <link rel="stylesheet" href="/assets/css/slider.css" />
      {/* Project Styles */}
      <link rel="stylesheet" href="/assets/css/style.css" />
      {/* Responsive Styles */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/responsive.css"
      />
    </>
  );
}

export default Links;
