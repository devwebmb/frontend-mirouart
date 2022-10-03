import { createSlice } from "@reduxjs/toolkit";

export const simpleUserSlice = createSlice({
  name: "simpleUSer",
  initialState: {
    token: null,
    email: null,
    username: null,
    simpleUserId: null,
  },
  reducers: {
    setSimpleUserData: (state, { payload }) => {
      state.token = payload.token;
      state.email = payload.email;
      state.username = payload.username;
      state.simpleUserId = payload.simpleUserId;
    },
    deleteSimleUserData: (state) => {
      state.token = null;
      state.email = null;
      state.username = null;
      state.simpleUserId = null;
    },
  },
});

export const { setSimpleUserData, deleteSimleUserData } = simpleUserSlice.actions;
export default simpleUserSlice.reducer;
