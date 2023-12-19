'use client'
import { useDispatch, useSelector } from 'react-redux'
import {IProduct} from '../types/index'
import { addFav,delFav } from '@/features/addToFavourite/addToFavourite'
import { RootState } from '@/shared/lib/redux/store'
import { current } from '@reduxjs/toolkit'
import { useEffect, useRef, useState } from 'react'
import {addCart,delCart} from '@/features/addToCart/addToCart'
import { FaShoppingCart,FaHeart,FaRegHeart } from "react-icons/fa";
import { FavButton } from '@/features/favButton'
import { useGetAllProductsQuery } from '../api/productApiSlice'



const ProductCard = ({id,name,image,desc,price,rate,currentProd}:IProduct) => {

  const dispatch = useDispatch()
    const Fav = useSelector((state: RootState) => state.favReducer);
    const Cart = useSelector((state: RootState) => state.cartReducer);
    const [isFav, setisFav] = useState(false);
    const [isCart, setisCart] = useState(false);
    const Ref = useRef();

    function CheckFav(){
      for(let i = 0 ; i < Fav?.Cards.length;i++){
        if(currentProd.id === Fav.Cards[i].id){
          return true;
        }
      }
    }

    function CheckCart(){
      for(let i = 0 ; i < Cart?.Cart.length;i++){
        if(currentProd.id === Cart.Cart[i].id){
          return true;
        }
      }
    }


  return (
    <div 
      className=' mb-10 p-2 w-96 bg-slate-100 rounded-lg'>
      <div className='p-2 bg-white'>
        {isFav || CheckFav()? 
          <button onClick={() => dispatch(delFav(currentProd), setisFav(false))}>
              <FaHeart size="30px" color="red"/>
            </button>: 
            <button onClick={() => dispatch(addFav(currentProd),setisFav(true))}> 
              <FaRegHeart size="30px" color="black" />
            </button>
        }
        <img src={image} alt="" className='h-60 min-h-fit m-auto'/>
      </div>
      <div className='text-center'>
        <h4 className='pt-5 text-black font-bold text-xl'>{name}</h4>
        <p className='pt-5 w-80 h-20 overflow-hidden text-black'>{desc}</p>
      </div>
      <div className='pt-5 text-center'>
        <div className='flex justify-center'>
          <p className='text-black'>price:</p>
          <p className='pl-5 text-black'>{price}</p>
          <p className='text-black'>$</p>
        </div>
        <div className='flex justify-center'>
          <p className='text-black'>rating:</p>
          <p className='pl-5 text-black'>{rate}</p>
        </div>
      </div>
      <div className='text-center my-2'>
        {isCart || CheckCart()? 
          <button className="py-2 px-10 rounded-full bg-slate-600" onClick={() => dispatch(delCart(currentProd), setisCart(false))}>
            Delete from Cart
          </button> : 
          <button className="py-2 px-10 bg-orange-600 rounded-full" onClick={() => dispatch(addCart(currentProd),setisCart(true))}>
            Add to Cart
          </button>}
      </div>
      
      
      
      {/* {isFav ? <button onClick={addToCart}>Delete to Cart</button> : <button onClick={() => dispatch(addFav(currentProd))}>Add to Cart</button>} */}
    </div>

  )
}

export default ProductCard