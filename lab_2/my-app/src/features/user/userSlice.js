import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: null,
    },

    reducers: {
        toLogIn: (state, loginUser) => {
            state.value = loginUser
        },
        toLogOut: (state) => {
            state.value = null
        }

    }

})

export const selectUser = (state) => state.user.login;
export const {toLogIn, toLogOut} = userSlice.actions;

export default userSlice.reducer;