import { providers } from "ethers";
import { AbstractConnector } from "@web3-react/abstract-connector";

export const getProvider = (
  provider: providers.ExternalProvider | providers.JsonRpcFetchFunc,
  connector?: AbstractConnector | undefined
) => new providers.Web3Provider(provider);
