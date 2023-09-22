// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addToCart: (state, action) => {
      const { itemcode, qty, price, name, size, variant } = action.payload;
      if (state[itemcode]) {
        state[itemcode].qty += qty;
      } else {
        state[itemcode] = { qty, price, name, size, variant };
      }
    },
    removeFromCart: (state, action) => {
      const { itemcode, qty } = action.payload;
      if (state[itemcode]) {
        state[itemcode].qty -= qty;
        if (state[itemcode].qty <= 0) {
          delete state[itemcode];
        }
      }
    },
    clearCart: (state) => {
      return {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
