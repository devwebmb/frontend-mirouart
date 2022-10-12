import { configureStore } from "@reduxjs/toolkit";
import connexionStatusReducer from "../feature/connexionStatusSlice";
import simpleUserReducer from "../feature/simpleUserData";
import annoncesReducer from "../feature/announcementsSlice"

export const store = configureStore({
  reducer: {
    isConnected: connexionStatusReducer,
    simpleUser: simpleUserReducer,
    annoncesData: annoncesReducer
  },
});
