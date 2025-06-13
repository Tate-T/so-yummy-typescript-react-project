import { RecipeItem } from '@/entities/Recipe.type'
import { baseQueryWithAuth } from '@/features/auth/auth'
import { createApi } from '@reduxjs/toolkit/query/react'

export const recipesApi = createApi({
	reducerPath: 'recipes',
	baseQuery: baseQueryWithAuth,
	endpoints: (builder) => ({
		getRecipe: builder.query<RecipeItem, string>({
			query: (id): string => `/recipes/id/${id}`,
			// providesTags: [{ type: 'getRecipes', id: 'LIST' }],
		}),
	}),
})

export const useGetRecipe = recipesApi.endpoints.getRecipe.useQuery
