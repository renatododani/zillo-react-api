import axios from "axios";
import { SearchByBeds } from "../components/SearchByBeds";
import { Property } from "../models/Property";

export function getSearchDetails(
  city: string,
  beds: number,
  baths: number,
  state: string,
  price: number
) {
  const result = axios
    .get(`https:/realty-mole-property-api.p.rapidapi.com/saleListings`, {
      method: "GET",
      params: {
        city: city,
        state: state,
        bedrooms: beds,
        bathrooms: baths,
      },
      headers: {
        //"x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
        // "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY!,
      },
    })
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return result;
}
