import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { injectedConnector } from "../data/source/ethereum-injected/connector";
import { isMobile } from "react-device-detect";

export const useEagerConnect = () => {
  const { activate, active } = useWeb3React(); // specifically using useWeb3ReactCore because of what this hook does
  const [tried, setTried] = useState(false);

  useEffect(() => {
    injectedConnector.isAuthorized().then((isAuthorized) => {
      if (isAuthorized) {
        activate(injectedConnector, undefined, true)
          // .then(() => window.ethereum.removeAllListeners(['networkChanged']))
          .catch((err) => {
            console.error(err);
            setTried(true);
          });
        // @ts-ignore TYPE NEEDS FIXING
        window.ethereum.removeAllListeners(["networkChanged"]);
      } else {
        // @ts-ignore TYPE NEEDS FIXING
        if (isMobile && window.ethereum) {
          activate(injectedConnector, undefined, true)
            // .then(() => window.ethereum.removeAllListeners(['networkChanged']))
            .catch(() => {
              setTried(true);
            });
          // @ts-ignore TYPE NEEDS FIXING
          window.ethereum.removeAllListeners(["networkChanged"]);
        } else {
          setTried(true);
        }
      }
    });
  }, [activate]); // intentionally only running on mount (make sure it's only mounted once :))

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (active) {
      setTried(true);
    }
  }, [active]);

  return tried;
};
