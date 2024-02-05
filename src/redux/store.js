//store.js
import { configureStore } from "@reduxjs/toolkit";
import {filterReducer} from './filterSlice'
import { contactReduser } from "./contactSlice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
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

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contact: contactReduser,
    auth: persistReducer(authPersistConfig, authReducer),
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});
export const persistor = persistStore(store)