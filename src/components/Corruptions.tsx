import { useEffect, useState } from "react";
import styled from "styled-components";
import { useWallet } from "@gimmixorg/use-wallet";
import { useContract } from "../hooks/useContract";
// import { useWindow } from "../hooks/useWindow";
import { useGraph } from "../hooks/useGraph";
import { Character, CharacterCode } from "./Character";

type Base64File = "json" | "svg";

const base64Header = {
  json: "data:application/json;base64,",
  svg: "data:image/svg+xml;base64,",
};

const decode = (base: string, key: Base64File) => {
  const base64 = base.replace(base64Header[key], "");
  return atob(base64);
};

export const Corruptions = () => {
  // const { square } = useWindow();
  const { account } = useWallet();
  const contract = useContract();
  const graph = useGraph(account ?? "");
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

  return (
    <SVG
      // viewBox={`0 0 ${square} ${square}`}
      viewBox={`0 0 ${31 * 5} ${31 * 5}`}
      xmlns="http://www.w3.org/2000/svg"
      fill={colors[0]}
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

// const Background = styled.rect`
//   fill: ${(props) => props.theme.grayscale[15]};
// `;

// const Pixel = styled.rect<{ isOn: boolean }>`
//   cursor: pointer;
//   will-change: fill;
//   transition: 100ms ease-in-out fill;
//   fill: ${(props) => props.theme.grayscale[props.isOn ? 25 : 75]};

//   &:hover {
//     fill: ${(props) => props.theme.grayscale[props.isOn ? 35 : 65]};
//   }
// `;
