import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      return state.filter(product => product.id !== action.payload.id); 
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;


export default cartSlice.reducer;
