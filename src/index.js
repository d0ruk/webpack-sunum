import "./index.css"
import React from "react"
import ReactDOM from "react-dom"

const Component = () => (
  <div>
    <pre>
      {JSON.stringify(process, null, 2)}
    </pre>
  </div>
);
ReactDOM.render(<Component />, document.getElementById("app"));
