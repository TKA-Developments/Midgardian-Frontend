import { useWeb3React } from "@web3-react/core";
import { BigNumber } from "ethers";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";
import {
  midgardianContract,
  useMidgardianContract,
} from "../../../contract/midgardian";
import { rpcConnector } from "../../../data/source/ethereum-rpc/connector";
import { TokenUI } from "../../../ui/mint/token";
import {
  Resource,
  resourceError,
  resourceLoading,
  resourceSuccess,
} from "../../../util/resource";

export default function Page() {
  const router = useRouter();

  const idRes = useMemo<Resource<BigNumber>>(() => {
    if (!router.isReady) return resourceLoading();

    try {
      const idRoute = router.query.id;
      if (typeof idRoute === "string" && idRoute.match(/^[0-9a-f]+$/i)) {
        return resourceSuccess(BigNumber.from(idRoute));
      }
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        return resourceError(err);
      } else {
        throw err;
      }
    }

    return resourceError(Error("Unreachable"));
  }, [router.isReady]);

  return <TokenUI idRes={idRes} />;
}
