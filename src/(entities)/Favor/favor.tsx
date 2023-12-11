'use client'

import { RootState } from "@/app/lib/redux/store"
import { useSelector } from "react-redux"
import FavorObj from "./favorObj"

const Favor = () => {
    const cards = useSelector((state: RootState) => state.favReducer)
    console.log(cards.Cards[0])
    const test = Object.keys(cards.Cards).map(()=> <FavorObj/>)
    
  return (
    <div className="text-center text-lg uppercase">
        Favor
        {/* <FavorObj/> */}
        {Object.keys(cards) ? Object.keys(cards.Cards).map(()=> <FavorObj/>) : (<>ERROR</>)}
    </div>
  )
}

export default Favor
