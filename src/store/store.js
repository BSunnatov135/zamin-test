import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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
import authSlice from "./authSlice/authSlice";
import counterSlice from "./counter/counterSlice";
import scrollFunctionSlice from "./scrollFunctionSlice/scrollFunctionSlice";
import userDataSlice from "./authSlice/userData";
import userDetailsSlice from "./authSlice/userData";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user"],
};

const userDataPersistConfig = {
  key: "userDataZamin",
  version: 1,
  storage,
};

const userDetailsPersistConfig = {
  key: "userDetailsZamin",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  counter: persistReducer(persistConfig, counterSlice),
  auth: persistReducer(authPersistConfig, authSlice),
  userAuthData: persistReducer(userDataPersistConfig, userDataSlice),
  userAuthDetails: persistReducer(userDetailsPersistConfig, userDetailsSlice),
  scrollRef: scrollFunctionSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
