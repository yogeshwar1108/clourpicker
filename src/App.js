import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("#FFF");
  const [font, setfont] = useState("#000");

  const choosecolor = (event) => {
    setColor(event.target.value);
  };
  const choosefontcolor = (event) => {
    setfont(event.target.value);
  };

  return (
    <div className="App" style={{ background: color }}>
      <h1 style={{ color: font }}>colour picker</h1>

      <div className="clour-display" style={{ background: color, color: font }}>
        {color}
      </div>
      <label>
        {" "}
        <b style={{ color: font }}>pick a clour here </b>
      </label>
      <input type="color" value={color} onChange={choosecolor} />
      <b style={{ color: font }}>pick a font-clour here </b>
      <input type="color" value={font} onChange={choosefontcolor} />
    </div>
  );
}
