import React, { Fragment } from "react";
import spinner from "../assets/spinner.gif";

const Loading = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading ..."
      style={{
        width: "30%",
        margin: "0 auto",
        marginLeft: "43%",
        display: "block",
      }}
    />
  </Fragment>
);

export default Loading;
