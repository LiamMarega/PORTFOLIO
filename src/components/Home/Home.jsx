import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Estudios from "../Estudios/Estudios";
import FormSubmit from "../FormSubmit/FormSubmit";

function Home() {
  return (
    <div>
      <LandingPage />
      <About />
      <Estudios />
      <FormSubmit />
    </div>
  );
}

export default Home;
