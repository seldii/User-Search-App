import React from "react";
import styled from "./NotFound.module.css";

const NotFound = () => {
  return (
    <p className={styled.NotFound}>
      There is no user found matching your query!
    </p>
  );
};

export default NotFound;
