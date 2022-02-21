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
export function getSearchDetails(city: string, beds: string, baths: string, state: string) {
  return axios.get(
    'https://realty-mole-property-api.p.rapidapi.com/saleListings',
    {
      method: "GET",
      params: {city: city, bedrooms: beds, bathrooms: baths, state: state, limit: '30' },
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
