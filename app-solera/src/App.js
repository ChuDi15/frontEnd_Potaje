import React from "react";
import "./App.css";
import Children from "./Children.js";
import "bootstrap/dist/css/bootstrap.min.css";
/**
 *Pagina principal
 *@param appName texto de cabecera
 *@returns visual component
 */

function App() {
  const appName = "SOLERA TEAMS. BOOTCAMP 4";

  return (
    <div className="container">
      <div className="Teams  bg-secondary d-flex flex-column ">
        <h1 className="AppName mt-3 ms-5">{appName}</h1>
        <Children />
      </div>
    </div>
  );
}

export default App;
