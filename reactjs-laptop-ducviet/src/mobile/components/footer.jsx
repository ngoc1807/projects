import React from "react";
import {
  ICON_CART_LINE_24,
  ICON_DOCUMENT_LINE_24,
  ICON_HOME_24,
  ICON_PERSON_LINE_24,
  ICON_QUADSQUARE_LINE_24,
} from "../../asset/imageJs";

import "./footer.scss";
function FooterMobile(props) {
  return (
    <div className="FooterMobile container-fluid" id="FooterMobile">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__item active">
            <ICON_HOME_24 />
            <span>Trang chủ</span>
          </div>
          <div className="box__item ">
            <ICON_QUADSQUARE_LINE_24 />
            <span>Danh mục</span>
          </div>
          <a className="box__item-cart  " href="#a">
            <div class="box">
              <ICON_CART_LINE_24 />
              <div className="text">
                <span>1</span>
              </div>
            </div>
          </a>
          <div className="box__item ">
            <ICON_DOCUMENT_LINE_24 />
            <span></span>
          </div>

          <div className="box__item ">
            <ICON_PERSON_LINE_24 />
            <span>Người dùng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
