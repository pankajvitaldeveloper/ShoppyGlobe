import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

// Create Redux store and register cart reducer for global state management
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Handles all cart-related state and actions
  },
});
