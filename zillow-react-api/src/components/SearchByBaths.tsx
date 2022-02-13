import React from "react";

export function SearchByBaths(props: { onSelect: (bath: number) => void }) {
  const [baths] = React.useState([
    { option: "Any", value: 1 },
    { option: "1+", value: 1 },
    { option: "2+", value: 2 },
    { option: "3+", value: 3 },
    { option: "4+", value: 4 },
  ]);
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Baths</h2>
        </label>
        <select>
          {baths.map((b) => (
            <option value={b.value} onClick={() => props.onSelect(b.value)}>
              {b.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
