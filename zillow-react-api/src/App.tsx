import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { RealtyResponse } from "./services/Api";
// import { SearchByPrice } from "./components/SearchByPrice";
import { SearchByPropertyType } from "./components/SearchByPropertyType";
import { SearchByBaths } from "./components/SearchByBaths";
import { SearchByBeds } from "./components/SearchByBeds";
import { PropertySearch } from "./components/PropertySearch";
import { Filters } from "./components/Filters";
import { HomePage } from "./components/HomePage";

function App() {
  //   useEffect(() => {
  //     RealtyResponse();
  //   }, []);

  return (
    <div className="App">
      <HomePage></HomePage>
      <Filters></Filters>
      <PropertySearch></PropertySearch>
    </div>
  );
}

export default App;
