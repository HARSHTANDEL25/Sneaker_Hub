import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductDetail from "../ProductDetail";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const TopBox = (props) => {
  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    const item = { ...props.topItem };
    dispatch(cartActions.addItem(item));
  };
  return (
    <div className="col-md-6 col-lg-3">
      <div
        className={`top-box p-3 rounded-4 d-flex flex-column justify-content-between align-items-center text-center ${props.topItem.classN}`}
      >
        <div className="product-title text-white">
          <h6>{props.topItem.title}</h6>
          <small className="m-0">MEN Running Shoes</small>
        </div>
        <div className="product-data d-flex gap-5 align-items-center">
          <small className="py-1 px-2 bg-white rounded-3 fw-bold">
          ₹{props.topItem.price}
          </small>
          <small className="text-white">
            <i className="fa-solid fa-star"></i> {props.topItem.rate}
          </small>
        </div>
        <div className="product-shop d-flex gap-5 align-items-center">
          <button onClick={() => addToCart()} className="main-btn">
            <i className="fa-solid fa-cart-shopping"></i>
          </button>
          <Button
            className="main-btn text-black bg-white"
            onClick={() => setLgShow(true)}
          >
            Details
          </Button>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                {props.topItem.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ProductDetail
                img={props.topItem.img}
                year={props.topItem.year}
                price={props.topItem.price}
                sizes={props.topItem.sizes}
                colors={props.topItem.colors}
                orders={props.topItem.orders}
                rate={props.topItem.rate}
              />
            </Modal.Body>
          </Modal>
        </div>
        <div className="product-img">
          <img
            src={props.topItem.img}
            className="img-fluid d-block"
            alt={props.topItem.title}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBox;
