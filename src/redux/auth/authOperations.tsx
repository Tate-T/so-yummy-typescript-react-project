import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

interface AuthInit {
  user: {
    name: string;
    email: string;
    avatarURL: string;
    accessToken: string;
  };
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://so-yumi.p.goit.global/api/users",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/signup",
        method: "POST",
        body: userData,
      }),
    }),
    signin: builder.mutation({
      query: (userData) => ({
        url: "/login",
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      queryFn: (_arg, queryApi, _extraOptions, baseQuery) => {
        const state = queryApi.getState() as { user: AuthInit };
        const token = state.user.user.accessToken;

        return baseQuery({
          url: "/logout",
          method: "POST",
          headers: {
            Authorization: token?.trim() ?? "",
          },
        });
      },
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useLogoutMutation } = authApi;
