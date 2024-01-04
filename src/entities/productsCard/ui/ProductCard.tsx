'use client'
import { useDispatch, useSelector } from 'react-redux'
import {IProduct} from '../types/index'
import { addFav,delFav } from '@/features/addToFavourite/addToFavourite'
import { RootState } from '@/shared/lib/redux/store'
import { useRef, useState } from 'react'
import {addCart,delCart} from '@/features/addToCart/addToCart'
import { FaHeart,FaRegHeart } from "react-icons/fa";




const ProductCard = ({id,name,image,desc,price,rate,currentProd}:IProduct) => {

  const dispatch = useDispatch()
    const Theme = useSelector((state: RootState) => state.switchTheme);
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
      className={` mb-10 p-2 w-96 ${Theme.CardsColor} rounded-lg shadow-lg`}>
      <div className='p-2 bg-white '>
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
        <h4 className={`pt-5 ${Theme.CardsTextColor} font-bold text-xl`}>{name}</h4>
        <p className={`pt-5 w-80 h-20 overflow-hidden ${Theme.CardsTextColor}`}>{desc}</p>
      </div>
      <div className='pt-5 text-center'>
        <div className='flex justify-center'>
          <p className={`${Theme.CardsTextColor}`}>price:</p>
          <p className={`pl-5 ${Theme.CardsTextColor}`}>{price}</p>
          <p className={`${Theme.CardsTextColor}`}>$</p>
        </div>
        <div className='flex justify-center'>
          <p className={`${Theme.CardsTextColor}`}>rating:</p>
          <p className={`pl-5 ${Theme.CardsTextColor}`}>{rate}</p>
        </div>
      </div>
      <div className='text-center my-2'>
        {isCart || CheckCart()? 
          <button className={`py-2 px-10 rounded-full ${Theme.disabledButtonColor}`} onClick={() => dispatch(delCart(currentProd), setisCart(false))}>
            <p className={`${Theme.CardsTextColor}`}>Delete from Cart</p>
          </button> : 
          <button className={`py-2 px-10 rounded-full ${Theme.buttonColor}`} onClick={() => dispatch(addCart(currentProd),setisCart(true))}>
            <p className={`${Theme.CardsTextColor}`}>Add to Cart</p>
          </button>}
      </div>
      
      
      
      {/* {isFav ? <button onClick={addToCart}>Delete to Cart</button> : <button onClick={() => dispatch(addFav(currentProd))}>Add to Cart</button>} */}
    </div>

  )
}

export default ProductCard