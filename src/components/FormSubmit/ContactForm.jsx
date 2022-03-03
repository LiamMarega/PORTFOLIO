import React from "react";
import s from "./ContactForm.module.css";
import cv from "./CVLIAMMAREGA.pdf"
import Redes from "./Redes/Redes.jsx"
function ContactForm() {
  return (
    <div className={s.bodyContact}>
      <div className={s.Contact}>
        <h2>CONTÁCTAME</h2>
      </div>
      <form
        target="_blank"
        action="https://formsubmit.co/bc250a076fe6cf9301b82c3237c55ce2"
        method="POST"
      >
        <input
          name="name"
          type="text"
          className={s.feedback_input}
          placeholder="Name"
        />
        <input
          name="email"
          type="text"
          className={s.feedback_input}
          placeholder="Email"
        />
        <textarea
          name="text"
          className={s.feedback_input}
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
      <div className={s.imgContacts}>
        <Redes />
      </div>
        <div className={s.containerCv}>
          <a href={cv} download="Cv Liam Marega.pdf">
            Descargar CV
          </a>
        </div>
    </div>
  );
}
export default ContactForm;
