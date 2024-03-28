import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartCount = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispacth = useDispatch();
  
  return (
    <div className="cart-count p-2 rounded-2 border border-1 sticky-top d-flex flex-wrap gap-3 align-items-center justify-content-center justify-content-sm-between">
      <p className="m-0">
        <button
          onClick={() => dispacth(cartActions.hideCart())}
          className="main-btn me-1"
        >
          <i className="fa-solid fa-angles-left fw-bolder"></i>
        </button>
        Your Have
        <span className="p-1 rounded-3 cart-num text-white">
          {cartItems.length} items
        </span>
      </p>
      <button
        onClick={() => dispacth(cartActions.clearItems())}
        className="main-btn px-2 text-white bg-dark"
      >
        X
      </button>
    </div>
  );
};

export default CartCount;
