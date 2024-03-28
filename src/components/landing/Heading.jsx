import LandingContent from "./LandingContent";
import LandingVideos from "./LandingVideos";

const Heading = () => {
  return (
    <div className="heading py-5 d-flex justify-content-center-align-items-center">
      <div className="container">
        <div className="row text-center gy-5 justify-content-center">
          <div className="col-lg-3">
            <LandingVideos />
          </div>
          <div className="col-lg-8 col-offset-lg-1">
            <LandingContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
