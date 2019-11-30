import React from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.headers.map(h => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
