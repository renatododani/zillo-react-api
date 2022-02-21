import { Filters } from "./Filters";
import { getSearchDetails } from "../services/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchResults } from "./SearchResults";

export function PropertySearch(props: {
  onSubmit: (searchTerm: string) => void;
}) {
  const [searchTerm, setNewSearchTerm] = useState<any>("");

  useEffect(() => {
    setNewSearchTerm(searchTerm);
  });

  return (
    <div className="searchProperty">
      <input
        type="text"
        value={searchTerm}
        placeholder="City"
        onChange={(e) => setNewSearchTerm(e.target.value)}
      />
      <span>
        <button
          className="searchBtn"
          onClick={() => props.onSubmit(searchTerm)}
        >
          Search
        </button>
      </span>
    </div>
  );
}
