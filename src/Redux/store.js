import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cardsReducers from './cards/cardsReducers';
import authReducer from './auth/auth-reducers';
import notifReducer from './notifReducers';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    cards: cardsReducers,
    auth: persistReducer(authPersistConfig, authReducer),
    notification: notifReducer,
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

const Store = { store, persistor };
export default Store;
