'use client'

import { ProductCard } from "@/entities/productsCard";
import { useGetAllProductsQuery,useUpdateCategoryProductsMutation } from "@/entities/productsCard/api/productApiSlice"
import { IProduct } from "../types";
import { addFav } from "@/features/addToFavourite/addToFavourite";
import { RootState } from "@/shared/lib/redux/store";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CategoryButton } from "@/features/categoryButton";


const Products = () => {
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState(false);
    const skip = 12;
    const {data ,error,isLoading,isFetching,currentData } = useGetAllProductsQuery({page:page, skip:skip, search: searchTerm});
    const [updateCategoryProducts, result] = useUpdateCategoryProductsMutation();
    //updateCategoryProducts({category:"smartphones"})
    const count = useSelector((state: RootState) => state);
    //console.log(result);

    const CheckPages = ()=>{
      if(category){
        return Math.round(result.data?.total / skip);
      }else{
        return Math.round(currentData?.total / skip);
      }
    }
    const pagesCount = CheckPages();
    
    let pages =[];
    let categoryBtns= [
      {id: 1, name: "smartphones", type: "smartphones"},
      {id: 2, name: "laptops", type: "laptops"},
      {id: 3, name: "fragrances", type:"fragrances"}
    ]

    for (let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    

  return (
    <div className="p-4">
        <div className="flex justify-center">
          <input 
            value={searchTerm}
            autoFocus
            type="text"
            autoComplete="off"
            placeholder="Поиск"
            onChange={(e)=> setSearchTerm(e.target.value)}
            className="text-center text-lg items-center m-auto w-96 p-2 rounded-lg text-black" />
            <div>
              {/* <button className="py-2 px-10 bg-orange-600 rounded-full" onClick={()=>CategoryHandle(`${btns.type}`) }>{btns.name}</button> */}
              {categoryBtns.map((btns) => <CategoryButton key={btns.id} name={btns.name} type={btns.type} updateCategoryProducts={updateCategoryProducts} setCategories={setCategory}/> )}
              
            </div>
        </div>

        <h2 className="text-center text-lg uppercase pt-5">products</h2>
        <div className="flex flex-wrap justify-around mt-16">
            {result.isError ? (<>ERROR</>) 
            : result.isLoading ? (<>IS LOADING</>)
            : category ? result.data?.products.map((prod:IProduct) => <ProductCard key={prod.id} id={prod.id} name={prod.title} desc={prod.description} image={prod.images[0]} price={prod.price} rate={prod.rating} currentProd={prod}/>) 
            : error ? (<>ERROR</>) 
            : isLoading ? (<>IS LOADING</>)
            : data ? 
            data.products.map((prod:IProduct) => <ProductCard key={prod.id} id={prod.id} name={prod.title} desc={prod.description} image={prod.images[0]} price={prod.price} rate={prod.rating} currentProd={prod}/>) 
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