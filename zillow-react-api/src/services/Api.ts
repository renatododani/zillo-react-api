import axios from "axios";
import { SearchByBeds } from "../components/SearchByBeds";
import { Property } from "../models/Property";

export function RealtyResponse() {
  // return axios.get<Property>(
  // //   "https:/realty-mole-property-api.p.rapidapi.com/saleListings",
  // //   {
  // //     method: "GET",
  // //     headers: {
  // //       "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
  // //       "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY!,
  // //     },
  // //   }
  // // )
  // //   .then((response) => response.data)
  // //   .catch((err) => {
  // //     console.error(err);
  //    )
}
export function getSearchDetails(city: string, beds: number, baths: number, property: string, price: number) {
  return axios.get(
    `https:/realty-mole-property-api.p.rapidapi.com/saleListings`,
    {
      method: "GET",
      params: {city: city, beds: beds, baths: baths, property: property, price: price },
      headers: {
        "x-rapidapi-host": "realty-mole-property-api.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY!,
      },
    }
  )
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    })
}
