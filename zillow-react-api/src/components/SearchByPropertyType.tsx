import React from "react";

export function SearchByPropertyType(props: { onSelect: (property: string) => void }) {
  const [properties] = React.useState([
    { label: 'Home Type', value: '' },
    { label: 'House', value: 'House' },
    { label: 'Condo', value: 'Condo' },
    { label: 'Apartment', value: 'Apartment' },
    { label: 'Lots/Land', value: 'Lot' }
  ])
  return (
    <div>
      <select >
        {properties.map(p => (
          <option value={p.value} onClick={() => props.onSelect(p.value)}>{p.label}</option>
        ))}
      </select>
    </div>
  );
}
