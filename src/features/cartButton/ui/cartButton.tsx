import { FaShoppingCart } from "react-icons/fa"
import { IcartBtn } from "../types"
import { RootState } from "@/shared/lib/redux/store";
import { useSelector } from "react-redux";

const CartButton = ({setIsCartOpen, isCartOpen}: IcartBtn) => {
    const cardsCart = useSelector((state: RootState) => state.cartReducer);
    const Theme = useSelector((state: RootState) => state.switchTheme);
  return (
    <li className="list-none py-4 px-2" onClick={()=> setIsCartOpen(!isCartOpen)}>
      <a href="#"><FaShoppingCart size="30px" color={`${Theme.iconColor}`}/>
        <p className="-my-11 z-20 text-orange-700 font-bold text-xl">
          {cardsCart.Cart.length}
        </p>
      </a>
    </li>
  )
}

export default CartButton