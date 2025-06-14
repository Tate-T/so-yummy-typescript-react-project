import { IngredientsFull } from "@/entities/IngredientsFull";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const ingredientsApi = createApi({
  reducerPath: "ingredients",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getIngredients: builder.query<IngredientsFull, void>({
      query: (): string => `recipes/ingredients`,
    }),
  }),
});

export const useGetIngredients = ingredientsApi.endpoints.getIngredients.useQuery;