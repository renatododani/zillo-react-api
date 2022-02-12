import React from "react";

export function SearchByBeds(props: { onSelect: (bed: number) => void }) {
  const [beds] = React.useState([
    { label: 'Beds', value: 0, id: 0 },
    { label: '1+', value: 1, id: 1 },
    { label: '2+', value: 2, id: 2 },
    { label: '3+', value: 3, id: 3 },
    { label: '4+', value: 4, id: 4 }
  ])
  return (
    <div>
      <select >
        {beds.map(b => (
          <option key={b.id} value={b.value} onClick={() => props.onSelect(b.value)}>{b.label}</option>
        ))}
      </select>
    </div>
  );
}
