'use client'
import { useDispatch, useSelector } from 'react-redux'
import {IProduct} from './types/index'
import { addFav,delFav } from '@/(features)/addToFavourite/addToFavourite'
import { RootState } from '@/app/lib/redux/store'
import { current } from '@reduxjs/toolkit'



const ProductCard = ({id,name,image,desc,price,rate,currentProd}:IProduct) => {

  const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state)
    var isFav = false;
    //console.log(dispatch(addFav(currentProd.payload)))
    // const {data} = useGetAllProductsQuery()
    // console.log(currentProd);

    function addToCart(){
      dispatch(addFav(currentProd));
      !isFav;
    }

  return (
    <div className='p-5 w-96'>
      <div className='h-60 bg-white'>
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
      <button onClick={() => dispatch(delFav(currentProd))}>Delete to Cart</button>
      <button onClick={() => dispatch(addFav(currentProd))}>Add to Cart</button>
      {/* {isFav ? <button onClick={addToCart}>Delete to Cart</button> : <button onClick={() => dispatch(addFav(currentProd))}>Add to Cart</button>} */}
    </div>

  )
}

export default ProductCard