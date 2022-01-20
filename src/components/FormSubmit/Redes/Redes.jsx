import React from "react";
import "./Redes.css";
function Redes() {
  return (
    <div className="Redes">
      <div className="wrapper">
        <a target="_blank" href="https://www.linkedin.com/in/liam-marega/">
          <div class="icon twitter">
            <div class="tooltip">Linkedin</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="html5"
              width="40"
              height="40"
            />
            <span>
              <i class="fab fa-twitter"></i>
            </span>
          </div>
        </a>
        <a target="_blank" href="https://github.com/LiamMarega">
          <div className="icon github">
            <div className="tooltip">Github</div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="html5"
              width="40"
              height="40"
            />
            <span>
              <i className="fab fa-github"></i>
            </span>
          </div>
        </a>
        <a target="_blank" href="mailto:liammarega85@gmail.com">
          <div className="icon youtube">
            <div className="tooltip">Mail</div>
            <img
              src="http://cdn.onlinewebfonts.com/svg/img_237869.png"
              alt="html5"
              width="40"
              height="40"
            />
            <span>
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </a>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=5493436203341&text=Hola!%20%F0%9F%91%8B%20Acabo%20de%20ver%20tu%20perfil%20como%20Full%20Stack%20Developer%20y%20me%20interesa%20recibir%20mas%20informaci%C3%B3n!%20">
          <div className="icon whatsapp">
            <div className="tooltip">WhatsApp</div>
            <img
              src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
              alt="html5"
              width="40"
              height="40"
            />
            <span>
              <i className="fab fa-whatsapp"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Redes;
