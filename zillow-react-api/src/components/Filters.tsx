import { FormEvent, useEffect, useState } from "react";
// import { PropertySearch } from "./PropertySearch";
import { SearchByBaths } from "./SearchByBaths";
import { SearchByBeds } from "./SearchByBeds";
import { SearchByPrice } from "./SearchByPrice";
import { SearchByPropertyType } from "./SearchByPropertyType";
import { HomePage } from "./HomePage";
import { getSearchDetails } from "../services/Api";
import { Property } from "../models/Property";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SearchByStates } from "./SearchByStates";

interface IFilterSearchProps {
  setResults: (properties: Property[]) => void;
}

export function Filters({ setResults }: IFilterSearchProps) {
  const [price, setPrice] = useState(0);
  const [property, setProperty] = useState("");
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [searchCity, setSearchCity] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchState, setSearchState] = useState("");
  const [states, setStates] = useState("");
  const [limit, setLimit] = useState(0);

  const navigate = useNavigate();

  function submitHandler(e: FormEvent) {
    e.preventDefault();

    const queryStringParams: any = {};
    queryStringParams.bedrooms = beds;
    queryStringParams.bathrooms = baths;
    queryStringParams.city = searchCity;
    queryStringParams.state = states;
    queryStringParams.limit = limit;
    // queryStringParams.propertyType = property;
    // queryStringParams.price = price;
    navigate(`/results?` + new URLSearchParams(queryStringParams).toString());
  }

  // function onSubmit() {
  //   getSearchDetails(searchTerm, baths, beds).then((data) =>
  //     setResults(data.items)
  //   );
  //   setSearchParams({ searchTerm });
  //   setSearchTerm(searchTerm);
  //   navigate("/results", {});

  // }

  return (
    <>
      <div>
        <input
          type="text"
          value={searchCity}
          placeholder="City"
          onChange={(e) => setSearchCity(e.target.value)}
        />
      </div>
      <SearchByStates onSelect={(state) => setStates(state)} />
      <SearchByPrice onSelect={(price) => setPrice(price)} />
      <SearchByPropertyType onSelect={(property) => setProperty(property)} />
      <SearchByBeds onSelect={(bed) => setBeds(bed)} />
      <SearchByBaths onSelect={(bath) => setBaths(bath)} />
      <button onClick={submitHandler}>Search</button>
    </>
  );
}

// export function Filters(props: {
//   searchTerm: string;
//   onResults: (properties: Property[]) => void;
// }) {
//   const [price, setPrice] = useState(0);

//   function setPriceValue(value: number) {
//     setPrice(value);
//   }
//   const [property, setProperty] = useState("");
//   function setPropertyType(value: string) {
//     setProperty(value);
//   }
//   const [beds, setBeds] = useState(0);
//   function setBedrooms(value: number) {
//     setBeds(value);
//   }
//   const [baths, setBaths] = useState(0);
//   function setBathrooms(value: number) {
//     setBaths(value);
//   }
//   const [searchTerm, setSearchTerm] = useState(props.searchTerm);

//   useEffect(() => {
//     setSearchTerm(props.searchTerm);
//   }, [props]);

//   useEffect(() => {
//     getSearchDetails(searchTerm, beds, baths, property, price).then((data) =>
//       props.onResults(data.items)
//     );
//     console.log(searchTerm, beds, baths, property, price);
//   }, [searchTerm, beds, baths, property, price, props]);

//   return (
//     <div>
//       <SearchByPrice onSelect={(price) => setPriceValue(price)}></SearchByPrice>
//       <SearchByPropertyType
//         onSelect={(property) => setPropertyType(property)}
//       ></SearchByPropertyType>
//       <SearchByBeds onSelect={(bed) => setBedrooms(bed)}></SearchByBeds>
//       <SearchByBaths onSelect={(bath) => setBathrooms(bath)}></SearchByBaths>
//     </div>
//   );
// }
