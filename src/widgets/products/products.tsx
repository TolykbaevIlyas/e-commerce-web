'use client'

import { ProductCard } from "@/(entities)/productsCard";
import { useGetAllProductsQuery } from "@/(entities)/productsCard/api/productApiSlice"
import { IProduct } from "./types";
import { addFav } from "@/(features)/addToFavourite/addToFavourite";
import { RootState } from "@/app/lib/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const Products = () => {
    const [page, setPage] = useState(1);
    const {data,error,isLoading,isFetching } = useGetAllProductsQuery(10 * page);
    const count = useSelector((state: RootState) => state);
    const pages = [1,2,3,4,5];
    //console.log(count)
    // console.log(currentData?.products);
    // const ProdCard = data.map((prod) => <ProductCard key={prod.id}/>)
  return (
    <div className="p-4">
        <h2 className="text-center text-lg uppercase">products</h2>
        <div className="flex flex-wrap justify-around">
            {error ? (<>ERROR</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? data.products.map((prod:IProduct) => <ProductCard key={prod.id} id={prod.id} name={prod.title} desc={prod.description} image={prod.images[0]} price={prod.price} rate={prod.rating} addFavv={addFav} currentProd={prod}/>) 
            : null}
        </div>
        {/* <div className="p-4 text-center">{pages.map((page,index) => <span key={index} className={'p-2 cursor-pointer hover:text-gray-500 duration-100'}>{page}</span> )}</div> */}
        <div className="text-center flex justify-center">
          <button className="p-4 hover:text-gray-500 duration-100" onClick={() => setPage(page - 1)} isLoading={isFetching}>
          Previous
          </button>
          {<div className="p-4 text-center">{pages.map((pageL,index) => <span key={index} onClick={() => setPage(pageL)} className={`p-2 cursor-pointer hover:text-gray-500 duration-100 ${pageL == page ? `text-lime-600` : null}` }>{pageL}</span> )}</div>}
          <button className="p-4 hover:text-gray-500 duration-100" onClick={() => setPage(page + 1)} isLoading={isFetching}>
          Next
          </button>
        </div>
    </div>
  )
}

export default Products