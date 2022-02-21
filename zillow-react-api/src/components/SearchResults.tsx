import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTemplateSpan } from "typescript";
import { Property } from "../models/Property";
import { Filters } from "./Filters";

export function SearchResults(props: { properties: Property[] }) {
  // const urlParams = useParams();

  // useEffect(() => {
  //   console.log(urlParams);
  // }, []);

  return (
    <div>
      <ul>
        {props.properties.map((property) => (
          <li>
            {property.price} {property.bathrooms} {property.bedrooms}{" "}
            {property.propertyType}
          </li>
        ))}
      </ul>
      <input type="text" placeholder="Search address" />
      <button className="searchBtn">Search</button>
      {/* <FilterSearch></FilterSearch> */}
    </div>
  );
}
