import "./top.css";
import { TopSalesData } from "../../data";
import TopBox from "./TopBox";

const Top = () => {
  return (
    <div className="top section-padding">
      <div className="container">
        <h3 className="m-0 mb-3">Top Rated Sales</h3>
        <div className="row gy-4 align-items-center">
          {TopSalesData.map((topItem) => {
            return <TopBox key={topItem.id} topItem={topItem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Top;
