import { useMemo } from "react";
import { providers, Signer } from "ethers";
import { SMARTCONTRACT_ADDRESS as SMART_CONTRACT_ADDRESS } from "../const";
import { getContract } from "../data/source/ethereum-rpc/contract";
import contractABI from "./abi/midgardian.json";

export const address = SMART_CONTRACT_ADDRESS;

export const midgardianContract = (provider: providers.Provider | Signer) =>
  getContract(provider, address, contractABI);

export const useMidgardianContract = (provider: providers.Provider | Signer) =>
  useMemo(() => midgardianContract(provider), [provider]);
