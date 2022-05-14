import { createReducer } from "@reduxjs/toolkit";
import { ApplicationModal, setOpenModal } from "./actions";

export type ApplicationState = {
  readonly openedModal: ApplicationModal | null;
};

export const initialState: ApplicationState = {
  openedModal: null,
};

export const applicationReducer = createReducer(initialState, (builder) =>
  builder.addCase(setOpenModal, (state, action) => {
    state.openedModal = action.payload;
  })
);
