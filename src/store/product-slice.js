import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  smartphone: [],
  laptops: [],
  fragnances: [],
  skincares: [],
  groceries: [],
  homeDecorations: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    replaceProducts(state, actions) {
      state.smartphone = actions.payload.smartphone;
      state.laptops = actions.payload.laptops;
      state.fragnances = actions.payload.fragnances;
      state.skincares = actions.payload.skincares;
      state.groceries = actions.payload.groceries;
      state.homeDecorations = actions.payload.homeDecorations;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
