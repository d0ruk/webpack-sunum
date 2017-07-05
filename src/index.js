import "./index.css"
import React from "react"
import ReactDOM from "react-dom"

// import Ticker from "./Ticker.js"

class Component extends React.Component {
  constructor() {
    super();
    // setTimeout(() => { throw new Error("boom"); }, 2000)
  }

  render() {
    return (
      <div>
        <h1><b>Merhaba AHMET</b></h1>
      </div>
    );
  }
}

ReactDOM.render(<Component />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
