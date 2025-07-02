import { CategoriesMainResponse, RecipeItem, Recipes, SearchParams } from "@/entities/Recipe.type";
import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";

const baseQueryWithStorage: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQueryWithAuth(args, api, extraOptions);

  if (result.error && result.error.status === 404) {
    // api.getState("ownRecipes").filter((recipe) => recipe._id === args.)

    console.log(api.getState());
  }
  return result;
};

type Item = {
  productId: string;
  title: string;
  thumb: string;
  measure: string[];
};

export const shopingLists = createApi({
  reducerPath: "Shopinglist",
  baseQuery: baseQueryWithStorage,
  tagTypes: ["Shopinglist"],
  endpoints: (builder) => ({
    getShopopingList: builder.query<
      {
        shoppingList: Item[];
      },
      void
    >({
      query: (): string => `/users/shopping-list/`,
      providesTags: [{ type: "Shopinglist", id: "LIST" }],
    }),
    addShopingLIst: builder.mutation<RecipeItem, { productId: string; measure: string }>({
      query: ({ productId, measure }) => {
        return {
          url: `/users/shopping-list/`,
          method: "POST",
          body: { productId: productId, measure: measure },
        };
      },
    }),
    removeShopingLIst: builder.mutation<RecipeItem, { productId: string; measure: string }>({
      query: ({ productId, measure }) => {
        return {
          url: `/users/shopping-list/`,
          method: "PATCH",
          body: { productId: productId, measure: measure },
        };
      },
      invalidatesTags: [{ type: "Shopinglist", id: "LIST" }],
    }),
  }),
});
export const useGetShopopingList = shopingLists.endpoints.getShopopingList.useQuery;
export const useAddShopingLIst = shopingLists.endpoints.addShopingLIst.useMutation;
export const useRemoveShopingLIst = shopingLists.endpoints.removeShopingLIst.useMutation;
