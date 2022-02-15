import { useNavigate } from "react-router-dom";
import { Filters } from "./Filters";

export function SearchResults() {
  return (
    <div>
      <input type="text" placeholder="Search address" />
      <button className="searchBtn">Search</button>
      {/* <Filters></Filters> */}
    </div>
  );
}
