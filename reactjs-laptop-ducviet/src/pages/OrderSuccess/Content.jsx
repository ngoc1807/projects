import React from "react";
import received1 from "./../../asset/image/home/received1.png";

function Content(props) {
  return (
    <div className="contentItem">
      <div className="box">
        <div className="box__title">Giỏ hàng</div>

        <div className="box__content">
          <div className="box__content-image">
            <img src={received1} alt="" />
          </div>
          <div className="box__content-title">
            Đơn hàng đã được đặt hàng thành công
          </div>
          <div className="box__content-note">
            Mọi thông tin liên hệ Hotline: 0985 736 068 hoặc 024.6275.4433
          </div>
          <div className="box__content-btn">
            <button className="btn">Trở về trang chủ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
