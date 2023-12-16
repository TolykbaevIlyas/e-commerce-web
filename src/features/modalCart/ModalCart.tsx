'use client'

import FavorObj from "@/entities/Favor/favorObj"
import { RootState } from "@/shared/lib/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"
import { IModalFav } from "./types"
import { Cart } from "@/entities/Cart"

const ModalCart = ({isCartOpen,setIsCartOpen}:IModalFav) => {
    const CartEntity = useSelector((state: RootState) => state.cartReducer);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-300 z-50 ">
        <div className="fixed top-2/4 left-1/2 w-96 h-96 bg-slate-900 -translate-y-2/4 -translate-x-2/4 z-10">
            <div className="py-4 px-2">
                <button className="fixed top-0 right-0 p-4" onClick={()=> setIsCartOpen(!isCartOpen)}>Close</button>
            </div>
            <div className="p-4">
                <h4 className="text-center">Cart:</h4>

                {CartEntity.Cart.map((fav:any)=> <Cart key={fav.id} id={fav.id} name={fav.title}/>)}
            </div>
        </div>
    </div>
  )
}

export default ModalCart