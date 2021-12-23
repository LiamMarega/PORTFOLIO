import React from "react";
import s from "./About2.module.css";
import "animate.css";
import { useState, useEffect } from "react";


function About() {
  var darkLocal = JSON.parse(localStorage.getItem("darkMode"));
  const [dark, setDark] = useState(darkLocal);
  console.log("LOGG", darkLocal);

  useEffect(() => {
    console.log("LOGG", darkLocal);
    setDark(darkLocal);
  })
 return (
   <div id="aboutID" className={s.About}>
     <div className={s.textoPresentacion}>
       <div className={s.textoCentrado}>
         <h3 className="animate__jello">¡Historial Academico!</h3>
       </div>
     </div>
     <div className={s.container}>
       <div className={s.rainbow}>
         <div className={s.especificaciones}>
           <h2>Desarrollador Full Stack</h2>
           <h4>SoyHenry</h4>
           <br />
           <hr />
           <p>
             Inicie el bootcamp de desarrolador Full Stack en Julio de 2021 y actualmente cuento con
             +900hs, diversos conocimientos en trabajos individuales y en conjunto con un equipo con 
             el que realizamos proyectos reales, para necesidades de la industria real.
           </p>
         </div>
       </div>
       <div className={s.rainbow}>
         <div className={s.experiencias}>
           <h2>ing. en informática</h2>
           <h4>Universidad Nacional del Litoral</h4>
           <p>Cursante de ingenieria en informatica 2021</p>
           <hr />

           <ul>
             <li>Fundamentos de la Programación C++</li>
             <li>Matemática Básica.</li>
             <li>Química General.</li>
             <li>Comunicación electrónica (Excel y Word).</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
 );
}

export default About;
