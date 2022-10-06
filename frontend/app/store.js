import { configureStore } from "@reduxjs/toolkit";
import connexionStatusReducer from "../feature/connexionStatusSlice";
import simpleUserReducer from "../feature/simpleUserData"

export const store = configureStore({
  reducer: {
    isConnected: connexionStatusReducer,
    simpleUser: simpleUserReducer
  },
});
