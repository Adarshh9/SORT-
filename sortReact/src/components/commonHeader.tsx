const commonHeader = () => {
  return (
    <>
      {/* <head> */}
        <meta charSet="utf-8" />
        <title>SORT and Literary Club</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="SORT, TCET, SORT AND LITERARY CLUB," name="keywords" />
        <meta
          content="Join the SORT club of Thakur College of Engineering and Technology for skill enhancement activities, debates, workshops, and literary events with a pinch of fun! 
                   Our mission is to help you become a better version of yourself. 
                   We envision our club as a platform for youth empowerment and skill-building, where you can incubate professional skills, entrepreneurship, and self-reliance. 
                   Explore our club and rediscover yourself!"
          name="description"
        />

        {/* <!-- Favicon --> */}
        <link href="img/logo.webp" rel="icon" />

        {/* <!-- Google Web Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Oswald:wght@600&display=swap"
          rel="stylesheet"
        />

        {/* <!-- Icon Font Stylesheet --> */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        {/* <!-- Libraries Stylesheet --> */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
      {/* </head> */}
    </>
  );
};

export default commonHeader;
