import { useEffect } from "react";
import styled from "styled-components";
import { useWallet } from "@gimmixorg/use-wallet";
import { useContract } from "../hooks/useContract";
import { useWindow } from "../hooks/useWindow";
import { useGraph } from "../hooks/useGraph";

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
  const { account } = useWallet();
  const contract = useContract();
  const { square } = useWindow();
  const graph = useGraph(account ?? "");

  useEffect(() => {
    const getCorruptions = async () => {
      const corruptions = graph.data.wallet?.corruptions;
      if (corruptions && contract) {
        for (const corruption of corruptions) {
          const tokenBase64 = await contract.tokenURI(corruption.id);
          const tokenDecoded = decode(tokenBase64, "json");
          const token = JSON.parse(tokenDecoded);
          const svgDecoded = decode(token.image, "svg");
          console.log("asd", svgDecoded);
        }
      }
    };
    getCorruptions();
  }, [graph.data.wallet?.corruptions, contract]);

  return (
    <SVG
      viewBox={`0 0 ${square} ${square}`}
      xmlns="http://www.w3.org/2000/svg"
    ></SVG>
  );
};

const SVG = styled.svg`
  display: block;
  margin: 0 auto;
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
