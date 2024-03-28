const FeaturedText = () => {
  return (
    <div className="col-lg-5  col-md-6">
      <div className="featured-text d-flex flex-column gap-2">
        <div className="title">
          <h4 className="m-0">FEATURED</h4>
          <h2 className="m-0">NIKE SNEAKERS AIR LANCING SHOES</h2>
        </div>
        <p className="text-black-50 fw-bold">
          The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball
          OG that puts a fresh spin on what you know best: durably stitched
          overlays, clean finishes and the perfect amount of flash to make you
          shine.
        </p>
        <button className="main-btn">
          <a
            className="text-white"
            target="_blank"
            rel="noreferrer"
            href="https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/"
          >
            Explore More
          </a>
        </button>
      </div>
    </div>
  );
};

export default FeaturedText;
