'use client'

import { RootState } from "@/shared/lib/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"
import { IModalFav } from "../types"
import { FavorObj } from "@/entities/Favor"

const ModalFav = ({isFavOpen,setIsFavOpen}:IModalFav) => {
    const cards = useSelector((state: RootState) => state.favReducer);
    //console.log(cards)

  return (
    <div className="">
        <div className="absolute top-15 right-10 h-96 w-96 h-vw bg-white  z-10 rounded-3xl overflow-auto">
            <div className="pt-4 pl-5 px-2">
                <button className="top-0 right-0 pt-5 text-black" onClick={()=> setIsFavOpen(!isFavOpen)}>Close</button>
            </div>
            <div className="">
                <h4 className="text-center text-black font-bold">Favourite:</h4>
                {cards.Cards.map((fav:any)=> <FavorObj key={fav.id} id={fav.id} name={fav.title} price={fav.price} image={fav.images[0]}/>)}
            </div>
        </div>
    </div>
  )
}

export default ModalFav