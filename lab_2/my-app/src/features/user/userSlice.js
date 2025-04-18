import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: null,
        isLogIn: false,
    },

    reducers: {
        toLogIn: (state, actions) => {
            state.login = actions.payload
            state.isLogIn = true;
            console.log('to login', actions.payload)
        },
        toLogOut: (state) => {
            state.login = null
            state.isLogIn = false
        },
    }

})

export const selectUserLogin = (state) => state.user.login;
export const selectUserIsLogIn = (state) => state.user.isLogIn;
export const {toLogIn, toLogOut} = userSlice.actions;

export default userSlice.reducer;