import { createSlice } from "@reduxjs/toolkit";

export const labSlice = createSlice({
    name: 'labs',
    initialState: {
        labIndex: 0,
        labCount: 9,

    },

    reducers: {
        toLab: (state, actions) => {
            state.labIndex = actions.payload
            
        }
    }

})

export const selectLab = (state) => state.labs.labIndex
export const selectLabCount = (state) => state.labs.labCount
export const {toLab} = labSlice.actions

export default labSlice.reducer