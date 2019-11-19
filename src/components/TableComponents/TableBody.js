import React from "react";
import PropTypes from "prop-types";
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

TableBody.propTypes = {};

export default TableBody;
