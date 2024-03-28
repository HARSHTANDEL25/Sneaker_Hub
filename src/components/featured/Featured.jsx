import "./featured.css";
import FeaturedImg from "../../assets/featured.png";
import FeaturedText from "./FeaturedText";

const Featured = () => {
  return (
    <div className="featured py-5">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <FeaturedText />
          <div className="col-md-6 offset-lg-1">
            <div className="featured-img">
              <img
                src={FeaturedImg}
                className="img-fluid w-100 d-block"
                alt="hightlight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
