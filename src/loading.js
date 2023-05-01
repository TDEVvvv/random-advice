import React from "react";
import spinner from "./images/loading-buffering.gif";
const loading = () => {
  return (
    <>
      <img src={spinner} width={150} height={150} />
    </>
  );
};

export default loading;
