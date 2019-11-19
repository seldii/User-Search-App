import React from "react";
import styled from "./SearchBar.module.css";
const SearchBar = props => {
  return (
    <input
      type="text"
      className={styled.Input}
      onChange={props.handleSearch}
      placeholder="Search..."
    />
  );
};

export default SearchBar;
