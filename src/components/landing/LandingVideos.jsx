import { LandingVideosData } from "../../data";

const LandingVideos = () => {
  return (
    <div className="landing-videos d-flex flex-row flex-wrap justify-content-center flex-lg-column gap-5">
      {LandingVideosData.map((landVideo) => {
        return (
          <div key={landVideo.id} className="land-video rounded-4">
            <video controls autoPlay loop muted className="h-100 w-100">
              <source src={landVideo.clip} type="video/mp4" />
            </video>
          </div>
        );
      })}
    </div>
  );
};

export default LandingVideos;
