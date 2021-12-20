import React from "react";
import "./DarkMode.css";
import { useState, useEffect } from "react";

function DarkMode() {

const [dark, setDark] = useState(false);

useEffect(() => {
  localStorage.setItem("darkMode", dark);
}, [dark]);

  return (
    <div className="ContainerDarkMode">
      <input
        onChange={() => dark ? setDark(false) : setDark(true)}
        type="checkbox"
        id="toggle"
        className="toggle--checkbox"
      />
      <label for="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
      <div className="background"></div>
    </div>
  );
}

export default DarkMode;
