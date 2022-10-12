import { createSlice } from "@reduxjs/toolkit";

export const annoncesDataSlice = createSlice({
  name: "annoncesData",
  initialState: {
    annonces: null,
  },
  reducers: {
    setAnnoncesData: (state, { payload }) => {
      state.annonces = payload;
    },
  },
});

export const { setAnnoncesData } = annoncesDataSlice.actions;
export default annoncesDataSlice.reducer;
