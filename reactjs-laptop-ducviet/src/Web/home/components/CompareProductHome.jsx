import React from "react";
import "./compareProductHome.scss";
const CompareProductHome = () => {
  return (
    <div className="CompareProductHome">
      <div className="list">
        <div className="itemCompare">
          <button className="close1 btn">&times;</button>

          <div className="box-img">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="box-text">
            Macbook Pro 13 inch 2020 Quad Core I5 2.0 Macbook Pro 13 inch 2020
            Quad Core I5 2.0
          </div>
        </div>

        <div className="itemCompare">
          <button className="close1 btn">&times;</button>
          <div className="box-img">
            <img src="https://picsum.photos/200/300" alt="" />
          </div>
          <div className="box-text">
            Macbook Pro 13 inch 2020 Quad Core I5 2.0 Macbook Pro 13 inch 2020
            Quad Core I5 2.0
          </div>
        </div>
      </div>
      <div className="btnCompare">
        <button className="btn compare">So sánh</button>
        <button className="btn cancel">Hủy</button>
      </div>
    </div>
  );
};

export default CompareProductHome;
