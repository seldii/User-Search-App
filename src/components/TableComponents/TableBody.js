import React from "react";
import TableRow from "./TableRow";

const TableBody = props => {
  return (
    <tbody>
      {props.users.map(user => (
        <TableRow key={user.id} user={user} />
      ))}
    </tbody>
  );
};

export default TableBody;
