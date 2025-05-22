/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import MMKVUtil from "@/util/MMKVUtil";

// configure store with middlewear and reducers
let middleware: any = [];

middleware = [logger];

// const isRemember = MMKVUtil.getBoolean("rememberMe");

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

// console.log("isRemember", isRemember);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([...middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const persistor = persistStore(store);

// Clear cache if isRemember is false
// if (!isRemember) {
//   persistor.purge().then(() => console.log("Persisted state cleared"));
// }
