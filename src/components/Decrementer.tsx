import React, { Component } from "react";

class Decrementer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <button onClick={this.props.decrement}>decrement</button>;
  }
}

export default Decrementer;
