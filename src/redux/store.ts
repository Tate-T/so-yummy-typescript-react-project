import { configureStore } from "@reduxjs/toolkit";
import { paginationReducer } from "./slices/paginationSlice";
import { categoriesApi } from "./apis/categoriesApi";
import { authApi } from "./auth/authOperations";
import { favoriteApi } from "./apis/favoriteApi";
import { authReducer } from "./slices/authSlice";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { ownRecipeApi } from "./apis/myRecipesApi";


const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    user: persistedAuthReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [ownRecipeApi.reducerPath]: ownRecipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(authApi.middleware).concat(categoriesApi.middleware).concat(favoriteApi.middleware).concat(ownRecipeApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store)