import { useMemo } from "react";
import { Corruptions__factory } from "../corruptions-sdk";
import { useWallet } from "@gimmixorg/use-wallet";
import { Web3Provider } from "@ethersproject/providers";

export const useContract = () => {
  const { provider } = useWallet();

  const contract = useMemo(
    () =>
      provider
        ? Corruptions__factory.connect(
            "0x5BDf397bB2912859Dbd8011F320a222f79A28d2E",
            provider.getSigner()
          )
        : Corruptions__factory.connect(
            "0x5BDf397bB2912859Dbd8011F320a222f79A28d2E",
            // @ts-ignore
            new Web3Provider(web3.currentProvider)
          ),
    [provider]
  );

  return contract;
};
