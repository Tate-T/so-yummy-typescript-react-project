import { toggleResponse } from "@/entities/Favorite.type";
import { Recipes } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const favoriteApi = createApi({
  reducerPath: "favorite",
  baseQuery: baseQueryWithAuth,
  tagTypes: ['Favorite'],
  endpoints: (builder) => ({
    getFavorite: builder.query<Recipes, number>({
      query: (page): string => `recipes/favorite?limit=4&page=${page}`,
      providesTags: [{ type: 'Favorite', id: 'LIST' }]
    }),
    toggleFavorite: builder.mutation<toggleResponse, string>({
      query: (id) => ({
        url: `recipes/favorite/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: 'Favorite', id: 'LIST' }],
    }),
  }),
});

export const useGetFavorite = favoriteApi.endpoints.getFavorite.useQuery;
export const useToggleFavorite = favoriteApi.endpoints.toggleFavorite.useMutation;