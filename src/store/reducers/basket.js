import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basket: [],
        pricesProducts: 0,
        countProd: 0,
    },
    reducers: {
        addProduct(state, action) {
            state.basket.push(action.payload)
            state.pricesProducts = state.basket.reduce((sum, current) => {
            return sum + current.price
            },0)
            state.countProd = state.basket.length
        },
        removeProductBasket (state, action) {
            state.basket = state.basket.filter((item) => item.id !== action.payload);
            state.pricesProducts = state.basket.reduce((sum, current) => {
                return sum + current.price
                },0);
            state.countProd = state.basket.length;             
        },
        clearBasket(state, action) {
            state.basket = [];
            state.pricesProducts = 0;
            state.countProd = 0;
    }}
})

export const { addProduct } = basketSlice.actions
export const { removeProductBasket } = basketSlice.actions
export const { clearBasket  } = basketSlice.actions
export default basketSlice.reducer





