import LandingImg from "../../assets/landing.png";

const LandingContent = () => {
  return (
    <div className="landing-content d-flex flex-column gap-3 align-items-center">
      <h1 className="landing-text text-white fw-bolder">
        Play With Electric Nike Adapt 2.0 Sneakers
      </h1>
      <img src={LandingImg} className="img-fluid d-block w-75" alt="landing" />
    </div>
  );
};

export default LandingContent;
