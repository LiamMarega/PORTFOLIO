import React from "react";
import s from "./Proyectos.css";
import fotoClima from "./images/1.png"
import fotoPomodoro from "./images/2.png";
import fotoRocket from "./images/3.png";
import fotoPerro from "./images/4.png";

function onClick(e) {
  alert("Proyecto aun no Deployado :(")
}

function Proyectos() {
  return (
    <div className={s.Proyectos}>
      <div className="container">
        <a target="_blank" href="https://rocketprojectarg.netlify.app">
          <div className="box">
            <img src={fotoRocket} />
            <span>EDUCATIONAL PLATFORM</span>
          </div>
        </a>
        <a href="#" onClick={() => onClick()}>
          <div className="box">
            <img src={fotoPerro} />
            <span>APP DOG</span>
          </div>
        </a>
        <a target="_blank" href="https://pomodoroclock-liammarega.netlify.app">
          <div className="box">
            <img src={fotoPomodoro} />
            <span>POMODORO CLOCK</span>
          </div>
        </a>
        <a target="_blank" href="https://wheaterapp-liammarega.netlify.app">
          <div className="box">
            <img src={fotoClima} />
            <span>WHEATER APP</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
