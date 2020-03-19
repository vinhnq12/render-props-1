import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Lists from "./Lists";

const data = ["a", "b", "c"];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Lists data={data} render={item => <div>{item}</div>} />
  </React.StrictMode>,
  rootElement
);
