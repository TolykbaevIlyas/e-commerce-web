import { Data } from './types/index';
import { ThunkDispatch } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ['products'],
    baseQuery: fetchBaseQuery({baseUrl:"https://dummyjson.com/"}),
    endpoints:(builder) => ({
        getAllProducts: builder.query<Data, any | void>({
            query:({page = 1, skip = 0, search}) => `products/search?q=${search}&limit=12&skip=${page * skip}`,
        }),
        updateCategoryProducts: builder.mutation<Data, any | void>({
            query:({category = ""}) => ({
                url: `products/category/${category}`,
                method:'Get',
            }),
        })
    }),
});


export default productsApi.reducer
export const {useGetAllProductsQuery, useUpdateCategoryProductsMutation} = productsApi;