'use client'
import React, { useState } from 'react'
import { ICategoryBtn } from '../types';

const CategoryButton = ({name,type,updateCategoryProducts,setCategories}: ICategoryBtn) => {
    const [category, setCategory] = useState(false);

    const CategoryHandle = (categoryName:string)=>{
        updateCategoryProducts({category: categoryName});
        setCategory(!category);
        setCategories(!category)
      }

  return (
  <div className='pl-5'>
    {category === false 
    ? <button className="py-2 px-10 bg-orange-600 rounded-full" onClick={()=>CategoryHandle(`${type}`) }>{name}</button> 
    : <button className="py-2 px-10 bg-neutral-600 rounded-full" onClick={()=>CategoryHandle(`${type}`) }><p className="absolute pl-28">X</p> {name}</button>}
  </div>
  )
}

export default CategoryButton