import React from "react"
import ReactDOM from "react-dom"

class Ticker extends React.Component {
  constructor() {
    super();
    this.state = { cnt : 0 }
  }

  componentDidMount() {
    this.id = setInterval(() => this.setState({ cnt: ++this.state.cnt }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    const { cnt } = this.state;

    return <span style={{ fontSize: "5rem" }} span>{cnt}</span>
  }
}

ReactDOM.render(<Ticker />, document.getElementById("app2"));

if (module.hot) {
  module.hot.accept();
}
