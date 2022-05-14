import { useWeb3React } from "@web3-react/core";
import { Button } from "../../../common/components/base/button/Button";
import {
  BaseNavbar,
  NavbarLinkType,
} from "../../../common/components/base/Navbar";
import { NAME } from "../../../const";
import dynamic from "next/dynamic";

const WalletModal = dynamic(() => import("./wallet-modal/wallet-modal"), {
  ssr: false,
});

export const Navbar = () => {
  return (
    <BaseNavbar
      logo={{
        url: "/img/Logo.svg",
      }}
      name={NAME}
      links={[
        {
          text: "Home",
          type: NavbarLinkType.Href,
          destination: "/",
        },
        {
          text: "My Collection",
          type: NavbarLinkType.Href,
          destination: "/my-collection",
        },
      ]}
      rightComponent={WalletModal}
    />
  );
};
