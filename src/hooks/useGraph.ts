import { useState, useEffect } from "react";
import { request, gql } from "graphql-request";

const SUBGRAPH = "https://api.thegraph.com/subgraphs/name/shahruz/corruptions";

const walletQuery = gql`
  query Wallet($id: String!) {
    wallet(id: $id) {
      id
      corruptions {
        id
        transferCount
        savedXP
        timeToMint
        lastTransferredBlock
      }
    }
  }
`;

type WalletQuery = {
  data: {
    wallet?: Wallet;
  };
  loading: boolean;
  error?: string;
};

export const useGraph = (address: string): WalletQuery => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  const clearError = () => setError("");

  useEffect(() => {
    if (!address) {
      setData({});
      return setError("No address provided");
    }

    if (address.length !== 42) {
      setData({});
      return setError("Invalid address");
    }

    startLoading();
    request(SUBGRAPH, walletQuery, {
      id: address.toLowerCase(),
    })
      .then(setData)
      .then(stopLoading)
      .then(clearError)
      .catch((err) => {
        setError(err.message);
        stopLoading();
      });
  }, [address]);

  return { data, loading, error };
};
