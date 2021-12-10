import React from "react";
import s from "./Text.module.css";
import foto from "./flecha.png";

function Text() {
  return (
    <div className={s.text}>
      <h1>Liam Marega</h1>
      <br />
      &mdash; Full Stack Developer &mdash;
      <br />
      <div className={s.imagen}>
        <img src={foto} alt="flecha" />
      </div>
    </div>
  );
}

export default Text;
