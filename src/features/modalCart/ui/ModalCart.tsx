'use client'

import { RootState } from "@/shared/lib/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"
import { IModalFav } from "../types"
import { Cart } from "@/entities/Cart"

const ModalCart = ({isCartOpen,setIsCartOpen}:IModalFav) => {
    const CartEntity = useSelector((state: RootState) => state.cartReducer);
    const [price,setPrice]= useState(0);

    const summurizePrice = (comePrice) =>{
        let currentPrice = price + comePrice;
        
    }

  return (
    <div className="">
        <div className="absolute top-15 right-10 w-96 h-vw bg-white  z-10 rounded-3xl">
            <div className="py-4 px-2">
                <button className="fixed top-0 right-0 p-4 text-black" onClick={()=> setIsCartOpen(!isCartOpen)}>Close</button>
            </div>
            <div className="p-4">
                <h4 className="text-center text-black font-bold">Cart:</h4>

                {CartEntity.Cart.map((fav:any)=> <Cart key={fav.id} id={fav.id} name={fav.title} price={fav.price}/>)}

            </div>
        </div>
    </div>
  )
}

export default ModalCart