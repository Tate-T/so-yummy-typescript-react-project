import { configureStore } from "@reduxjs/toolkit";
import { paginationReducer } from "./slices/paginationSlice";
import { categoriesApi } from "./apis/categoriesApi";
import { authApi } from "./auth/authOperations";
import { favoriteApi } from "./apis/favoriteApi";
import { authReducer } from "./slices/authSlice";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { ownRecipeApi } from "./apis/myRecipesApi";
import { recipesApi } from "./apis/recipesApi";
import { newRecipeReducer } from "./slices/newRecipe";
import { ownRecipesReducer } from "./slices/ownRecipesSave";
import { ingredientsApi } from "./apis/ingridientsApi";
import { shopingLists } from "./apis/shipingListApi";
const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedNewRecipeReducer = persistReducer(persistConfig, newRecipeReducer);
const persistedOwnRecipesReducer = persistReducer(persistConfig, ownRecipesReducer);

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    user: persistedAuthReducer,
    newRecipe: persistedNewRecipeReducer,
    ownRecipes: persistedOwnRecipesReducer,
    [authApi.reducerPath]: authApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
    [ownRecipeApi.reducerPath]: ownRecipeApi.reducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [shopingLists.reducerPath]: shopingLists.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(categoriesApi.middleware)
      .concat(favoriteApi.middleware)
      .concat(ownRecipeApi.middleware)
      .concat(recipesApi.middleware)
      .concat(ingredientsApi.middleware)
      .concat(shopingLists.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
