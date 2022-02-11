import ReactDOM from "react-dom";
import React from "react";
import Dropdown from "react-dropdown";
import { Option } from "react-dropdown";
// import { Dropdown, Option } from "react-dropdown";
export function HomePage() {
  return (
    <div>
      <label></label>
      <select name="selectList" id="selectList">
        <option value="option 1">Option 1</option> 
        <option value="option 2">Option 2</option>
      </select>

      {/* <Dropdown
        formLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="/"
      >
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown> */}
    </div>
  );
}
