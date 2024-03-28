import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ProductDetail from "../ProductDetail";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const PopularBox = (props) => {

  const [lgShow, setLgShow] = useState(false);
  const dispatch = useDispatch();
  const addToCart = () => {
    const item = { ...props.popularItem };
    dispatch(cartActions.addItem(item));
  };
  
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className={`popular-box p-3 rounded-4 align-items-center ${props.popularItem.classN}`}
      >
        <div className="row align-items-center">
          <div className="col-6">
            <div className="details d-flex flex-column gap-2">
              <div className="product-title text-white">
                <h6>{props.popularItem.title}</h6>
                <small className="m-0">MEN Running Shoes</small>
              </div>
              <div className="product-data d-flex gap-5 align-items-center">
                <small className="py-1 px-2 bg-white rounded-3 fw-bold">
                ₹{props.popularItem.price}
                </small>
                <small className="text-white">
                  <i className="fa-solid fa-star"></i> {props.popularItem.rate}
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
                      {props.popularItem.title}
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <ProductDetail
                      img={props.popularItem.img}
                      year={props.popularItem.year}
                      price={props.popularItem.price}
                      sizes={props.popularItem.sizes}
                      colors={props.popularItem.colors}
                      orders={props.popularItem.orders}
                      rate={props.popularItem.rate}
                    />
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="product-img">
              <img
                src={props.popularItem.img}
                className="img-fluid d-block"
                alt={props.popularItem.title}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBox;
