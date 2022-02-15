import { Filters } from "./Filters";
import { getSearchDetails } from "../services/Api";
import { useEffect, useState } from "react";
export function PropertySearch() {
  const [searchTerm, setSearchTerm] = useState<any>("");

  useEffect(() => {});

  return (
    <div>
      <input type="text" placeholder="State, City,Zip" value={searchTerm} />
      <span>
        <button className="searchBtn" onClick={() => Filters()}>
          Search
        </button>
      </span>
    </div>
  );
}
