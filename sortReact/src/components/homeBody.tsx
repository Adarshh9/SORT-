import WOW from "wowjs";
import bg_1 from "./img/bg-1.webp";
import bg_2 from "./img/bg2.webp";

const homeBody = () => {
  // wow not working

  // const wow = new WOW({
  //   boxClass: "wow",
  //   animateClass: "animate__animated",
  //   offset: 0,
  //   mobile: true,
  //   live: true,
  // });

  // wow.init();
  return (
    <>
      {/* Carousel Start */}
      <section id="hero">
        <div
          className="container-fluid p-0 mb-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* First Carousel Item */}
              <div className="carousel-item active">
                <img className="w-100 carousel-image" src={bg_1} alt="Image" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                  <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                      SORT AND LITERARY CLUB
                    </h1>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-map-marker-alt text-primary me-3"></i>
                      TCET, Mumbai: 400101
                    </h4>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-phone-alt text-primary me-3"></i>+91
                      70454 49325
                    </h4>
                  </div>
                </div>
              </div>
              {/* Second Carousel Item */}
              <div className="carousel-item">
                <img className="w-100 carousel-image" src={bg_2} alt="Image" />
                <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                  <div className="mx-sm-5 px-5" style={{ maxWidth: "900px" }}>
                    <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">
                      WE WILL KEEP YOU AWESOME
                    </h1>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-map-marker-alt text-primary me-3"></i>
                      TCET, Mumbai: 400101
                    </h4>
                    <h4 className="text-white text-uppercase mb-4 animated slideInDown">
                      <i className="fa fa-phone-alt text-primary me-3"></i>+91
                      70454 49325
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#header-carousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      {/* Carousel End */}

      {/* Events Start */}
      <section id="events">
        <div id="events-container" className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }}
            >
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                EVENTS
              </p>
              <h1 className="text-uppercase">Upcoming Events</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">SORT Cricket League</h3>
                    <ul>
                      <li>
                        Showcase your cricket skills and stand a chance to be
                        the SCL Champion
                      </li>
                      <li>
                        Bond with friends, experience the thrill, and win
                        exciting prizes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">Rang-E-Alfaaz</h3>
                    <ul>
                      <li>
                        Celebrate the art of poetry with over 25+ passionate
                        participants
                      </li>
                      <li>
                        Feel the energy as top performers recite their way to
                        glory!
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                  <div className="ps-4">
                    <br />
                    <h3 className="text-uppercase mb-3">Technical Event</h3>
                    <ul>
                      <li>
                        Engage in a series of technical tasks and prove your
                        mettle
                      </li>
                      <li>
                        Learn, innovate, and connect with like-minded tech
                        enthusiasts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Events End */}

      {/* <!-- Experience Start --> */}
      <section id="experience">
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: "600px" }} // Use object style here
            >
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                Experiences
              </p>
              <h1 className="text-uppercase">What Our Members Say!</h1>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {/* Testimonial Item 1 */}
              <div
                className="testimonial-item text-center"
                data-dot="<img className='img-fluid' src='img/tahami.png' alt='' />"
              >
                <h4 className="text-uppercase">Tahami Syed</h4>
                <p className="text-primary">TT AIDS B</p>
                <span className="fs-5">
                  Being part of the S.O.R.T. Club has helped me develop both
                  socially and professionally. The club is more than just a
                  group, it's like a family.
                </span>
              </div>
              {/* Testimonial Item 2 */}
              <div
                className="testimonial-item text-center"
                data-dot="<img className='img-fluid' src='img/jogendra.png' alt='' />"
              >
                <h4 className="text-uppercase">Jogendra Suthar</h4>
                <p className="text-primary">TT AIDS B</p>
                <span className="fs-5">
                  SORT CLUB gave me opportunities to participate in
                  skill-building activities and webinars. It helped me improve
                  my communication, technical skills, and confidence.
                </span>
              </div>
              {/* Testimonial Item 3 */}
              <div
                className="testimonial-item text-center"
                data-dot="<img className='img-fluid' src='img/ayush.png' alt='' />"
              >
                <h4 className="text-uppercase">Ayush Malviya</h4>
                <p className="text-primary">TT CSE</p>
                <span className="fs-5">
                  Through the club's workshops and mentorship programs, I
                  learned valuable skills in leadership, personal branding,
                  aiding my personal and professional growth.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial End --> */}

      {/* Contact Starts */}
      <section id="contact">
        <div id="contact-container" className="container-xxl py-5">
          <div className="container">
            <div className="row g-0">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div className="bg-secondary p-5">
                  <p className="d-inline-block bg-dark text-primary py-1 px-4">
                    Contact Us
                  </p>
                  <h1 className="text-uppercase mb-4">
                    Have Any Query? Please Contact Us!
                  </h1>

                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="name"
                            defaultValue=""
                            placeholder="Your Name"
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control bg-transparent"
                            id="email"
                            defaultValue=""
                            placeholder="Your Email"
                          />
                          <label htmlFor="email">Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control bg-transparent"
                            id="subject"
                            defaultValue=""
                            placeholder="Subject"
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control bg-transparent"
                            id="message"
                            placeholder="Leave a message here"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100" style={{ minHeight: "400px" }}>
                  <iframe
                    className="google-map w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.745722943928!2d72.87241691492012!3d19.20630535285456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1677901063659!5m2!1sen!2sin"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    style={{
                      filter: "grayscale(10%) invert(92%) contrast(83%)",
                      border: "0",
                    }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Ends */}
    </>
  );
};

export default homeBody;
