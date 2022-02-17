import { useEffect, useState } from "react";
import { PropertySearch } from "./PropertySearch";
import { SearchByBaths } from "./SearchByBaths";
import { SearchByBeds } from "./SearchByBeds";
import { SearchByPrice } from "./SearchByPrice";
import { SearchByPropertyType } from "./SearchByPropertyType";
import { HomePage } from "./HomePage";
import { getSearchDetails } from "../services/Api";

export function Filters(props: { searchTerm: string }) {
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
  const [searchTerm, setSearchTerm] = useState(props.searchTerm);

  useEffect(() => {
    setSearchTerm(props.searchTerm);
  }, [props]);

  useEffect(() => {
    getSearchDetails(searchTerm, beds, baths, property, price).then(
      (data) => {}
    );
  }, [searchTerm, beds, baths, property, price]);

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
