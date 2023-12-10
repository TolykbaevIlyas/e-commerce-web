'use client'
import {IProduct} from './types/index'


const ProductCard = ({name,image,desc,price,rate}:IProduct) => {
    // const {data} = useGetAllProductsQuery()
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
      
    </div>

  )
}

export default ProductCard