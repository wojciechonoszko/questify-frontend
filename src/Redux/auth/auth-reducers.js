import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import authActions from './auth-actions';

const initialState = null;

const user = createReducer(initialState, {
  [authActions.logInSuccess]: (_, { payload }) => payload.user.name,
  [authActions.logOutSuccess]: () => initialState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.name,
});

const token = createReducer(null, {
  [authActions.logInSuccess]: (_, { payload }) => payload.token,
  [authActions.logOutSuccess]: () => null,
});

const isAuthenticated = createReducer(false, {
  [authActions.logInSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logInError]: () => false,
  [authActions.getCurrentUserError]: () => false,
  [authActions.logOutSuccess]: () => false,
});

// const isLoggedIn = createReducer(false, {
//   [authActions.registerRequest]: () => true,
//   [authActions.registerSuccess]: () => false,
//   [authActions.registerError]: () => false,
//   [authActions.logInRequest]: () => true,
//   [authActions.logInSuccess]: () => false,
//   [authActions.logInError]: () => false,
//   [authActions.logOutRequest]: () => true,
//   [authActions.logOutSuccess]: () => false,
//   [authActions.logOutError]: () => false,
//   [authActions.getCurrentUserRequest]: () => true,
//   [authActions.getCurrentUserSuccess]: () => false,
//   [authActions.getCurrentUserError]: () => false,
// });

const isLoggedIn = createReducer(false, {
  [authActions.registerRequest]: () => true,
  [authActions.registerSuccess]: () => false,
  [authActions.registerError]: () => false,
  [authActions.logInRequest]: () => true,
  [authActions.logInSuccess]: () => true,
  [authActions.logInError]: () => false,
  [authActions.logOutRequest]: () => false,
  [authActions.logOutSuccess]: () => false,
  [authActions.logOutError]: () => false,
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuthenticated,
  isLoggedIn,
});
