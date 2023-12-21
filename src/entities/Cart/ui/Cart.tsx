import React from 'react'
import { ICart } from '../types'

const Cart = ({id, name, price}: ICart) => {
  return (
    <div className="p-4 border-b-2">
      <p className='text-black'>{id}: {name}</p>
      <p className='text-black font-bold'>Price:{price}</p>
    </div>
  )
}

export default Cart