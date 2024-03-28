import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import { useEffect } from "react";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);

  

  useEffect(() => {
    dispatch(cartActions.totalCart());
  }, [cartItems, dispatch]);


  
  return (
    <div className="cart-item h-100 py-3">
      <div className="d-flex flex-column position-relative top-0 p-3 gap-4 overflow-scroll h-75">
        {cartItems.map((cartItem) => {
          return (
            <div
              key={cartItem.id}
              className={`py-2 px-3 rounded d-flex gap-3 flex-wrap justify-content-center justify-content-md-between text-center align-items-center ${cartItem.classN}`}
            >
              <div className={`item-img`}>
                <img src={cartItem.img} className="img-fluid w-100" alt="" />
              </div>
              <div className="item-details">
                <h6 className="m-0 text-white">{cartItem.title}</h6>
                <small className="text-white-50">MEN Running Shoes</small>
                <div className="mt-2 d-flex justify-content-center align-items-center gap-3">
                  <button
                    onClick={() =>
                      dispatch(cartActions.decreaseQuantity(cartItem))
                    }
                    className="main-btn bg-black text-white"
                  >
                    -
                  </button>
                  <p className="m-0 main-btn bg-black text-white">
                    {cartItem.cartQuantity}
                  </p>
                  <button
                    onClick={() =>
                      dispatch(cartActions.increaseQuantity(cartItem))
                    }
                    className="main-btn bg-black text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="item-price d-flex flex-column justify-content-center justify-content-sm-between">
                <p className="text-white">
                ₹{cartItem.price * cartItem.cartQuantity}
                </p>
                <button
                  onClick={() => dispatch(cartActions.removeItem(cartItem))}
                  className="main-btn bg-black text-white"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total-price position-relative h-25 d-flex justify-content-center align-items-center flex-column w-100 rounded-4 bottom-0  bg-light p-3">
        <div className="d-flex flex-wrap justify-content-center gap-3 justify-content-md-between align-items-center">
          <h5>SUBTOTAL</h5>
          <h6 className="main-btn text-white bg-black">₹{totalAmount}</h6>
        </div>
        <p className="text-center">
          Taxes and Shipping Will Calculate At Shipping
        </p>
        <a href="https://buy.stripe.com/test_cN2bJc6Tl3cYfrGaEH">
        <button className="main-btn  text-white bg-black w-full">
          Check Out
        </button >
        </a>
      </div>
    </div>
  );
};

export default CartItem;
