import { HTMLAttributes, ReactNode } from "react";
import { useEagerConnect } from "../../hooks/useEagerConnect";
import { Provider as ReduxProvider } from "react-redux";
import { storeMint } from "./state";
import { Navbar } from "./components/navbar";

export type MintProps = {
  children: ReactNode;
};

export const Mint = ({ children }: MintProps) => {
  const eagerConnect = useEagerConnect();
  return (
    <ReduxProvider store={storeMint}>
      <Navbar />
      {children}
    </ReduxProvider>
  );
};
