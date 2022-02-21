import React from "react";
import { Property } from "../models/Property";

export function SearchResults(props: { properties: Property[] }) {
  return (
    <div>
      <ul>
        {props.properties.map((property) => (
          <li>
            {property.price} {property.bathrooms} {property.bedrooms}
            {property.propertyType}
          </li>
        ))}
      </ul>
    </div>
  );
}
