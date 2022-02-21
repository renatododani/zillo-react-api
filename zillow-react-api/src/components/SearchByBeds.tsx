import React from "react";

export function SearchByBeds(props: { onSelect: (bed: number) => void }) {
  const [beds] = React.useState([
    { option: "Any", value: 0, id: 0 },
    { option: "1+", value: 1, id: 1 },
    { option: "2+", value: 2, id: 2 },
    { option: "3+", value: 3, id: 3 },
    { option: "4+", value: 4, id: 4 },
  ]);
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Beds</h2>
        </label>
        <select
          onChange={(e) => {
            props.onSelect(Number(e.target.value));
          }}
        >
          {beds.map((b) => (
            <option key={b.id} value={b.value}>
              {b.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
