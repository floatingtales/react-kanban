import React, { Component } from "react";

class Incrementer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <button onClick={this.props.increment}>increment</button>;
  }
}

export default Incrementer;
