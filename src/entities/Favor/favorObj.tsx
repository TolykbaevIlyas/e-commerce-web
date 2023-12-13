import { IFavor } from "./types"


const FavorObj = ({id,name} :IFavor) => {
  //console.log(props);
  return (
    <div className="p-4">
      <p>{id}: {name}</p>
      
    </div>
  )
}

export default FavorObj