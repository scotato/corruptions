import { useEffect, useState } from "react";
import { Portal } from "../components/Portal";
import { phrases } from "../components/Glyph";
import { colors } from "../components/Color";

const iterationsMax = 72;
const insightMax = 48;
const corruptorMax = 9;
const phraseMax = 9;
const colorMax = 5;

function UnderworldPage() {
  const [insight, setInsight] = useState(0);
  const [iterations, setIterations] = useState(0);
  const [corruptor, setCorruptor] = useState(0);
  const [phrase, setPhrase] = useState(4);
  const [color, setColor] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const [insightReverse, setInsightReverse] = useState(false);
  const [iterationsReverse, setIterationsReverse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setInsight((prev) => {
        if (prev === insightMax) setInsightReverse(true);
        if (prev === 0) setInsightReverse(false);
        return insightReverse ? prev - 1 : prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [insightReverse]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIterations((prev) => {
        if (prev === iterationsMax) setIterationsReverse(true);
        if (prev === 0) setIterationsReverse(false);
        return iterationsReverse ? prev - 1 : prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [iterationsReverse]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCorruptor((prev) => (prev === corruptorMax ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase((prev) => (prev === phraseMax ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setColor((prev) => (prev === colorMax ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div onClick={() => setShowControls(!showControls)}>
      <Portal
        insight={insight}
        iterations={iterations}
        phrase={phrases[phrase]}
        corruptor={phrases[corruptor]}
        color={colors[color]}
      />
      {showControls && (
        <>
          <input
            type="range"
            min="0"
            max={iterationsMax}
            value={iterations}
            onChange={(e) => setIterations(Number(e.target.value))}
            step="1"
          />
          <input
            type="range"
            min="0"
            max={insightMax}
            value={insight}
            onChange={(e) => setInsight(Number(e.target.value))}
            step="1"
          />
          <input
            type="range"
            min="0"
            max={phraseMax}
            value={phrase}
            onChange={(e) => setPhrase(Number(e.target.value))}
            step="1"
          />
          <input
            type="range"
            min="0"
            max={corruptorMax}
            value={corruptor}
            onChange={(e) => setCorruptor(Number(e.target.value))}
            step="1"
          />
          <input
            type="range"
            min="0"
            max={colorMax}
            value={color}
            onChange={(e) => setColor(Number(e.target.value))}
            step="1"
          />
        </>
      )}
    </div>
  );
}

export default UnderworldPage;
