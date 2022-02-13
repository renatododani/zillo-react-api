import React from "react";

export function SearchByPropertyType(props: {
  onSelect: (property: string) => void;
}) {
  const [properties] = React.useState([
    { option: "Any", value: "" },
    { option: "House", value: "House" },
    { option: "Condo", value: "Condo" },
    { option: "Apartment", value: "Apartment" },
    { option: "Lots/Land", value: "Lot" },
  ]);
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Property</h2>
        </label>
        <select>
          {properties.map((p) => (
            <option value={p.value} onClick={() => props.onSelect(p.value)}>
              {p.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
