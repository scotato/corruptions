import { useState } from "react";
import { Portal } from "../components/Portal";
import { phrases } from "../components/Glyph";

function UnderworldPage() {
  const [iterations, setIterations] = useState(0);
  const [phrase, setPhrase] = useState(0);

  return (
    <>
      <Portal iterations={iterations} corruptor={phrases[phrase]} />
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
    </>
  );
}

export default UnderworldPage;
