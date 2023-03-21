import { createSlice } from "@reduxjs/toolkit";

const cardPageSlise = createSlice({
    name: 'cardPage',
    initialState: {
        cardPage: {}
    },
    reducers: {
        openProductPage(state, action) {
            state.cardPage = (action.payload)
            console.log(action.payload)
        }
    }
})

export const { openProductPage } = cardPageSlise.actions

export default cardPageSlise.reducer