'use client'

import { ProductCard } from "@/entities/productsCard";
import { useGetAllProductsQuery } from "@/entities/productsCard/api/productApiSlice"
import { IProduct } from "../types";
import { addFav } from "@/features/addToFavourite/addToFavourite";
import { RootState } from "@/shared/lib/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const Products = () => {
    const [page, setPage] = useState(1);
    const skip = 12;
    const {data ,error,isLoading,isFetching,currentData } = useGetAllProductsQuery({page:page, skip:skip});
    const count = useSelector((state: RootState) => state);
    const pagesCount = Math.round(currentData?.total / skip);
    let pages =[];
        for (let i=1; i <= pagesCount; i++){
            pages.push(i);
        }
  return (
    <div className="p-4">
        <h2 className="text-center text-lg uppercase">products</h2>
        <div className="flex flex-wrap justify-around mt-16">
            {error ? (<>ERROR</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? data.products.map((prod:IProduct) => <ProductCard key={prod.id} id={prod.id} name={prod.title} desc={prod.description} image={prod.images[0]} price={prod.price} rate={prod.rating} currentProd={prod}/>) 
            : null}
        </div>
        <div className="text-center flex justify-center">
          <button className={page == 1 ? `p-4 text-gray-700 duration-100` : `p-4 hover:text-gray-500 duration-100`} 
                  onClick={() => setPage(page - 1)} 
                  disabled={page === 1}>

                  Previous
          </button>

          {<div className="p-4 text-center">
            {pages.map(
              (pageL,index) => 
                <span key={index} 
                      onClick={() => setPage(pageL)} 
                      className={`p-2 cursor-pointer hover:text-gray-500 duration-100 ${pageL == page ? `text-lime-600` : null}` }>
                          {pageL}
                </span> )}
          </div>}
          
          <button className={page == pagesCount ? `p-4 text-gray-700 duration-100` : `p-4 hover:text-gray-500 duration-100`}
                  onClick={() => setPage(page + 1)}
                  disabled={page === pagesCount} >
                  
            Next
          </button>
        </div>
    </div>
  )
}

export default Products