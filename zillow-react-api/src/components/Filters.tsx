import { useState } from "react";
import { SearchByBaths } from "./SearchByBaths";
import { SearchByBeds } from "./SearchByBeds";
import { SearchByPrice } from "./SearchByPrice";
import { SearchByPropertyType } from "./SearchByPropertyType";
export function Filters() {
  const [price, setPrice] = useState(0);
  function setPriceValue(value: number) {
    setPrice(value);
  }
  const [property, setProperty] = useState("");
  function setPropertyType(value: string) {
    setProperty(value);
  }
  const [beds, setBeds] = useState(0);
  function setBedrooms(value: number) {
    setBeds(value);
  }
  const [baths, setBaths] = useState(0);
  function setBathrooms(value: number) {
    setBaths(value);
  }
  return (
    <div>
      <SearchByPrice onSelect={(price) => setPriceValue(price)}></SearchByPrice>
      <SearchByPropertyType
        onSelect={(property) => setPropertyType(property)}
      ></SearchByPropertyType>
      <SearchByBeds onSelect={(bed) => setBedrooms(bed)}></SearchByBeds>
      <SearchByBaths onSelect={(bath) => setBathrooms(bath)}></SearchByBaths>
    </div>
  );
}
