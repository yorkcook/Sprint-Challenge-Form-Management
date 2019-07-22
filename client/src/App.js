import React from "react";

import "./App.css";
import Registration from "./components/Registration";
import { ProtectedData } from "./components/ProtectedData";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <div className="App">
      <h1>Sprint Challenge</h1>
      <Route exact path="/" component={Registration} />
      <PrivateRoute exact path="/recipes" component={ProtectedData} />

      {/* <Registration />
      <ProtectedData /> */}
    </div>
  );
}
