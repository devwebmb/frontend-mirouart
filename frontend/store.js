import { configureStore } from "@reduxjs/toolkit";
import connexionStatusReducer from "./slices/connexionStatusSlice";
import simpleUserData from "./slices/simpleUserData";

export const store = configureStore({
  reducer: {
    isConnected: connexionStatusReducer,
    simpleUserData: simpleUserData,
  },
});
