import React, { Component } from "react";

class ArrayInputer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { inputValue: "" };
    this.setInput = this.setInput.bind(this);
  }
  setInput = (newInput: string) => this.setState({ inputValue: newInput });
  render() {
    return (
      <>
        <input
          value={this.state.inputValue}
          onChange={(e) => this.setInput(e.target.value)}
        />
        <button
          onClick={() => {
            this.props.pushArray(this.state.inputValue);
            this.setInput("");
          }}
        >
          push array
        </button>
      </>
    );
  }
}

export default ArrayInputer;
