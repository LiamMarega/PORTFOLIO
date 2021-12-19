import React from "react";
import s from "./Text.module.css";
import foto from "./flecha.png";
import { Link } from "react-scroll"

function Text() {
  return (
    <div className={s.text}>
      <h1>Liam Marega</h1>
      <br />
      &mdash; Full Stack Developer &mdash;
      <br />
      <div className={s.imagen}>
        <Link to="aboutID" smooth={true} duration={1500}>
          {" "}
          <img src={foto} alt="flecha" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default Text;
