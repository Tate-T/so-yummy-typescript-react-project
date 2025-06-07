import { setAccessToken } from "@/redux/slices/authSlice";
import { RootState } from "@/redux/store";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query'
import getRefreshToken from "./getRefreshToken";
import deleteRefreshToken from "./deleteRefreshToken";
import saveRefreshToken from "./saveRefreshToken";

type TokensResponse = {
    accessToken: string,
    refreshToken: string
}

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = fetchBaseQuery({
    baseUrl: 'https://so-yumi.p.goit.global/api',
    prepareHeaders: (headers, { getState }) => {
        // this method should retrieve the token without a hook
        const state = getState() as RootState;
        const token = state?.user?.user?.accessToken;

        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
})


export const baseQueryWithAuth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        // try to get a new token
        const refreshResult = await baseQuery({
            url: "/users/refresh",
            method: 'POST',
            body: {
                refreshToken: getRefreshToken()
            }
        }, api, extraOptions);

        if (refreshResult.data) {
            const { accessToken, refreshToken } = refreshResult.data as TokensResponse;
            // store the new token in the store or wherever you keep it
            api.dispatch(setAccessToken(accessToken));
            saveRefreshToken(refreshToken)
            // retry the initial query
            result = await baseQuery(args, api, extraOptions);
        } else {
            console.log('redirect test')
            // refresh failed - do something like redirect to login or show a "retry" button
            deleteRefreshToken();
            // redirect('/start');
            if (typeof window !== 'undefined') {
                window.location.href = '/start';
            }
        }
    }
    return result;
};