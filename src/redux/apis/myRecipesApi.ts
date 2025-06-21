import { DelRecipe, OwnRecipe, PostRecipe } from "@/entities/OwnRecipe.type";
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
    delOwnRecipe: builder.mutation<DelRecipe, string>({
      query: (id) => ({
        url: `own-recipes/id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: 'OwnRecipe', id: 'LIST' }],
    }),
    postRecipe: builder.mutation<PostRecipe, OwnRecipe>({
      query: (newRecipe) => {
        const formData = new FormData();
        formData.append('title', newRecipe.title);
        formData.append('category', newRecipe.category);
        formData.append('description', newRecipe.description);
        formData.append('instructions', JSON.stringify(newRecipe.instructions));
        formData.append('time', newRecipe.time);
        formData.append('ingredients', JSON.stringify(newRecipe.ingredients));
        if (newRecipe.fullImage) formData.append('fullImage', newRecipe.fullImage);
        return ({
          url: "own-recipes",
          method: "POST",
          body: formData
        });
      },
      invalidatesTags: [{ type: 'OwnRecipe', id: 'LIST' }],
    }),
  }),
});

export const useGetOwnRecipes = ownRecipeApi.endpoints.getOwnRecipes.useQuery;
export const useDelOwnRecipe = ownRecipeApi.endpoints.delOwnRecipe.useMutation;
export const usePostOwnRecipe = ownRecipeApi.endpoints.postRecipe.useMutation;