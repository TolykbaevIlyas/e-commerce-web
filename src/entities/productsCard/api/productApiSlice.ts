import { ThunkDispatch } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

interface GetAllProd{
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: any
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

interface Data{
    limit: number;
    products: Array<GetAllProd>;
    skip: number;
    total: number;
}



export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder) => ({
        getAllProducts: builder.query<Data, number | void>({
            query:(counts = 1) => `products?limit=12&skip=${counts}`,
            keepUnusedDataFor: 5,
        }),
    }),
});


export default productsApi.reducer
export const {useGetAllProductsQuery} = productsApi;