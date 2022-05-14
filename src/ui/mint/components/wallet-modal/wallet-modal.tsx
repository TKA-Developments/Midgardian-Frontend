import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "../../../../common/components/base/button/Button";
import { SUPPORTED_WALLETS } from "../../../../data/source/ethereum-injected/supported-wallet";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { isMobile } from "react-device-detect";
import { Option } from "./option";
import { injectedConnector } from "../../../../data/source/ethereum-injected/connector";
import { classNames, shortenAddress } from "../../../../util/string";
import {
  useIsModalOpen,
  useToggleWalletModal,
} from "../../state/application/hooks";
import { ApplicationModal } from "../../state/application/actions";

export const WalletModal = () => {
  const { active, account, connector, activate, error, deactivate } =
    useWeb3React();
  const [pendingError, setPendingError] = useState<boolean>();
  const isShowWalletModal = useIsModalOpen(ApplicationModal.Wallet);
  const toggleWalletModal = useToggleWalletModal();

  const tryActivation = useCallback(
    async (
      connector:
        | (() => Promise<AbstractConnector>)
        | AbstractConnector
        | undefined
    ) => {
      let name = "";
      let conn =
        typeof connector === "function" ? await connector() : connector;

      Object.keys(SUPPORTED_WALLETS).map((key) => {
        if (connector === SUPPORTED_WALLETS[key].connector) {
          return (name = SUPPORTED_WALLETS[key].name);
        }
        return true;
      });

      // setPendingWallet({ connector: conn, id }); // set wallet for pending view
      // setWalletView(WALLET_VIEWS.PENDING);

      // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
      if (
        conn instanceof WalletConnectConnector &&
        conn.walletConnectProvider?.wc?.uri
      ) {
        conn.walletConnectProvider = undefined;
      }

      conn &&
        activate(conn, undefined, true)
          .then(() => {
            toggleWalletModal();
          })
          .catch((error) => {
            if (error instanceof UnsupportedChainIdError) {
              console.warn(error);
              // @ts-ignore TYPE NEEDS FIXING
              activate(conn); // a little janky...can't use setError because the connector isn't set
            } else {
              setPendingError(true);
            }
          });
    },
    [activate]
  );

  const walletOptions = useMemo(() => {
    // @ts-ignore TYPE NEEDS FIXING
    const isMetamask =
      global?.window && window.ethereum && window.ethereum.isMetaMask;
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key];

      // check for mobile options
      if (isMobile) {
        // disable portis on mobile for now
        if (option.name === "Portis") {
          return null;
        }

        // @ts-ignore TYPE NEEDS FIXING
        if (!window.web3 && !window.ethereum && option.mobile) {
          return (
            <Option
              onClick={() => tryActivation(option.connector)}
              key={key}
              active={option.connector && option.connector === connector}
              link={option.href}
              header={option.name}
              icon={
                "https://app.sushi.com" + "/images/wallets/" + option.iconName
              }
            />
          );
        }
        return null;
      }

      // overwrite injected when needed
      if (option.connector === injectedConnector) {
        // don't show injected if there's no injected provider
        // @ts-ignore TYPE NEEDS FIXING
        if (!(window.web3 || window.ethereum)) {
          if (option.name === "MetaMask") {
            return (
              <Option
                key={key}
                header={"Install Metamask"}
                link={"https://metamask.io/"}
                icon="https://app.sushi.com/images/wallets/metamask.png"
              />
            );
          } else {
            return null; // dont want to return install twice
          }
        }
        // don't return metamask if injected provider isn't metamask
        else if (option.name === "MetaMask" && !isMetamask) {
          return null;
        }
        // likewise for generic
        else if (option.name === "Injected" && isMetamask) {
          return null;
        }
      }

      // return rest of options
      return (
        !isMobile &&
        !option.mobileOnly && (
          <Option
            onClick={() => {
              option.connector === connector
                ? null
                : !option.href && tryActivation(option.connector);
            }}
            key={key}
            active={option.connector === connector}
            link={option.href}
            header={option.name}
            icon={
              "https://app.sushi.com" + "/images/wallets/" + option.iconName
            }
          />
        )
      );
    });
  }, [connector, tryActivation]);

  let modalContent = null;
  if (active) {
    modalContent = (
      <>
        <h2 className="text-2xl font-bold text-on-background">My Wallet</h2>
        <h4 className="text-md text-on-background">Address: {account}</h4>
        <Option
          header="Logout"
          onClick={() => {
            deactivate();
            toggleWalletModal();
          }}
        />
      </>
    );
  } else {
    modalContent = (
      <>
        <h2 className="text-2xl font-bold text-on-background">
          Connect Wallet
        </h2>
        <h3 className="text-md mb-2 text-on-background">
          Connect with one of our available wallet providers or create a new
          one.
        </h3>
        {walletOptions}
      </>
    );
  }

  return (
    <div>
      <div
        className={classNames(
          `fixed flex justify-center items-center left-0 top-0 right-0 bottom-0
          w-full h-full bg-[rgba(0.0,0.0,0.0,0.8)]`,
          isShowWalletModal ? "" : "hidden"
        )}
        onClick={toggleWalletModal}
      >
        <div
          className="fixed flex flex-col gap-2 rounded-xl border-2 border-on-background bg-background px-4 py-4 w-full md:w-[35rem]"
          onClick={(e) => e.stopPropagation()}
        >
          {modalContent}
        </div>
      </div>
      <Button
        className="px-4 bg-background"
        iconUrl="/img/icon/metamask.png"
        onClick={toggleWalletModal}
      >
        {active ? shortenAddress(account as string) : "Connect to Wallet"}
      </Button>
    </div>
  );
};

export default WalletModal;
