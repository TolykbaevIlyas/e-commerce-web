'use client'

import React, { useState } from 'react'
import { ICart } from '../types'

const Cart = ({id, name, price,image}: ICart) => {
  const[count, setCount] = useState(0);
  const[prices, setPrices] = useState(price);

  const handleIncrement = () => {
    setCount(count + 1);
    setPrices(prices + price);
  }
  const handleDecrement = () => {
    setCount(count - 1);
    setPrices(prices - price);
  }

  return (
    <div className="flex p-4 border-b-2">
      <div className='w-20'>
        <img src={image}/>
      </div>
      <div className='pl-5'>
        <p className='text-black'>{name}</p>
        <p className='text-black font-bold'>Price:{prices}$</p>
        <div className='flex mt-5 justify-around'>
          <button className='text-black py-1 px-3 rounded-lg bg-slate-400' disabled={count === 0} onClick={()=>handleDecrement()}>-</button>
            <p className='text-black'>
              {count}
            </p>
          <button className='text-black py-1 px-3 rounded-lg bg-slate-400' onClick={()=>handleIncrement()}>+</button>
        </div>
      </div>
    </div>
  )
}

export default Cart