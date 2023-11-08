import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
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
import { carsReducer } from './carsReducer';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  whitelist: ["favoriteCars"],
};

const persistedReducer = persistReducer(persistConfig, carsReducer)

const store = configureStore({
  reducer: {
    carsReducer: persistedReducer,

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // devTools: process.env.NODE_ENV !== 'production'
});

export const persistor = persistStore(store);
export default store;