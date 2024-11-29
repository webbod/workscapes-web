import { useState } from "react";
import Grid from "./components/grid";
import Card from "./components/card";
import archetypes from "./data/archetypes";

import themes from "./data/themes";

function App() {

  const [currentThemeIndex, setCurrentThemeIndex] = useState(1);

  const theme = themes
  .filter((theme) => theme.id === currentThemeIndex)[0];

  const handleNextTheme = () => {
    setCurrentThemeIndex((prevIndex) => (prevIndex) % themes.length == 0 ? 1 : prevIndex + 1 );
  };

  const handleSquareClick = (gridId: string, squareId: number, archetype: string) => {
    console.log("Grid ID:", gridId);
    console.log("Square ID:", squareId);
    console.log("Archetype:", archetype);
  };

  const themedArchetypes = archetypes
  .filter((archetype) => archetype.theme === theme.id)
  .sort((a, b) => a.rank - b.rank);

  return (
    <div>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={handleNextTheme}>{theme.id}. Next Theme</button>
      </div>
      <h1>{theme.title}</h1>
      <div>
        {theme.description.map((description) => <p>{description}</p>)}
      </div>
      <Grid id="grid-1" archetypes={themedArchetypes} onSquareClick={handleSquareClick} />

      <div>
        {archetypes.map((archetype) => <span> {archetype.theme}. {archetype.title} </span>)}
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Card front={<div>Impulses & Insights</div>} back={<div><img src="/images/archetypes/inventor.webp"/><div>The Maverick</div></div>} />
        <Card front={<div>Impulses & Insights</div>} back={<div><img src="/images/archetypes/scout.webp"/><div>The Maverick</div></div>} />
        <Card front={<div>Impulses & Insights</div>} back={<div><img src="/images/archetypes/pathfinder.webp"/><div>The Maverick</div></div>} />
      </div>
    </div>
  );
}

export default App;