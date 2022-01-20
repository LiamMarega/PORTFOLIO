import React from "react";
import "./LandingPage.css";
import foto from "./flecha.png";
import { Link } from "react-scroll"

function LandingPage() {
  return (
    <div className="landing">
      <div className="landig__nombre">
      <div class = "containerLanding">
        <h1>Hola, yo soy</h1>
        <h1>Liam.</h1>
      </div>
      
      <div className="imagenLanding">
        <Link to="aboutID" smooth={true} duration={1500}>
          {" "}
          <img src={foto} alt="flecha" />{" "}
        </Link>
      </div>
      </div>
      <div class="d-flex flex-column justify-content-center w-100 h-100"></div>
      
    </div>
  );
}

export default LandingPage;
