import React from "react";

export function SearchByPrice(props: { onSelect: (price: number) => void }) {

  const [prices] = React.useState([
    { label: 'Select Price', value: 0 },
    { label: '0-150K', value: 150000 },
    { label: '150K-300K', value: 300000 },
    { label: '301K-500K', value: 500000 },
    { label: '500K-10M', value: 10000000 }
  ])
  return (
    <div>
      <select >
        {prices.map(p => (
          <option value={p.value} onClick={() => props.onSelect(p.value)}>{p.label}</option>
        ))}
      </select>
    </div>
  );
}
