import "./popular.css";
import { PopularData } from "../../data";
import PopularBox from "./PopularBox";

const Popular = () => {
  return (
    <div className="popular-sales section-padding">
      <div className="container">
        <h3 className="m-0 mb-3">Popular Sales</h3>
        <div className="row gy-4 align-items-center">
          {PopularData.map((popularItem) => {
            return (
              <PopularBox key={popularItem.id} popularItem={popularItem} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popular;
