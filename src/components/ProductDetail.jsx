  const ProductDetail = ({ img, year, price, rate, sizes, colors, orders }) => {
    return (
      <div className="product-detail p-3 d-flex flex-column gap-3 ">
        <div className="product-img rounded-3 over-flow-hidden">
          <img src={img} className="img-fluid w-100 -block" alt="product-img" />
        </div>
        <p>
          <span className="fw-bold">Production Year: </span>
          {year}
        </p>
        <p>
          <span className="fw-bold">Price: </span>₹{price}
        </p>
        <p>
          <span className="fw-bold">Rate: </span>
          <i className="fa-solid fa-star"></i> {rate}
        </p>
        <p>
          <span className="fw-bold">Sizes Available: </span>
          {sizes}
        </p>
        <p>
          <span className="fw-bold">Colors Available: </span>
          {colors}
        </p>
        <p>
          <span className="fw-bold">No. Orders: </span>
          {orders}
        </p>
      </div>
    );
  };

  export default ProductDetail;
