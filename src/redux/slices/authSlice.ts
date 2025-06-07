import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: "", email: "", avatarUrl: "", accessToken: "", },
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload.user;
            state.user.accessToken = action.payload.user.accessToken
        },

        setAccessToken(state, action) {
            state.user.accessToken = action.payload;
        }
    },
})

export const authReducer = authSlice.reducer
export const { setUser, setAccessToken } = authSlice.actions;
export const selectUser = (state: RootState) => state.user.user;
export const selectAccessToken = (state: RootState): string => state.user.user.accessToken