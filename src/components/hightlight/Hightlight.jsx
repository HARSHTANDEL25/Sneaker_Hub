import HightlightImg from '../../assets/hightlight.png'
import './hightlight.css'
import HightlightText from './HightlightText';

const Hightlight = () => {
    return (
      <div className="hightlight py-5">
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-md-6">
              <div className="hightlight-img">
                <img
                  src={HightlightImg}
                  className="img-fluid w-100 d-block"
                  alt="hightlight"
                />
              </div>
            </div>
            <HightlightText />
          </div>
        </div>
      </div>
    );
}
 
export default Hightlight;