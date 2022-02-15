import React from "react";
import { Filters } from "./Filters";

export function HomePage() {
  return (
    <div>
      <div className="homePage">
        <img className="arsLogo" alt="Logo Img" src="Images/ARS-logos.jpeg" />
        <h1>ARS</h1>
      </div>
      <h1 className="awaits">Your new home awaits you</h1>
      <Filters></Filters>
    </div>
  );
}
