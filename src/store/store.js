import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authSlice from './authSlice/authSlice'
import counterSlice from './counter/counterSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['user']
}

const rootReducer = combineReducers({
  counter: persistReducer(persistConfig, counterSlice),
  auth: persistReducer(authPersistConfig, authSlice)
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
