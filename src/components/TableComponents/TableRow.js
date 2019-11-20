import React from "react";
import TableCell from "./TableCell";

const TableRow = props => {
  const { name, username, email, website } = props.user;
  return (
    <tr>
      {[name, username, email, website].map(value => (
        <TableCell key={Math.random()} value={value} />
      ))}
    </tr>
  );
};

export default TableRow;
