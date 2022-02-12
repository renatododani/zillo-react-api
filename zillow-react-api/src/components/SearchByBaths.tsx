import React from "react";

export function SearchByBaths(props: { onSelect: (bath: number) => void }) {
  const [baths] = React.useState([
    { label: 'Bathrooms', value: 1 },
    { label: '1+', value: 1 },
    { label: '2+', value: 2 },
    { label: '3+', value: 3 },
    { label: '4+', value: 4 }
  ])
  return (
    <div>
      <select >
        {baths.map(b => (
          <option value={b.value} onClick={() => props.onSelect(b.value)}>{b.label}</option>
        ))}
      </select>
    </div>
  );
}
