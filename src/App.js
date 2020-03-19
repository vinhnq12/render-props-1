import React from "react";
import "./styles.css";

import Lists from "./components/Lists";
import List from "./components/List";
import List1 from "./components/List1";

const data = ["a", "b", "c"];

export default function App() {
  return (
    <div className="App">
      <Lists data={data} render={item => <List item={item} />} />
      <Lists data={data} render={item => <List1 item={item} />} />
    </div>
  );
}
