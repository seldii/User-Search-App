import React, { useState } from "react";
import styled from "./SearchBar.module.css";
import SearchCriteriaOptions from "./SearchCriteriaOptions";
const SearchBar = props => {
  const [option, setOption] = useState();
  const onOptionSelect = e => {
    setOption(e.target.value);
  };
  return (
    <div className={styled.SearchBar}>
      <input
        type="text"
        className={styled.Input}
        value={props.value}
        onChange={e => props.handleSearch(e, option)}
        placeholder="Search for..."
      />
      <SearchCriteriaOptions onOptionSelectHandler={onOptionSelect} />
    </div>
  );
};

export default SearchBar;
