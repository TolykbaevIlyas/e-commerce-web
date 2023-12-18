import React from 'react'
import { ICart } from '../types'

const Cart = ({id, name}: ICart) => {
  return (
    <div className="p-4">
      <p>{id}: {name}</p>
      
    </div>
  )
}

export default Cart