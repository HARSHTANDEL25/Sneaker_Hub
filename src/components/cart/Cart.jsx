import "./cart.css";
import CartCount from "./cartCount";
import CartEmpty from "./CartEmpty";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div className="cart">
      <div className="shop-cart p-3 rounded-4 bg-white h-100">
        <CartCount />
        {cartItems.length === 0 ? <CartEmpty /> : <CartItem />}
      </div>
    </div>
  );
};

export default Cart;
