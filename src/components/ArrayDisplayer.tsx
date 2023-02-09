import React, { Component } from "react";

class ArrayDisplayer extends Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Inside the array</h1>
        {this.props.arrayValue.map((individualEntry: string) => (
          <p>{individualEntry}</p>
        ))}
      </>
    );
  }
}

export default ArrayDisplayer;
