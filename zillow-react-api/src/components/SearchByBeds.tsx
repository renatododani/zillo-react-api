import React from "react";

export function SearchByBeds(props: { onChange: (bed: number) => void }) {
  const [beds] = React.useState([
    { option: "Any", value: 0, id: 1 },
    { option: "1+", value: 1, id: 2 },
    { option: "2+", value: 2, id: 3 },
    { option: "3+", value: 3, id: 4 },
    { option: "4+", value: 4, id: 5 },
  ]);
  function handleChange(e: any) {
    props.onChange(e.target.value);
  }
  return (
    <div className="optionsDrop">
      <form>
        <label>
          <h2>Beds</h2>
        </label>
        <select onChange={handleChange}>
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
