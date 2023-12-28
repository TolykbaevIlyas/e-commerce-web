'use client'

import { RootState } from "@/shared/lib/redux/store"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { IModalFav } from "../types"
import { Cart } from "@/entities/Cart"

const ModalCart = ({isCartOpen,setIsCartOpen}:IModalFav) => {
    const CartEntity = useSelector((state: RootState) => state.cartReducer);
    const [price,setPrice]= useState(0);
    let currentPrice = 0;
    for(let i = 0; i < CartEntity.Cart.length; i++) {
        currentPrice = currentPrice + CartEntity.Cart[i].price;
    }

  return (
    <div className="">
        <div className="absolute top-15 right-10 h-96 w-96 h-vw bg-white  z-10 rounded-3xl overflow-auto shadow-xl">
            <div className="pt-4 pl-5 px-2">
                <button className="top-0 right-0 pt-5 text-black" onClick={()=> setIsCartOpen(!isCartOpen)}>Close</button>
            </div>
            <div className="">
                <h4 className="text-center text-black font-bold">Cart:</h4>
                {CartEntity.Cart.map((fav:any)=> <Cart key={fav.id} id={fav.id} name={fav.title} price={fav.price} image={fav.images[0]}/>)}
            </div>
            <p>
                TotalCount: {currentPrice} $
            </p>
        </div>
    </div>
  )
}

export default ModalCart