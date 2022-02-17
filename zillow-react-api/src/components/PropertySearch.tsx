import { Filters } from "./Filters";
import { getSearchDetails } from "../services/Api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchResults } from "./SearchResults";

export function PropertySearch(props: {
  onSubmit: (searchTerm: string) => void;
}) {
  const [searchTerm, setNewSearchTerm] = useState<any>("");
  const navigate = useNavigate();
  function onSubmit() {
    setNewSearchTerm(searchTerm);
    navigate("/results");
  }

  useEffect(() => {});

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="State, City"
        onChange={(e) => setNewSearchTerm(e.target.value)}
      />
      <span>
        <button onClick={() => props.onSubmit(searchTerm)}>Search</button>
      </span>
      {/* <Filters></Filters> */}
    </div>
  );
}
