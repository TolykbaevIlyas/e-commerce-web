import { btn } from "../type"

const Btn = ({text,icon,count,className,onClick}:btn) => {
  return (
    <div className={className}>{icon}{count}</div>
  )
}

export default Btn