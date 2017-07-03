import "./index.css"
import logo from "./webpack-logo.svg"
import React from "react"
import ReactDOM from "react-dom"

const Component = () => (
  <div>
    <h1><b>Merhaba Dünya</b></h1>
    <img src={logo} height={250} />
  </div>
);

ReactDOM.render(<Component />, document.getElementById("app"));
