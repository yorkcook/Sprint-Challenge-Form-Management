import React from "react";

import "./App.css";
import Registration from "./components/Registration";
import ProtectedData from "./components/ProtectedData";

function App() {
  return (
    <div className="App">
      <h1>Sprint Challenge</h1>
      <Registration />
      <ProtectedData />
    </div>
  );
}

export default App;
