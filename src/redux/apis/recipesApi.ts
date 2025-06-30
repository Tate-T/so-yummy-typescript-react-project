import { CategoriesMainResponse, RecipeItem, Recipes, SearchParams } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { RootState } from "../store";
import { selectMyRecipsById } from "../slices/ownRecipesSave";

const baseQueryWithStorage: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);
  if (result.error && result.error.status === 404) {
    // api.getState("ownRecipes").filter((recipe) => recipe._id === args.)
    const state = api.getState() as RootState;
    return { data: selectMyRecipsById(state, (args as string).split("/")[3]) };
  }
  return result;
};

export const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: baseQueryWithStorage,
  endpoints: (builder) => ({
    getRecipe: builder.query<RecipeItem, string>({
      query: (id): string => `/recipes/id/${id}`,
    }),
    getMainRecipes: builder.query<CategoriesMainResponse, void>({
      query: (): string => `/recipes/main-page`,
    }),
    getRandomRecipes: builder.query<Recipes, { page: number; limit: number }>({
      query: ({ page, limit } = { page: 1, limit: 12 }): string =>
        `/recipes?page=${page}&limit=${limit}`,
    }),
    searchRecipes: builder.query<Recipes, { p: SearchParams; q: string }>({
      query: ({ p, q }): string => `/recipes/${p}/${q}`,
    }),
    getPopularRecipes: builder.query<Recipes, void>({
      query: (): string => `/recipes?page=1&limit=4&sort=popular`,
    }),
  }),
});

export const useGetRecipe = recipesApi.endpoints.getRecipe.useQuery;
export const useSearchRecipes = recipesApi.endpoints.searchRecipes.useQuery;
export const useGetRandomRecipes = recipesApi.endpoints.getRandomRecipes.useQuery;
export const useGetPopularRecipes = recipesApi.endpoints.getPopularRecipes.useQuery;
export const useGetMainRecipes = recipesApi.endpoints.getMainRecipes.useQuery;
