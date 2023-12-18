import { RootState } from '@/shared/lib/redux/store';
import { Btn } from '@/shared/ui/button'
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IfavBtn } from '../types';

const FavButton = ({setIsFavOpen, isFavOpen}:IfavBtn) => {
    const cardsFav = useSelector((state: RootState) => state.favReducer);
  return (
    <li className="list-none py-4" onClick={()=> setIsFavOpen(!isFavOpen)}><FaHeart size="30px"/><p className="-my-11 z-20 text-orange-700 font-bold text-xl">{cardsFav.Cards.length}</p></li>
  )
}

export default FavButton