'use client'

import { ProductCard } from "@/(entities)/productsCard";
import { useGetAllProductsQuery } from "@/(entities)/productsCard/api/productApiSlice"
import { IProduct } from "./types";

const Products = () => {
    const {data,error,isLoading} = useGetAllProductsQuery();
    console.log(data)
    // const ProdCard = data.map((prod) => <ProductCard key={prod.id}/>)
  return (
    <div className="p-4">
        <h2 className="text-center uppercase">products</h2>
        <div className="flex flex-wrap justify-around">
            {error ? (<>ERROR</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? data.products.map((prod:IProduct) => <ProductCard key={prod.id} name={prod.title} desc={prod.description} image={prod.images[0]} price={prod.price} rate={prod.rating}/>) 
            : null}
        </div>
    </div>
  )
}

export default Products