import { IFavor } from "../types"


const FavorObj = ({id,name,price,image} :IFavor) => {
  //console.log(props);
  return (
    <div className="flex p-4 border-b-2">
      <div className='w-20'>
        <img src={image}/>
      </div>
      <div className='pl-5'>
        <p className='text-black'>{name}</p>
        <p className='text-black font-bold'>Price:{price}$</p>
      </div>
    </div>
  )
}

export default FavorObj