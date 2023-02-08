import React, { Component } from "react";

class App extends Component<{ prop: string }, object> {
  constructor(props: { prop: string }) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
