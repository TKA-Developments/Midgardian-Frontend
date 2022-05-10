import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import {
  midgardianContract,
  useMidgardianContract,
} from "../../../contract/midgardian";
import { providerRPC } from "../../../data/source/ethereum-rpc/provider";
import { Token } from "../../../ui/mint/token";
import {
  resourceError,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";

export default () => {
  const router = useRouter();

  const idRes = useMemo(() => {
    if (!router.isReady) return resourceLoading();

    let idResult = null;

    try {
      const idRoute = router.query.id;
      if (typeof idRoute === "string" && idRoute.match(/^[0-9a-f]+$/i)) {
        idResult = BigNumber.from(idRoute);
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return resourceError(err);
      } else {
        throw err;
      }
    }

    return resourceSuccess(idResult);
  }, [router.isReady]);

  return <Token idRes={idRes} />;
};
