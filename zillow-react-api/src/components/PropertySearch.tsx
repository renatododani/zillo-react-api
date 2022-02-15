import { Filters } from "./Filters";
import { getSearchDetails } from "../services/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchResults } from "./SearchResults";

export function PropertySearch() {
  const [searchTerm, setSearchTerm] = useState<any>("");
  const navigate = useNavigate();
  function onSubmit() {
    navigate("/results");
  }

  useEffect(() => {});

  return (
    <div>
      <input type="text" placeholder="State, City, Zip" value={searchTerm} />
      <span>
        <button className="searchBtn" onClick={onSubmit}>
          Search
        </button>
      </span>
      {/* <Filters></Filters> */}
    </div>
  );
}
