import "./index.css"
import React from "react"
import ReactDOM from "react-dom"

class Component extends React.Component {
  // constructor() {
  //   super();
  //   setTimeout(() => { throw new Error("boom"); }, 2000)
  // }

  render() {
    return (
      <div>
        <h1><b>Merhaba Dünya</b></h1>
      </div>
    );
  }
}

import(/* webpackChunkName: "sayac" */ "./Ticker.js")
  .then(m => {
    ReactDOM.render(<Component />, document.getElementById("app"));
    ReactDOM.render(<m.default />, document.getElementById("app2"));
  })
  .catch(console.error)


if (module.hot) {
  module.hot.accept();
}
