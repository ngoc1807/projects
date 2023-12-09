import React from "react";
import { ICON_CART_24 } from "../../asset/imageJs";

import "./FooterCart.scss";
const FooterCart = () => {
  return (
    <div className="FooterCartMobile container-fluid" id="FooterMobile">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__price">
            <div className="new">22.000.000đ</div>
            <div className="old">26.000.000đ</div>
            <div className="note">
              <span>Đã bao gồm VAT</span>
            </div>
          </div>

          <div className="box__content">
            <button className="box__content-buy btn">
              <div className="left">
                <ICON_CART_24 />
              </div>
              <div className="right">
                <div className="text1">Mua ngay</div>
                <div className="text2">giao tan noi</div>
              </div>
            </button>

            <button className="box__content-add btn">
              <ICON_CART_24 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCart;
