import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { realtyResponse } from "./services/Api";

function App() {
  useEffect(() => {
    realtyResponse();
  });

  return <div className="App"></div>;
}

export default App;
