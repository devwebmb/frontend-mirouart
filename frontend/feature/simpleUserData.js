import { createSlice } from "@reduxjs/toolkit";

export const simpleUserSlice = createSlice({
  name: "simpleUser",
  initialState: {
    token: null,
    email: null,
    username: null,
    simpleUserId: null,
    profilImgUrl: null,
  },
  reducers: {
    setSimpleUserData: (state, { payload }) => {
      state.email = payload.email;
      state.username = payload.username;
      state.simpleUserId = payload.simpleUserId;
      state.profilImgUrl = payload.profilImgUrl;
    },
    setSimpleUserToken: (state, { payload }) => {
      state.token = payload.token;
    },
    deleteSimleUserData: (state) => {
      state.token = null;
      state.email = null;
      state.username = null;
      state.simpleUserId = null;
      state.profilImgUrl = null;
    },
  },
});

export const { setSimpleUserData, deleteSimleUserData, setSimpleUserToken } =
  simpleUserSlice.actions;
export default simpleUserSlice.reducer;
