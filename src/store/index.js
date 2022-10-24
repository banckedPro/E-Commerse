import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import productSlice from './product-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    products: productSlice.reducer,
  },
});

export default store;
