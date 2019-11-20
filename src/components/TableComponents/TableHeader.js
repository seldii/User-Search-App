import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {["Name", "Username", "Email", "Website"].map(h => (
          <th key={Math.random()}>{h}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
