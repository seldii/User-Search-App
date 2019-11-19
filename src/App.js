import React, { Component } from "react";
import "./App.css";
import axios from "./axios-users";
import Table from "./containers/TableContainer/Table";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    axios
      .get("/users")
      .then(response => {
        const users = response.data;
        console.log(users);
        this.setState({ users });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Search for User By Dedicated Field
        </header>
        <Table users={this.state.users} />
      </div>
    );
  }
}

export default App;
