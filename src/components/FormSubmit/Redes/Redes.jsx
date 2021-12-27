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
        <a href="mailto:liammarega85@gmail.com">
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
      </div>
    </div>
  );
}

export default Redes;
