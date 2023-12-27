'use client'
import React, { useState } from 'react'
import { ICategoryBtn } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '@/shared/lib/redux/store';

const CategoryButton = ({name,type,updateCategoryProducts,setCategories}: ICategoryBtn) => {
    const Theme = useSelector((state: RootState) => state.switchTheme);
    const [category, setCategory] = useState(false);

    const CategoryHandle = (categoryName:string)=>{
        updateCategoryProducts({category: categoryName});
        setCategory(!category);
        setCategories(!category)
      }

  return (
  <div className='pl-5'>
    {category === false 
    ? <button className={`py-2 px-10 ${Theme.buttonColor} rounded-full`} onClick={()=>CategoryHandle(`${type}`) }> <p className={`${Theme.textColor}`}>{name}</p></button> 
    : <button className={`py-2 px-10 ${Theme.disabledButtonColor} rounded-full`} onClick={()=>CategoryHandle(`${type}`) }><p className="absolute pl-28">X</p> <p className={`${Theme.textColor}`}>{name}</p></button>}
  </div>
  )
}

export default CategoryButton