import React from "react";
import s from "./Proyectos.css";
import { Link } from "react-router-dom";
function Proyectos() {
  return (
    <div className={s.Proyectos}>
      <div className="container">
        <a target="_blank" href="https://pomodoroclock-liammarega.netlify.app">
          <div className="box">
            <img src="https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/6124cf315cafe8c3101f8bab/perro-slide_0.jpg" />
            <span>APP DOG</span>
          </div>
        </a>

        <a target="_blank" href="https://pomodoroclock-liammarega.netlify.app">
          <div className="box">
            <img src="https://alifeofproductivity.com/wp-content/uploads/2013/04/6969282632_bc5249a9a6_b.jpg" />
            <span>POMODORO CLOCK</span>
          </div>
        </a>
        <a target="_blank" href="https://pomodoroclock-liammarega.netlify.app">
          <div className="box">
            <img src="https://roiwiz.com/wp-content/uploads/2020/01/online-education-platform-concept.jpg" />
            <span>EDUCATIONAL PLATFORM</span>
          </div>
        </a>
        <a target="_blank" href="https://pomodoroclock-liammarega.netlify.app">
          <div className="box">
            <img src="https://www.on24.com.ar/wp-content/uploads/2021/10/Clima.gif" />
            <span>WHEATER APP</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Proyectos;
