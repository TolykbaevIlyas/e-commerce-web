import { RootState } from '@/shared/lib/redux/store';
import React from 'react'
import { FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { IfavBtn } from '../types';
import { ProductCard } from '@/entities/productsCard';

const FavButton = ({setIsFavOpen, isFavOpen}:IfavBtn) => {
    const cardsFav = useSelector((state: RootState) => state.favReducer);

  return (
    <li className="list-none py-4" onClick={()=> setIsFavOpen(!isFavOpen)}>
      <a href="#">
        <FaHeart size="30px"/>
        <p className="-my-11 z-20 text-orange-700 font-bold text-xl">
          {cardsFav.Cards.length}
        </p>
      </a>
    </li>
  )
}

export default FavButton