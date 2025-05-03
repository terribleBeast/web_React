import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: null,
        isLogIn: false,
        isAdmin: false,
        id: null
    },

    reducers: {
        toLogIn: (state, actions) => {
            state.login = actions.payload.login
            state.isLogIn = true;
            state.isAdmin = actions.payload.role === 'admin'
            state.id = actions.payload.id // is it necessary?
            console.log('to login', actions)
        },
        toLogOut: (state) => {
            state.login = null
            state.isLogIn = false
            state.isAdmin = false
        },
    }

})

export const selectUserLogin = (state) => state.user.login;
export const selectUserIsLogIn = (state) => state.user.isLogIn;
export const selectUserIsAdmin = (state) => state.user.isAdmin;
export const {toLogIn, toLogOut} = userSlice.actions;

export default userSlice.reducer;