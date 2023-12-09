import React from "react";
import empty1 from "./../../asset/image/home/empty1.png";

function Content(props) {
  return (
    <div className="contentItem">
      <div className="box">
        <div className="box__content">
          <div className="box__content-image">
            <img src={empty1} alt="" />
          </div>
          <div className="box__content-title">
            Chưa có sản phẩm trong giỏ hàng
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
