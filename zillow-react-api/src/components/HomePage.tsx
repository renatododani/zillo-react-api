import ReactDOM from "react-dom";
import React from "react";
import { Dropdown } from "./Dropdown";

export function HomePage() {
  return (
    <div>
      <div className="homePage">
        <img className="arsLogo" src="Images/ARS-logos.jpeg" />
        <h1>ARS</h1>
      </div>
      <h1 className="awaits">Your new home awaits you</h1>
    </div>
  );
}
