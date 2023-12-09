import React from "react";
import { HeaderMobile2 } from "../components/header2";
import empty1 from "./../../asset/image/home/empty1.png";

function CartEmptyMobile(props) {
  return (
    <>
      <HeaderMobile2 label="Giỏ hàng" />
      <section className="CartEmpty container-fluid">
        <div className="row">
          <div className="box col-12 w-100">
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
      </section>
    </>
  );
}

export default CartEmptyMobile;
