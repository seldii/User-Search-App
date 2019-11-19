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
    displayValue: "Name"
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
  const onOptionSelect = e => {
    console.log(e.target.value);
  };
  return (
    <select onChange={props.onOptionSelectHandler}>
      {Object.keys(searchOptions).map(key => (
        <option
          key={searchOptions[key].value}
          value={searchOptions[key].value}
          disabled={searchOptions[key].disabled}
          hidden={searchOptions[key].hidden}
        >
          {searchOptions[key].displayValue}
        </option>
      ))}
    </select>
  );
};

export default SearchCriteriaOptions;
