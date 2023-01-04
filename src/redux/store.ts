import { configureStore } from "@reduxjs/toolkit";
import TasksSlice from "./slices/TasksSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, TasksSlice);
export const store = configureStore({
  reducer: {
    tasks: persistedReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
