import { createSlice } from '@reduxjs/toolkit';

import {
  userRegistration,
  userLogin,
  userLogout,
  userRefresh,
  userResetPassword,
  userChangePassword,
} from './operation';

const initialState = {
  userInfo: {
    name: null,
    email: null,
    isActivated: false,
    isLoggedIn: false,
  },
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [userRegistration.fulfilled]: (state, action) => action.payload.user,

    [userRegistration.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },

    [userLogin.julfilled]: (state, action) => {
      state.userInfo = action.payload.user;
      state.userInfo.isLoggedIn = true;
      state.token = action.payload.accessToken;
    },

    [userLogin.rejected]: (state, action) => {
      state.error = {
        message: action.payload.response.data.message,
      };
    },

    [userLogout.fullfilled]: (state, action) => initialState,

    [userLogout.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },

    [userRefresh.fulfilled]: (state, action) => {
      state.userInfo = action.payload.user;
      state.userInfo.isLoggedIn = action.payload.user ? true : false;
      state.token = action.payload.accessToken;
    },

    [userRefresh.rejected]: (state, action) => {
      state.error = {
        atatus: action.payload.status,
        message: action.payload.response.data.message,
      };
    },

    [userResetPassword.fulfilled]: (state, action) => {
      state.error = '';
    },

    [userResetPassword.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },

    [userChangePassword.fulfilled]: (state, action) => {
      state.error = '';
    },

    [userChangePassword.rejected]: (state, action) => {
      state.error = {
        status: action.payload.status,
        message: action.payload.response.data.message,
      };
    },
  },
});

export default userSlice.reducer;
