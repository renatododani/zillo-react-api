import { useEffect, useState } from "react";
import { SearchByBaths } from "./SearchByBaths";
import { SearchByBeds } from "./SearchByBeds";
import { SearchByPrice } from "./SearchByPrice";
import { SearchByStateType } from "./SearchByPropertyType";
import { getSearchDetails } from "../services/Api";
import { Property } from "../models/Property";
import { useNavigate } from "react-router-dom";

export function Filters(props: {
  searchTerm: string;
  onResults: (properties: Property[]) => void;
}) {
  const [price, setPrice] = useState(0);
  function setPriceValue(value: number) {
    setPrice(value);
  }
  const [state, setNewState] = useState("");
  function setStateValue(value: string) {
    setNewState(value);
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
    getSearchDetails(searchTerm, beds, baths, state, price).then((data) =>
      props.onResults(JSON.parse(JSON.stringify(data)))
    );
  }, [searchTerm, price, state, beds, baths, props]);

  return (
    <div>
      <SearchByPrice onChange={(price) => setPriceValue(price)}></SearchByPrice>
      <SearchByStateType
        onChange={(state) => setStateValue(state)}
      ></SearchByStateType>
      <SearchByBeds onChange={(bed) => setBedrooms(bed)}></SearchByBeds>
      <SearchByBaths onChange={(bath) => setBathrooms(bath)}></SearchByBaths>
    </div>
  );
}
