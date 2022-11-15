import React from "react";
import "./App.css";
import Children from "./Children.js";
import "bootstrap/dist/css/bootstrap.min.css";

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
