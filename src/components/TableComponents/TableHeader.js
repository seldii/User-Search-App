import React from "react";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar/SearchBar";

const TableHeader = props => {
  return (
    <thead>
      {["Name", "Username", "Email", "Website"].map(h => (
        <th>
          <SearchBar handleSearch={e => props.handleSearch(e, h)} />
          {h}
        </th>
      ))}
    </thead>
  );
};

TableHeader.propTypes = {};

export default TableHeader;
