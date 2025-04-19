import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import userReducer from '../features/user/userSlice'
import labReducer from '../features/labs';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        user: userReducer,
        labs: labReducer,
    }
})

export default store;