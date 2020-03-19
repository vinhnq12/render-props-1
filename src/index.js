import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Lists from "./Lists";
import List from "./List";
import List1 from "./List1";

const data = ["a", "b", "c"];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Lists data={data} render={item => <List item={item} />} />
    <Lists data={data} render={item => <List1 item={item} />} />
  </React.StrictMode>,
  rootElement
);
