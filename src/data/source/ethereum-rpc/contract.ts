import { Contract, ContractInterface, providers, Signer } from "ethers";

export const getContract = (
  provider: providers.Provider | Signer,
  address: string,
  abi: ContractInterface
) => new Contract(address, abi, provider);
