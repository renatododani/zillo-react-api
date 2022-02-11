import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { realtyResponse } from "./services/Api";
import { SearchByPrice } from "./components/SearchByPrice";
import { SearchByPropertyType } from "./components/SearchByPropertyType";
import { SearchByBaths } from "./components/SearchByBaths";
import { SearchByBeds } from "./components/SearchByBeds";
import { PropertySearch } from "./components/PropertySearch";

function App() {
  useEffect(() => {
    realtyResponse();
  }, []);

  return (
    <div className="App">
      <SearchByPrice></SearchByPrice>
      <SearchByPropertyType></SearchByPropertyType>
      <SearchByBaths></SearchByBaths>
      <SearchByBeds></SearchByBeds>
      <PropertySearch></PropertySearch>
    </div>
  );
}

export default App;
