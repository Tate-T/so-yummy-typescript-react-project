import { Category } from "@/entities/Category.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import { Recipes, RecipeSmall } from "@/entities/Recipe.type";

export const categoriesApi = createApi({
  reducerPath: "categories",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: (): string => `recipes/category/list`,
    }),
    getCategoryRecipes: builder.query<Recipes, { categoryName: string }>({
      query: ({ categoryName }): string =>
        `recipes/category/${
          categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
        }`,
    }),
  }),
});

export const useGetAllCategories =
  categoriesApi.endpoints.getAllCategories.useQuery;
export const useGetCategoryRecipes =
  categoriesApi.endpoints.getCategoryRecipes.useQuery;
