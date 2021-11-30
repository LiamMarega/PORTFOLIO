
import React from "react";
import s from "./ContactForm.module.css"
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
        <a target="_blank" href="https://www.linkedin.com/in/liam-marega/">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="html5"
            width="40"
            height="40"
          />
        </a>
        <a target="_blank" href="https://github.com/LiamMarega">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="html5"
            width="40"
            height="40"
          />
        </a>
        <a target="_blank" href="mailto:liammarega85@gmail.com">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_237869.png"
            alt="html5"
            width="40"
            height="40"
          />
        </a>
      </div>
    </div>
  );
}
export default ContactForm;