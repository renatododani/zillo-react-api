import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { isTemplateSpan } from "typescript";
import { Property } from "../models/Property";
import { getSearchDetails } from "../services/Api";
import { Filters } from "./Filters";

export function SearchResults() {
  const [properties, setProperties] = useState<Property[]>([]);
  // const urlParams = useParams();

  // useEffect(() => {
  //   console.log(urlParams);
  // }, []);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchCity = searchParams.get("city");
    const bathrooms = searchParams.get("bathrooms");
    const bedrooms = searchParams.get("bedrooms");
    const searchState = searchParams.get("state");
    // const limit = searchParams?.get("30");
    console.log(searchCity, bathrooms, bedrooms, searchState);
    if (searchCity && bathrooms && bedrooms && searchState) {
      getSearchDetails(searchCity, bedrooms, bathrooms, searchState).then(
        (data) => setProperties(data.headers.bathrooms)
      );
    }
    console.log(properties);
  }, [searchParams, properties]);

  return (
    <div>
      <ul>
        {properties.map((property) => (
          <li>
            {property.bathrooms} {property.bedrooms}{" "}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Search address" />
      <button className="searchBtn">Search</button>
      {/* <FilterSearch></FilterSearch> */}
    </div>
  );
}
