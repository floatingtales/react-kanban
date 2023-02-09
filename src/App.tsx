import React, { Component } from "react";
import ArrayDisplayer from "./components/ArrayDisplayer";
import ArrayInputer from "./components/ArrayInputer";
import Decrementer from "./components/Decrementer";
import Incrementer from "./components/Incrementer";
import Message from "./components/Message";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      message: "",
      arrayValue: [],
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.pushArray = this.pushArray.bind(this);
  }
  increment() {
    console.log("incrementing");
    this.setState({ ...this.state, count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ ...this.state, count: this.state.count - 1 });
  }
  setMessage(newMessage: string) {
    this.setState({ ...this.state, message: newMessage });
  }
  pushArray(newArrVal: string) {
    this.setState({
      ...this.state,
      arrayValue: [...this.state.arrayValue, newArrVal],
    });
  }

  render() {
    return (
      <div className="app">
        <h1>hello</h1>
        <p>counter: {this.state.count}</p>
        <Incrementer increment={this.increment} />
        <Decrementer decrement={this.decrement} />
        <p>message: {this.state.message}</p>
        <Message setMessage={this.setMessage} />
        <ArrayInputer pushArray={this.pushArray} />
        <ArrayDisplayer arrayValue={this.state.arrayValue} />
      </div>
    );
  }
}

export default App;
