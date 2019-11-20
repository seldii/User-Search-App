import React from "react";

const searchOptions = {
  Select: {
    value: "",
    displayValue: "Select a search criteria",
    disabled: true,
    hidden: true
  },
  Name: {
    value: "name",
    displayValue: "Name",
    selected: true
  },
  Username: {
    value: "username",
    displayValue: "Username"
  },
  Email: {
    value: "email",
    displayValue: "Email"
  },
  Website: {
    value: "website",
    displayValue: "Website"
  }
};

const SearchCriteriaOptions = props => {
  return (
    <select onChange={props.onOptionSelectHandler}>
      {Object.keys(searchOptions).map(key => (
        <option
          key={searchOptions[key].value}
          value={searchOptions[key].value}
          disabled={searchOptions[key].disabled}
          defaultValue="name"
        >
          {searchOptions[key].displayValue}
        </option>
      ))}
    </select>
  );
};

export default SearchCriteriaOptions;
