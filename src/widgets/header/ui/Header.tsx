'use client'
import { useState } from "react";
import { FaShoppingCart,FaHeart } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { IHeader } from "../types";
import { RootState } from "@/shared/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Btn } from "@/shared/ui/button";
import { FavButton } from "@/features/favButton";
import { CartButton } from "@/features/cartButton";
import { SwitchButton } from "@/features/switchTheme/Index";

const Header = ({isFavOpen,setIsFavOpen,isCartOpen, setIsCartOpen}: IHeader) => { 
    const Theme = useSelector((state: RootState) => state.switchTheme);

  return (
    <div className="flex justify-between px-40 py-10">
        <div>
            <h1 className={`uppercase text-2xl ${Theme.textColor}`} >e-commerce</h1>
            <p className={`lowercase text-sm font-thin text-right ${Theme.textColor}`}>shop</p>
        </div>
        <div className="flex">
            <li className={`list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer ${Theme.textColor}`}>
                <a className="no-underline" href="#">Home</a>
            </li>
            <li className={`list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer ${Theme.textColor}`}>
                <a className="no-underline" href="#">Products</a>
            </li>
            <li className={`list-none p-4 ease-linear duration-75 hover:text-zinc-600 cursor-pointer ${Theme.textColor}`}>
                <a className="no-underline" href="#">Forum</a>
            </li>
        </div>
        <div className="flex">
            <SwitchButton/>
            <FavButton setIsFavOpen={setIsFavOpen} isFavOpen={isFavOpen} />
            <CartButton setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen}/>
            <li className="list-none py-3"><a href="#"><IoLogInOutline size="40px" color={`${Theme.iconColor}`}/></a></li>
        </div>
    </div>
  )
}

export default Header