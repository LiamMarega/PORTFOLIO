import Home from "./components/Home/Home.jsx"
import React, { useState, useEffect } from "react"
import DarkMode from "./components/DarkMode/DarkMode.jsx"

const App = () => {

  

  return (
    <div>
    <DarkMode />
    <Home />
    </div>
  );
};

export default App;