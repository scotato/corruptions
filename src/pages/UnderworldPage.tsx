import { useState } from "react";
import { Portal } from "../components/Portal";
import { phrases } from "../components/Glyph";
import { colors } from "../components/Color";

function UnderworldPage() {
  const [iterations, setIterations] = useState(0);
  const [corruptor, setCorruptor] = useState(0);
  const [phrase, setPhrase] = useState(0);
  const [color, setColor] = useState(0);

  return (
    <>
      <Portal
        iterations={iterations}
        phrase={phrases[phrase]}
        corruptor={phrases[corruptor]}
        color={colors[color]}
      />
      <input
        type="range"
        min="0"
        max="72"
        value={iterations}
        onChange={(e) => setIterations(Number(e.target.value))}
        step="1"
      />
      <input
        type="range"
        min="0"
        max="9"
        value={phrase}
        onChange={(e) => setPhrase(Number(e.target.value))}
        step="1"
      />
      <input
        type="range"
        min="0"
        max="9"
        value={corruptor}
        onChange={(e) => setCorruptor(Number(e.target.value))}
        step="1"
      />
      <input
        type="range"
        min="0"
        max="5"
        value={color}
        onChange={(e) => setColor(Number(e.target.value))}
        step="1"
      />
    </>
  );
}

export default UnderworldPage;
