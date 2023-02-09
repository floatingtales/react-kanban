import React, { Component } from "react";

class Message extends Component<any, any> {
  setInput: (newInput: string) => void;
  constructor(props: any) {
    super(props);
    this.state = { inputValue: "" };
    this.setInput = (newInput) => this.setState({ inputValue: newInput });
  }
  render() {
    return (
      <>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setInput(e.target.value)}
        />
        <button onClick={() => this.props.setMessage(this.state.inputValue)}>
          update message
        </button>
      </>
    );
  }
}

export default Message;
