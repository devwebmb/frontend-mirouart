import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: true};

export const connexionStatusSlice = createSlice({
  name: "isConnected",
  initialState,
  reducers: {
    connexion: (state) => {
      state.value = true;
    },
    deconnexion: (state) => {
      state.value = false;
      localStorage.removeItem('token-mirouart')
      localStorage.removeItem('simpleUserUsername-mirouart')
      localStorage.removeItem('simpleUserEmail-mirouart')
      localStorage.removeItem('simpleUserId-mirouart')
    },
    changeStatus: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { connexion, deconnexion, changeStatus } =
  connexionStatusSlice.actions;

export default connexionStatusSlice.reducer;
