import { delRecipe } from "@/entities/OwnRecipe.type";
import { Recipes } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ownRecipeApi = createApi({
  reducerPath: "ownRecipe",
  baseQuery: baseQueryWithAuth,
  tagTypes: ['OwnRecipe'],
  endpoints: (builder) => ({
    getOwnRecipes: builder.query<Recipes, number>({
      query: (page): string => `own-recipes/?limit=4&page=${page}`,
      providesTags: [{ type: 'OwnRecipe', id: 'LIST' }]
    }),
    delOwnRecipe: builder.mutation<delRecipe, string>({
      query: (id) => ({
        url: `own-recipes/id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'OwnRecipe', id: 'LIST' }],
    }),
  }),
});

export const useGetOwnRecipes = ownRecipeApi.endpoints.getOwnRecipes.useQuery;
export const useDelOwnRecipe = ownRecipeApi.endpoints.delOwnRecipe.useMutation;