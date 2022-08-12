import { configureStore } from "@reduxjs/toolkit";
import connexionStatusReducer from "./slices/connexionStatusSlice";

export const store = configureStore({
  reducer: {
    isConnected: connexionStatusReducer,
  },
});
