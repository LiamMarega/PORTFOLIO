import React from "react";
import s from "./Estudios.module.css";
import Proyectos from "./Proyectos/Proyectos";

function Estudios() {
  return (
    <div className={s.Estudios}>
      <div className={s.EstudiosContainer}>
          <div className={s.textoCentrado}>
            <h2>Mis Proyectos</h2>
          </div>
        </div>
        <Proyectos />
      </div>

  );
}

export default Estudios;
