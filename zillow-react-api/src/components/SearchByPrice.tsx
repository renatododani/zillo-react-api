import React from "react";

export function SearchByPrice(props: { onSelect: (price: number) => void }) {
  const [prices] = React.useState([
    { option: "Any", value: 0 },
    { option: "0-150K", value: 150000 },
    { option: "150K-300K", value: 300000 },
    { option: "301K-500K", value: 500000 },
    { option: "500K-10M", value: 10000000 },
  ]);
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Price</h2>
        </label>
        <select>
          {prices.map((p) => (
            <option value={p.value} onClick={() => props.onSelect(p.value)}>
              {p.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
