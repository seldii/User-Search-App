import React, { Component } from "react";
import "./App.css";

import Table from "./containers/TableContainer/Table";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Table />
      </div>
    );
  }
}

export default App;
