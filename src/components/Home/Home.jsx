import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import About2 from "../About2/About2";
import Estudios from "../Estudios/Estudios";
import FormSubmit from "../FormSubmit/FormSubmit";

function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <Estudios />
      <About2 />
      <FormSubmit />
    </div>
  );
}

export default Home;
