'use client'
import Favor from '@/entities/Favor/favor'
import { ModalCart } from '@/features/modalCart'
import ModalFav from '@/features/modalFavourite/ModalFav'
import { Header } from '@/widgets/header'
import { Products } from '@/widgets/products'
import React, { useState } from 'react'

const HomePage = () => {
    const [isFavOpen, setIsFavOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <div>
        <Header isFavOpen={isFavOpen} setIsFavOpen={setIsFavOpen} isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
        {isFavOpen ? <ModalFav isFavOpen={isFavOpen} setIsFavOpen={setIsFavOpen}/> : ""}
        {isCartOpen ? <ModalCart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen}/> : ""}
        <Products/>
        <Favor></Favor>
    </div>
  )
}

export default HomePage