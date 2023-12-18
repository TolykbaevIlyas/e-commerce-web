'use client'
import { useState } from "react";
import { FaShoppingCart,FaHeart } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { IHeader } from "../types";
import { RootState } from "@/shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Btn } from "@/shared/ui/button";
import { FavButton } from "@/features/favButton";
import { CartButton } from "@/features/cartButton";

const Header = ({isFavOpen,setIsFavOpen,isCartOpen, setIsCartOpen}: IHeader) => { 
  return (
    <div className="flex justify-between px-40 py-10">
        <div>
            <h1 className="uppercase text-2xl ">e-commerce</h1>
            <p className="lowercase text-sm font-thin text-right">shop</p>
        </div>
        <div className="flex">
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Home</a>
            </li>
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Products</a>
            </li>
            <li className="list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer">
                <a className="no-underline" href="#">Forum</a>
            </li>
        </div>
        <div className="flex">
            <FavButton setIsFavOpen={setIsFavOpen} isFavOpen={isFavOpen} />
            <CartButton setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen}/>
            <li className="list-none py-3"><a href="#"><IoLogInOutline size="40px"/></a></li>
        </div>
    </div>
  )
}

export default Header