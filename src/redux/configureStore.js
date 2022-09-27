import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

import createUserSlice from "./user/createUserSlice";
import taskAll from "./task/createTaskSlice";

const userPersistConfig = {
    key: "user",
    storage,
    whitelist: ["token"],
};

const rootReducer = combineReducers({
    task: taskAll,
    user: persistReducer(userPersistConfig, createUserSlice),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serialzableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);




