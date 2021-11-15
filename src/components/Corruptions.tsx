import { useEffect, useState } from "react";
import styled from "styled-components";
import { useWallet } from "@gimmixorg/use-wallet";
import { useContract } from "../hooks/useContract";
import { useGraph } from "../hooks/useGraph";
import { Character, CharacterCode } from "./Character";

type Base64File = "json" | "svg";

const colorSwap = {
  "#262A36": "#838383",
  "#022FB7": "#2E82FF",
  "#A802B7": "#C13CFF",
  "#3CB702": "#00DC82",
  "#B76F02": "#F8B73E",
  "#B70284": "#FF44B7",
};

const base64Header = {
  json: "data:application/json;base64,",
  svg: "data:image/svg+xml;base64,",
};

const decode = (base: string, key: Base64File) => {
  const base64 = base.replace(base64Header[key], "");
  return atob(base64);
};

export const Corruptions = () => {
  const { account } = useWallet();
  const contract = useContract();
  const graph = useGraph(
    account ?? "0xC6c41119Af1e0840357245c66baAf0e21B694D4d"
  );
  const [images, setImages] = useState<string[][][]>([]);
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    const getCorruptions = async () => {
      let temp: string[][][] = [];
      let tempC: string[] = [];
      const corruptions = graph.data.wallet?.corruptions;

      if (corruptions && contract) {
        for (const corruption of corruptions) {
          const tokenBase64 = await contract.tokenURI(corruption.id);
          const tokenDecoded = decode(tokenBase64, "json");
          const token = JSON.parse(tokenDecoded);
          const svgDecoded = decode(token.image, "svg");
          const parts = svgDecoded.split('class="base">');
          parts.shift();
          const rows = parts.map((part) => part.substring(0, 31).split(""));
          const color = svgDecoded.split(".base { fill: ")[1].substring(0, 7);
          temp.push(rows);
          tempC.push(color);
        }
      }
      setImages(temp);
      setColors(tempC);
    };
    getCorruptions();
  }, [graph.data.wallet?.corruptions, contract]);

  return graph.loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "calc(100% - 64px - 64px)",
        opacity: 0.5,
      }}
    >
      <p style={{ color: "white" }}>loading</p>
    </div>
  ) : (
    <SVG
      viewBox={`0 0 ${31 * 5} ${31 * 5}`}
      xmlns="http://www.w3.org/2000/svg"
      // @ts-ignore
      fill={colorSwap[colors[0]]}
    >
      {images[0]?.map((row, indexRow) =>
        row.map((char, indexChar) => {
          return (
            <g
              transform={`translate(${indexChar * 5} ${indexRow * 5})`}
              key={`${indexChar},${indexRow}`}
            >
              <Character char={char as CharacterCode} />
            </g>
          );
        })
      )}
    </SVG>
  );
};

const SVG = styled.svg`
  display: block;
  margin: 0 auto;

  rect {
    fill: ${(props) => props.fill};
  }
`;
