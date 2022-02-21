import React, { FC, useState } from "react";
import { Filters } from "./Filters";

import { Property } from "../models/Property";
import { SearchResults } from "./SearchResults";

interface IHomePageProps {
  setResults: (results: Property[]) => void;
}

export const HomePage: FC<IHomePageProps> = ({ setResults }) => {
  return (
    <div>
      <div className="homePage">
        <img className="arsLogo" alt="Logo Img" src="Images/ARS-logos.jpeg" />
        <h1>ARS</h1>
      </div>
      <h1 className="awaits">Your new home awaits you</h1>

      <Filters setResults={setResults} />
    </div>
  );
};

// import React, { useEffect, useState } from "react";
// import { getSearchDetails } from "../services/Api";
// import { Filters } from "./Filters";
// // import { PropertySearch } from "./PropertySearch";
// // import { Navigate, useNavigate } from "react-router-dom";
// import { Property } from "../models/Property";
// // import { SavedProperties } from "./SavedProperties";
// import { SearchResults } from "./SearchResults";

// export function HomePage() {
//   const [searchTerm, setSearchTerm] = useState<any>("");
//   const [items, setItems] = useState<Property[]>([]);

//   function setSearch(search: string) {
//     setSearchTerm(search);
//   }

//   return (
//     <div>
//       <div className="homePage">
//         <img className="arsLogo" alt="Logo Img" src="Images/ARS-logos.jpeg" />
//         <h1>ARS</h1>
//       </div>
//       <h1 className="awaits">Your new home awaits you</h1>

//       <PropertySearch
//         onSubmit={(searchTerm) => setSearch(searchTerm)}
//       ></PropertySearch>
//       <Filters
//         onResults={(properties) => {
//           setItems(properties);
//         }}
//         searchTerm={searchTerm}
//       ></Filters>
//       <SearchResults properties={items}></SearchResults>
//     </div>
//   );
// }
