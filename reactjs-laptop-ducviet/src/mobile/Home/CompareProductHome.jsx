import React from "react";
import "./compareProductHome.scss";
const CompareProductHome = () => {
  return (
    <div className="CompareProductHome">
      <div className="box">
        <div className="list">
          <div className="itemCompare">
            <div className="box-text">
              Macbook Pro 13 inch 2020 Quad Core I5 2.0 Macbook Pro 13 inch 2020
              Quad Core I5 2.0
            </div>
            <button className="close1 btn">&times;</button>
          </div>
          <div className="itemCompare">
            <div className="box-text">
              Macbook Pro 13 inch 2020 Quad Core I5 2.0 Macbook Pro 13 inch 2020
              Quad Core I5 2.0
            </div>
            <button className="close1 btn">&times;</button>
          </div>
        </div>
        <div className="btnCompare">
          <button className="btn compare">So sánh</button>
          <button className="btn cancel">Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default CompareProductHome;
