import { createSlice } from "@reduxjs/toolkit";
import dataProducts from "./dataFake/dataProducts";

const initialPhotos = dataProducts;
const product = createSlice({
    name: "product",
    initialState: initialPhotos,
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },

        removeProduct: (state, action) => {
            const id = action.payload;
            return state.filter((product) => product.id !== id);
        },

        updateProduct: (state, action) => {
            const newProduct = action.payload;
            const photoIndex = state.findIndex((product) => product.id == newProduct.id);

            if (photoIndex >= 0) {
                state[photoIndex] = newProduct;
            }
        },
    },
});

const { reducer, actions } = product;
export const { addProduct, removeProduct, updateProduct } = actions;
export default reducer;
