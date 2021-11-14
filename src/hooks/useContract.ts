import { useMemo } from "react";
import { Corruptions__factory } from "../corruptions-sdk";
import { useWallet } from "@gimmixorg/use-wallet";

export const useContract = () => {
  const { provider } = useWallet();

  const contract = useMemo(
    () =>
      provider
        ? Corruptions__factory.connect(
            "0x5BDf397bB2912859Dbd8011F320a222f79A28d2E",
            provider.getSigner()
          )
        : null,
    [provider]
  );

  return contract;
};
