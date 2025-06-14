import { Recipes } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const recipesApi = createApi({
  reducerPath: "recipes",
  baseQuery: baseQueryWithAuth,
  tagTypes: ['recipes'],
  endpoints: (builder) => ({
    getPopularRecipes: builder.query<Recipes, void>({
      query: () => `recipes/?limit=4&sort=popular`,
      providesTags: [{ type: 'recipes', id: 'LIST' }]
    }),
  }),
});

export const useGetPopularRecipes = recipesApi.endpoints.getPopularRecipes.useQuery;