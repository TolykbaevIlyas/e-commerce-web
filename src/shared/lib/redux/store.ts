import switchTheme from '@/features/switchTheme/lib/Slice/switchTheme';
import favReducer from '@/features/addToFavourite/addToFavourite'
import cartReducer from '@/features/addToCart/addToCart'
import productsReducer from '@/entities/productsCard/api/productApiSlice';

import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '@/entities/productsCard/api/productApiSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore ({
  reducer:{
    favReducer,
    cartReducer,
    switchTheme,
    [productsApi.reducerPath]: productsApi.reducer,
    
  },
  middleware:(getDefaultMiddleware) => 
  getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState> ;
export type AppDispatch = typeof store.dispatch;