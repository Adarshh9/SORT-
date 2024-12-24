import React from "react";
import logo from "./img/logo.webp";

const Navbar: React.FC = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <h1 className="mb-0 text-primary text-uppercase">
          <img src={logo} alt="Sort Club Logo" width="20%" />
          SORT
        </h1>
      </a>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href="/" className="nav-item nav-link">
            Home
          </a>
          <a href="/" className="nav-item nav-link">
            About Us
          </a>
          <a href="events" className="nav-item nav-link">
            Our Events
          </a>
          <a href="/" className="nav-item nav-link">
            Magazine
          </a>
        </div>
        <a
          href="#contact"
          className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block"
        >
          Contact<i className="fa fa-arrow-right ms-3"></i>
        </a>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    </nav>
  );
};

export default Navbar;
