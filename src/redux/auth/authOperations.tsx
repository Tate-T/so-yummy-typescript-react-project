import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "@/features/auth/auth";
import type {
  BaseQueryApi,
  FetchArgs,
  FetchBaseQueryError,
  QueryReturnValue,
  FetchBaseQueryMeta,
} from "@reduxjs/toolkit/query";
import { setUser } from "../slices/authSlice";
import { ChangeBody, ChangeResp } from "@/entities/ChangeData.type";

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
    changeData: builder.mutation<ChangeResp, ChangeBody>({
      async queryFn(
        arg,
        api,
        extraOptions,
      ): Promise<QueryReturnValue<ChangeResp, FetchBaseQueryError, FetchBaseQueryMeta>> {
        const formData = new FormData();
        if (arg.name) formData.append("name", arg.name);
        if (arg.avatar) formData.append("avatar", arg.avatar);
        const res = await baseQueryWithAuth(
          {
            url: "/users/update",
            method: "PUT",
            body: formData,
          },
          api,
          extraOptions,
        );

        if (res.error) {
          return { error: res.error };
        }
        return { data: res.data as ChangeResp };
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser({ user: { name: data.name, avatarURL: data.avatarURL } }));
        } catch (err) {
          console.log(err);
        }
      },
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

export const { useSignupMutation, useSigninMutation, useLogoutMutation, useChangeDataMutation } =
  authApi;
