import React from "react";
import {
  ICON_ARROW_LEFT_24,
  ICON_BAG_16,
  ICON_HOME_16,
  ICON_MESSENGER_LINE_24,
  ICON_PHONE_16,
  ICON_QUADSQUARE_LINE_16,
  ICON_THREE_DOT_24,
} from "../../asset/imageJs";

export const HeaderMobile2 = ({ label = "demo" }) => {
  return (
    <div className="HeaderMobile2 container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <button className="box__btnOne btn">
            <ICON_ARROW_LEFT_24 />
          </button>
          <div className="box__label">{label}</div>
          <button className="box__btnTwo btn">
            <ICON_MESSENGER_LINE_24 />
          </button>
          <div className="box__btnThree">
            <button
              className=" btn dropdown-toggle"
              id="dropdownMenuHeaderMobile"
              data-toggle="dropdown"
            >
              <ICON_THREE_DOT_24 />
            </button>
            <div
              class="dropdown-menu menuOne"
              aria-labelledby="dropdownMenuHeaderMobile"
            >
              <a class="menuOne-item" href="#">
                <ICON_HOME_16 /> <span>Quay lại trang chủ</span>
              </a>
              <a class="menuOne-item" href="#">
                <ICON_BAG_16 /> <span>Sản phẩm đã xem</span>
              </a>
              <a class="menuOne-item" href="#">
                <ICON_QUADSQUARE_LINE_16 /> <span>Danh mục sản phẩm</span>
              </a>
              <a class="menuOne-item" href="#">
                <ICON_PHONE_16 /> <span>Liên hệ hỗ trợ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
