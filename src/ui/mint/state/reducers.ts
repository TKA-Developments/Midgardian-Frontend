import { combineReducers } from "@reduxjs/toolkit";
import { applicationReducer } from "./application/reducers";

export const reducer = combineReducers({
  application: applicationReducer,
});
