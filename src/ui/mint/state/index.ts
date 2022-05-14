import { configureStore, Store } from "@reduxjs/toolkit";
import { reducer } from "./reducers";

export const storeMint = configureStore({
  reducer,
});

export type MintAppDispatch = typeof storeMint.dispatch;
export type MintAppState = ReturnType<typeof storeMint.getState>;
