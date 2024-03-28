import EmptyImg from "../../assets/emptybag.png";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const CartEmpty = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart-empty h-100 d-flex flex-column justify-content-center align-items-center">
      <img src={EmptyImg} className="img-fluid d-block" alt="empty bag" />
      <button
        onClick={() => dispatch(cartActions.hideCart())}
        className="main-btn text-black-50 fw-bold mt-4 px-3"
      >
        <i className="fa-solid fa-chevrons-left"></i>
        <i className="fa-solid fa-angles-left me-2"></i>Back to Store
      </button>
    </div>
  );
};

export default CartEmpty;
