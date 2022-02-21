import React from "react";

export function SearchByPrice(props: { onChange: (price: number) => void }) {
  const [prices] = React.useState([
    { option: "Any", value: 0, id: 1 },
    { option: "0-150K", value: 150000, id: 2 },
    { option: "150K-300K", value: 300000, id: 3 },
    { option: "301K-500K", value: 500000, id: 4 },
    { option: "500K-10M", value: 10000000, id: 5 },
  ]);
  function handleChange(e: any) {
    props.onChange(e.target.value);
  }
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Price</h2>
        </label>
        <select onChange={handleChange}>
          {prices.map((p) => (
            <option key={p.id} value={p.value}>
              {p.option}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
