import React from "react";
import "./Navbar.css";

const NavbarComponent = (props) => {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <span className="navbar-brand" onClick={props.onHome}>
              <h2>
                Sixteen <em>Clothing</em>
              </h2>
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item active" onClick={props.onHome}>
                  <span className="nav-link">
                    Home
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={props.onProduct}>
                    Our Products
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={props.onAbout}>
                    About Us
                  </span>
                </li>
                <li className="nav-item">
                  <span className="nav-link" onClick={props.onContact}>
                    Contact Us
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     </>
  );
};

export default NavbarComponent;
