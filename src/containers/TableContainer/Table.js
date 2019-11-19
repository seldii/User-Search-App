import React, { Component } from "react";

import TableHeader from "../../components/TableComponents/TableHeader";
import TableBody from "../../components/TableComponents/TableBody";
import styled from "./Table.module.css";
import SearchBar from "../../components/TableComponents/SearchBar/SearchBar";

export class Table extends Component {
  state = {
    filteredUsers: []
  };
  componentDidMount() {
    this.setState({ filteredUsers: this.props.users });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredUsers: nextProps.users
    });
  }
  handleSearch = (e, criteria) => {
    //constant to hold the original users
    const currentUsers = this.props.users;
    //var to hold the filtered users
    let filteredUsers = [];

    if (e.target.value !== "") {
      filteredUsers = currentUsers.filter(user => {
        //turn the name into lowercase
        let searchCriteria = user[criteria.toLowerCase()].toLowerCase();
        //turn the search bar entry into lowercase
        let entry = e.target.value.toLowerCase();

        return searchCriteria.includes(entry);
      });
    } else {
      //when search bar is empty assign the filteredusers to the original users
      filteredUsers = this.props.users;
    }

    this.setState({ filteredUsers });
  };
  render() {
    return (
      <div className={styled.Table}>
        <div className={styled.SearchBar}>
          {" "}
          <SearchBar handleSearch={e => this.handleSearch(e, "name")} />
        </div>

        <table>
          <TableHeader handleSearch={this.handleSearch} />
          <TableBody users={this.state.filteredUsers} />
        </table>
      </div>
    );
  }
}

export default Table;
