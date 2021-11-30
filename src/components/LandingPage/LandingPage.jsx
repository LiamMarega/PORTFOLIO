import React from "react";
import Particles from "react-tsparticles";
import "./LandingPage.css";
import Text from "./Text"

function LandingPage() {
  return (
    <div className="landing">
      <div className="landig__nombre">
        <Text />
      </div>
      <div class="d-flex flex-column justify-content-center w-100 h-100"></div>
    </div>
  );
}

export default LandingPage;
