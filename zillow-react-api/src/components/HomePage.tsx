import React, { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { PropertySearch } from "./PropertySearch";
import { Property } from "../models/Property";
import { SearchResults } from "./SearchResults";

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const [items, setItems] = useState<Property[]>([]);

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
      <Filters
        onResults={(properties) => {
          setItems(properties);
        }}
        searchTerm={searchTerm}
      ></Filters>
      <PropertySearch
        onSubmit={(searchTerm) => setSearch(searchTerm)}
      ></PropertySearch>
      <SearchResults properties={items}></SearchResults>
    </div>
  );
}
