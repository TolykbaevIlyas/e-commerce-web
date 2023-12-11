import Favor from '@/(entities)/Favor/favor'
import Products from '@/widgets/products/products'
import React from 'react'

const HomePage = () => {
  return (
    <div>
        <Products/>
        <Favor></Favor>
    </div>
  )
}

export default HomePage