import "./index.css";
import ReactDOM from "react-dom";
import React from "react";

const tag = (
  <h1>
    <strong>Olá React!</strong>
  </h1>
);
ReactDOM.render(<div>{tag}</div>, document.getElementById("root"));
