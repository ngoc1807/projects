import React from "react";

import "./TitleItem.scss";

const TitleItem = () => {
  return (
    <div className="TitleItem">
      <div className="text">MUA TRẢ GÓP</div>
      <div className="box">
        <div className="box-image">
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className="box-content">
          <div className="box-content-title">
            Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16 Win10 (82H38918293V)
          </div>
          <div className="box-content-price">
            <div className="new">
              Giá: <span>20.000.000đ</span>
            </div>
            <div className="old">14.000.000đ</div>
          </div>
          <div className="box-content-more">
            <a href="">Xem chi tiết khuyến mại</a>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="box-image">
          <img src="https://picsum.photos/200/200" alt="" />
        </div>
        <div className="box-content">
          <div className="box-content-title">
            Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16 Win10 (82H38918293V)
          </div>
          <div className="box-content-price">
            <div className="new">
              Giá: <span>20.000.000đ</span>
            </div>
            <div className="old">14.000.000đ</div>
          </div>
          <div className="box-content-more">
            <a href="">Xem chi tiết khuyến mại</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleItem;
