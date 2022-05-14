import { AbstractConnector } from "@web3-react/abstract-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { injectedConnector } from "../ethereum-injected/connector";

export interface WalletInfo {
  connector?: (() => Promise<AbstractConnector>) | AbstractConnector;
  name: string;
  iconName: string;
  description: string;
  href?: string;
  color: string;
  primary?: true;
  mobile?: true;
  mobileOnly?: true;
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injectedConnector,
    name: "Injected",
    iconName: "injected.svg",
    description: "Injected web3 provider.",
    color: "#010101",
    primary: true,
  },
  METAMASK: {
    connector: injectedConnector,
    name: "MetaMask",
    iconName: "metamask.png",
    description: "Easy-to-use browser extension.",
    color: "#E8831D",
  },
};
