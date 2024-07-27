import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, userReducer } from "./reducers";

// Combine reducers into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

// Configuration for Redux Persist
const persistConfig = {
  key: "root", // Key for the persisted state
  storage, // Storage mechanism (localStorage by default)
  whitelist: ["auth","user",], // Reducers to persist
};

// Wrap the root reducer with Redux Persist
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persisted reducer
const appStore = configureStore({
  reducer: persistedReducer,
});

// Define the type of the root state
export type RootState = ReturnType<typeof appStore.getState>;
// Define the type of the dispatch function
export type AppDispatch = typeof appStore.dispatch;

// Export the configured store
export { appStore };

// Create a Redux persistor to manage persisted store state
export const persistor = persistStore(appStore);
