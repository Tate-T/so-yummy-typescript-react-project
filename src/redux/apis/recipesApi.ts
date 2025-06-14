import { RecipeItem, Recipes, SearchParams } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getRecipe: builder.query<RecipeItem, string>({
      query: (id): string => `/recipes/id/${id}`,
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