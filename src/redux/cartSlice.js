import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart: an array of items
const initialState = {
  items: [], // Each item: { id, title, price, quantity, ... }
};

// Create a Redux slice for cart state and actions
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add product to cart; if it exists, increase quantity
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if already in cart
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    // Remove product from cart by id
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    // Decrease quantity or remove item if quantity is 1
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== item.id);
        }
      }
    },
  },
});

// Export cart actions and reducer for use in the app
export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
