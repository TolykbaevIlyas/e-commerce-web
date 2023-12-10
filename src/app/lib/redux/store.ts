import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '@/(entities)/productsCard/api/productApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore ({
  reducer:{
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch;