import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import About2 from "../About2/About2";
import Estudios from "../Estudios/Estudios";
import FormSubmit from "../FormSubmit/FormSubmit";
import ComponenteVacio from "../ComponenteVacio/ComponenteVacio"
function Home() {
  return (
    <div>
      <FormSubmit />
      <LandingPage />
      <About />
      <Estudios />
      <About2 />
      <ComponenteVacio />
    </div>
  );
}

export default Home;
