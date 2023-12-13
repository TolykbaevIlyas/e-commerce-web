'use client'

import { RootState } from "@/shared/lib/redux/store"
import { useSelector } from "react-redux"
import FavorObj from "./favorObj"

const Favor = () => {
    const cards = useSelector((state: RootState) => state.favReducer)
    //console.log(cards.Cards[0])
    
    
  return (
    <>
      <div className="text-center text-lg uppercase">
          {/* <FavorObj/> */}
          {/* {cards.Cards.map((fav)=> <FavorObj key={fav.id} name={fav.title}/>) : (<>ERROR</>)} */}
      </div>
    </> 
  )
}

export default Favor
