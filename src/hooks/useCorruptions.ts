import { useEffect, useState } from "react";
import { useWallet } from "@gimmixorg/use-wallet";
import { useContract } from "../hooks/useContract";
import { useGraph } from "../hooks/useGraph";
import { utils, BigNumber } from "ethers";

const PLACEHOLDER_ACCOUNT = "0xC6c41119Af1e0840357245c66baAf0e21B694D4d";

export const useCorruptions = () => {
  const { account } = useWallet();
  const contract = useContract();
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const graph = useGraph(account ?? PLACEHOLDER_ACCOUNT);
  const [corruptions, setCorruptions] = useState<Corruption[]>([]);
  const corruptionsInWallet = graph.data.wallet?.corruptions;

  useEffect(() => {
    const getCorruptions = async () => {
      const corruptionsWithDetails: Corruption[] = [];

      if (corruptionsInWallet && contract) {
        startLoading();
        for (const corruption of corruptionsInWallet) {
          const tokenId = corruption.id;
          const insight = await contract.insight(tokenId);

          corruptionsWithDetails.push({
            ...corruption,
            insight: Number(insight),
            iterations: decodeTokenKey("CORRUPTION", tokenId),
            phrasePrimary: decodeAndLookup("PHRASE", tokenId),
            phraseSecret: decodeAndLookup("SECRET", tokenId),
            corruptor: decodeAndLookup("CORRUPTOR", tokenId),
            border: decodeAndLookup("BORDER", tokenId),
            checker: decodeAndLookup("CHECKER", tokenId),
            color: decodeAndLookup("BGCOLOR", tokenId),
            background: decodeAndLookup("FGCOLOR", tokenId),
          });
        }
        setCorruptions(corruptionsWithDetails);
        stopLoading();
      }
    };
    getCorruptions();
  }, [corruptionsInWallet, contract]);

  return {
    ...graph,
    corruptions,
    loading: loading || graph.loading,
  };
};

type KEY =
  | "PHRASE"
  | "SECRET"
  | "CORRUPTION"
  | "CORRUPTOR"
  | "FGCOLOR"
  | "BGCOLOR"
  | "BORDER"
  | "CHECKER";

function decodeAndLookup(key: KEY, tokenId: number) {
  const index = decodeTokenKey(key, tokenId);
  const offset = offsetByKey[key];
  return randomStrings[offset + index];
}

// for some reason the SECRET phrase actually uses FGCOLOR key
function decodeTokenKey(key: KEY, tokenId: number) {
  const mod = modByKey[key];
  const keyHack = key === "SECRET" ? "FGCOLOR" : key;
  const bytes = utils.solidityPack(["string", "uint256"], [keyHack, tokenId]);
  const hash = utils.keccak256(bytes);
  return BigNumber.from(hash).mod(mod).toNumber();
}

const modByKey = {
  PHRASE: 10,
  SECRET: 6,
  CORRUPTION: 1024,
  CORRUPTOR: 11,
  FGCOLOR: 6,
  BGCOLOR: 6,
  BORDER: 11,
  CHECKER: 7,
};

const offsetByKey = {
  PHRASE: 23,
  SECRET: 27,
  CORRUPTION: 0, // not used
  CORRUPTOR: 0,
  FGCOLOR: 17,
  BGCOLOR: 11,
  BORDER: 0,
  CHECKER: 33,
};

// phrase
// randomStrings[23 + uint256(keccak256(abi.encodePacked("PHRASE", tokenId))) % 10];

// phrase secret
// randomStrings[27 + uint256(keccak256(abi.encodePacked("FGCOLOR", tokenId))) % 6]

// iterations
// uint256 iterations = uint256(keccak256(abi.encodePacked("CORRUPTION", tokenId))) % 1024;

// corruptor
// randParts.corruptor = randomStrings[uint256(keccak256(abi.encodePacked("CORRUPTOR", tokenId))) % 11];

// color
// randomStrings[17 + uint256(keccak256(abi.encodePacked("FGCOLOR", tokenId))) % 6]

// background
// randomStrings[11 + uint256(keccak256(abi.encodePacked("BGCOLOR", tokenId))) % 6]

// border
// randParts.border = randomStrings[uint256(keccak256(abi.encodePacked("BORDER", tokenId))) % 11];

// checker
// randParts.checker = randomStrings[33 + uint256(keccak256(abi.encodePacked("CHECKER", tokenId))) % 7];

// from corruptions metadata contract
const randomStrings = [
  "/",
  "$",
  "|",
  "8",
  "_",
  "?",
  "#",
  "%",
  "^",
  "~",
  ":",

  "#022FB7",
  "#262A36",
  "#A802B7",
  "#3CB702",
  "#B76F02",
  "#B70284",

  "#0D1302",
  "#020A13",
  "#130202",
  "#1A1616",
  "#000000",
  "#040A27",

  "GENERATION",
  "INDIVIDUAL",
  "TECHNOLOGY",
  "EVERYTHING",
  "EVERYWHERE",
  "UNDERWORLD",
  "ILLUMINATI",
  "TEMPTATION",
  "REVELATION",
  "CORRUPTION",

  "|",
  "-",
  "=",
  "+",
  "\\",
  ":",
  "~",
];
