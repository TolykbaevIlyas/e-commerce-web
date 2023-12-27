'use client'
import { ModalCart } from '@/features/modalCart'
import ModalFav from '@/features/modalFavourite/ui/ModalFav'
import { RootState } from '@/shared/lib/redux/store'
import { Header } from '@/widgets/header'
import { Products } from '@/widgets/products'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const [isFavOpen, setIsFavOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const Theme = useSelector((state: RootState) => state.switchTheme);
  return (
    <div className={`${Theme.backgroundColor}`}>
        <Header isFavOpen={isFavOpen} setIsFavOpen={setIsFavOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {isFavOpen ? <ModalFav isFavOpen={isFavOpen} setIsFavOpen={setIsFavOpen}/> : ""}
        {isCartOpen ? <ModalCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/> : ""}
        <Products/>
    </div>
  )
}

export default HomePage