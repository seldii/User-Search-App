import React from "react";
import PropTypes from "prop-types";
import TableCell from "./TableCell";

const TableRow = props => {
  const { name, username, email, website } = props.user;
  return (
    <tr>
      {[name, username, email, website].map(value => (
        <TableCell value={value} />
      ))}
    </tr>
  );
};

TableRow.propTypes = {};

export default TableRow;
