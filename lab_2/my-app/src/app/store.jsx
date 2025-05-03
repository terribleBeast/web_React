import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import userReducer from '../features/user/userSlice'
import labReducer from '../features/labsSlice';
import { userApi } from '../features/api/usersAPI';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        labs: labReducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware),
})

export default store;
