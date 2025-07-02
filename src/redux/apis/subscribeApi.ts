import { baseQueryWithAuth } from "@/features/auth/auth";
import { createApi } from "@reduxjs/toolkit/query/react";

export const subscribeApi = createApi({
    reducerPath: 'subscribe',
    baseQuery: baseQueryWithAuth,
    endpoints: (builder) => ({
        subscribeNews: builder.mutation<{ message: string }, string>({
            query: (email) => ({
                url: '/users/subscribe',
                method: 'POST',
                body: { email }
            })
        })
    })
});

export const useSubscribe = subscribeApi.endpoints.subscribeNews.useMutation;