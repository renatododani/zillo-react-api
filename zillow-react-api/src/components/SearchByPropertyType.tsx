import React from "react";

export function SearchByStateType(props: {
  onChange: (property: string) => void;
}) {
  const [properties] = React.useState([
    { value: "AK", option: "Alaska", id: 1 },
    { value: "TX", option: "Texas", id: 2 },
    { value: "AL", option: "Alabama", id: 3 },
    { value: "AR", option: "Arkansas", id: 4 },
    { value: "AZ", option: "Arizona", id: 5 },
    { value: "CA", option: "California", id: 6 },
    { value: "CO", option: "Colorado", id: 7 },
    { value: "CT", option: "Connecticut", id: 8 },
    { value: "DC", option: "DistrictofColumbia", id: 9 },
    { value: "DE", option: "Delaware", id: 10 },
    { value: "FL", option: "Florida", id: 11 },
    { value: "GA", option: "Georgia", id: 12 },
    { value: "HI", option: "Hawaii", id: 13 },
    { value: "IA", option: "Iowa", id: 14 },
    { value: "ID", option: "Idaho", id: 15 },
    { value: "IL", option: "Illinois", id: 16 },
    { value: "IN", option: "Indiana", id: 17 },
    { value: "KS", option: "Kansas", id: 18 },
    { value: "KY", option: "Kentucky", id: 19 },
    { value: "LA", option: "Louisiana", id: 20 },
    { value: "MA", option: "Massachusetts", id: 21 },
    { value: "MD", option: "Maryland", id: 22 },
    { value: "ME", option: "Maine", id: 23 },
    { value: "MI", option: "Michigan", id: 24 },
    { value: "MN", option: "Minnesota", id: 25 },
    { value: "MO", option: "Missouri", id: 26 },
    { value: "MS", option: "Mississippi", id: 27 },
    { value: "MT", option: "Montana", id: 28 },
    { value: "NC", option: "NorthCarolina", id: 29 },
    { value: "ND", option: "NorthDakota", id: 30 },
    { value: "NE", option: "Nebraska", id: 31 },
    { value: "NH", option: "NewHampshire", id: 32 },
    { value: "NJ", option: "NewJersey", id: 33 },
    { value: "NM", option: "NewMexico", id: 34 },
    { value: "NV", option: "Nevada", id: 35 },
    { value: "NY", option: "NewYork", id: 36 },
    { value: "OH", option: "Ohio", id: 37 },
    { value: "OK", option: "Oklahoma", id: 38 },
    { value: "OR", option: "Oregon", id: 39 },
    { value: "PA", option: "Pennsylvania", id: 40 },
    { value: "RI", option: "RhodeIsland", id: 41 },
    { value: "SC", option: "SouthCarolina", id: 42 },
    { value: "SD", option: "SouthDakota", id: 43 },
    { value: "TN", option: "Tennessee", id: 44 },
    { value: "TX", option: "Texas", id: 45 },
    { value: "UT", option: "Utah", id: 46 },
    { value: "VA", option: "Virginia", id: 47 },
    { value: "VT", option: "Vermont", id: 48 },
    { value: "WA", option: "Washington", id: 49 },
    { value: "WI", option: "Wisconsin", id: 50 },
    { value: "WV", option: "WestVirginia", id: 51 },
    { value: "WY", option: "Wyoming", id: 52 },
  ]);
  function handleChange(e: any) {
    props.onChange(e.target.value);
  }
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>State</h2>
        </label>
        <select onChange={handleChange}>
          {properties.map((p) => (
            <option key={p.id} value={p.value}>
              {p.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
