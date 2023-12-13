'use client'
import { useDispatch, useSelector } from 'react-redux'
import {IProduct} from './types/index'
import { addFav,delFav } from '@/features/addToFavourite/addToFavourite'
import { RootState } from '@/shared/lib/redux/store'
import { current } from '@reduxjs/toolkit'
import { useState } from 'react'
import {addCart,delCart} from '@/features/addToCart/addToCart'
import { FaShoppingCart,FaHeart,FaRegHeart } from "react-icons/fa";



const ProductCard = ({id,name,image,desc,price,rate,currentProd}:IProduct) => {

  const dispatch = useDispatch()
    const Fav = useSelector((state: RootState) => state.favReducer.Cards);
    const [isFav, setisFav] = useState(false);
    const [isExists, setisExists] = useState(false);
    const [isCart, setisCart] = useState(false);
    const isExist = false;
    // console.log(`isFav: ${isFav} isExist: `)
    // console.log(`${Fav.filter((fav)=> console.log(fav))}`)
    //console.log(`${isFav}       ${isFav ? true : false }`)
    //console.log(dispatch(addFav(currentProd)))
    // const {data} = useGetAllProductsQuery()
    // console.log(Fav.filter((obj:any) => console.log(obj)));
    //console.log(`isFav ${id}  ${isFav}`);
    //Fav.filter((obj:any) => console.log(`myid:${id} myFav: ${isFav} objId:${obj.id} objFav:${obj.id === id} Test: ${(obj.id === id) === isFav}`));
    // const favv = () => Fav.filter((obj:any) => (obj.id === id) === isFav);
    //console.log(favv());
    //Fav.filter((obj:any) => (obj.id === id) === isFav)

    //console.log(`IsFav ${isFav}  isExists ${isExist}   Fav.filter ${Fav.filter((obj:any) => (obj.id === id) === isFav)}`)
  return (
    <div className='p-5 w-96'>
      <div className='p-2 bg-white'>
        {isFav ? 
          <button onClick={() => dispatch(delFav(currentProd), setisFav(false))}>
              <FaHeart size="30px" color="red"/>
            </button>: 
          <button onClick={() => dispatch(addFav(currentProd),setisFav(true))}> 
            <FaRegHeart size="30px" color="black" />
          </button>
        }
        <img src={image} alt="" className='h-60 min-h-fit m-auto'/>
      </div>
      <h4 className='pt-5'>{name}</h4>
      <p className='w-60 pt-5'>{desc}</p>
      <div className='pt-5  '>
        <div className='flex'>
          <p>price:</p>
          <p className='pl-5'>{price}</p>
          <p>$</p>
        </div>
        <div className='flex'>
          <p>rating:</p>
          <p className='pl-5'>{rate}</p>
        </div>
      </div>
      {isCart ? <button onClick={() => dispatch(delCart(currentProd), setisCart(false))}>Delete from Cart</button> : <button onClick={() => dispatch(addCart(currentProd),setisCart(true))}>Add to Cart</button>}
      
      
      {/* {isFav ? <button onClick={addToCart}>Delete to Cart</button> : <button onClick={() => dispatch(addFav(currentProd))}>Add to Cart</button>} */}
    </div>

  )
}

export default ProductCard