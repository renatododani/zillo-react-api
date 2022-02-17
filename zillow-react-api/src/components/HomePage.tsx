import React, { useEffect, useState } from "react";
import { getSearchDetails } from "../services/Api";
import { Filters } from "./Filters";
import { PropertySearch } from "./PropertySearch";
import { Navigate, useNavigate } from "react-router-dom";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState<any>("");

  // const [price, setPrice] = useState(0);
  // function setPriceValue(value: number) {
  //   setPrice(value);
  // }
  // const [property, setProperty] = useState("");
  // function setPropertyType(value: string) {
  //   setProperty(value);
  // }
  // const [beds, setBeds] = useState(0);
  // function setBedrooms(value: number) {
  //   setBeds(value);
  // }
  // const [baths, setBaths] = useState(0);
  // function setBathrooms(value: number) {
  //   setBaths(value);
  // }

  // function propertyDetails() {
  //   setPriceValue(price);
  //   setPropertyType(property);
  //   setBathrooms(baths);
  //   setBedrooms(beds);
  // }

  function setSearch(search: string) {
    setSearchTerm(search);
  }

  return (
    <div>
      <div className="homePage">
        <img className="arsLogo" alt="Logo Img" src="Images/ARS-logos.jpeg" />
        <h1>ARS</h1>
      </div>
      <h1 className="awaits">Your new home awaits you</h1>
      <PropertySearch
        onSubmit={(searchTerm) => setSearch(searchTerm)}
      ></PropertySearch>
      <Filters searchTerm={searchTerm}></Filters>
    </div>
  );
}
