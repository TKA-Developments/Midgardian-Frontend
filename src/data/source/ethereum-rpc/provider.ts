import { providers } from "ethers";
import { ETHEREUM_RPC_ENDPOINT } from "../../../const";

export const providerRPC = new providers.JsonRpcProvider(
  ETHEREUM_RPC_ENDPOINT,
  4
);
export const signerRPC = providerRPC.getSigner();
