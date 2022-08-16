import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "1",
  email: "",
  username: "",
  token: "",
};

export const simpleUserData = createSlice({
  name: "simpleUserChangeData",
  initialState,
  reducers: {
    simpleUserId: (state) => {
      console.log("test");
    },
    changeSimpleUserData: (state, action) => {
      state.value += acion.payload;
    },
  },
});

export const { simpleUserId, changeSimpleUserData } = simpleUserData.actions;

export default simpleUserData.reducer;
