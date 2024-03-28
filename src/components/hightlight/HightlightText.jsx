const HightlightText = () => {
  return (
    <div className="col-lg-5 offset-lg-1 col-md-6">
      <div className="hightlight-text d-flex flex-column gap-2">
        <div className="title">
          <h4 className="m-0">HIGHLIGHTS</h4>
          <h2 className="m-0">NIKE AIR WITH LIMITLESS CHOICES</h2>
        </div>
        <p className="text-black-50 fw-bold">
          Our Purpose is to move the world forward. We take action by building
          community, protecting our planet and increasing access to sport.
        </p>
        <button className="main-btn">
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://www.nike.com/launch/t/nocta-hot-step-black-gold"
          >
            Explore More
          </a>
        </button>
      </div>
    </div>
  );
};

export default HightlightText;
