import React, { Component } from "react";
import axios from "../../axios-users";
import TableHeader from "../../components/TableComponents/TableHeader";
import TableBody from "../../components/TableComponents/TableBody";
import styled from "./Table.module.css";
import SearchBar from "../../components/TableComponents/SearchBar/SearchBar";
import NotFound from "../../components/UI/NotFound";

export class Table extends Component {
  state = {
    query: "",
    users: [],
    filteredUsers: [],
    notFound: false
  };
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers = () => {
    axios
      .get("/users")
      .then(response => {
        const users = response.data;
        this.setState({ users, filteredUsers: users });
      })
      .catch(error => console.log(error));
  };

  handleSearch = (e, option) => {
    const users = [...this.state.users];
    //if there is no search criteria selected by user
    let searchOption = "name";
    // if search crieteria selected
    if (option) {
      searchOption = option.toLowerCase();
    }
    //turn the user query in lowercase
    let query = e.target.value.toLowerCase();
    this.setState({ query });
    if (this.state.query) {
      this.setState(() => {
        const filteredUsers = users.filter(user =>
          user[searchOption].toLowerCase().includes(query)
        );

        return { filteredUsers, notFound: filteredUsers.length === 0 };
      });
    }
  };

  render() {
    return (
      <div className={styled.Table}>
        <div className={styled.SearchBar}>
          {" "}
          <SearchBar
            value={this.state.query}
            handleSearch={this.handleSearch}
          />
        </div>
        <table>
          <TableHeader />
          <TableBody users={this.state.filteredUsers} />
        </table>{" "}
        {this.state.notFound ? <NotFound /> : null}
      </div>
    );
  }
}

export default Table;
