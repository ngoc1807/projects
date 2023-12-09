import React from "react";
import {
  ICON_MINUS_LINE_24,
  ICON_PLUS_LINE_24,
  ICON_STAR_16,
  ICON_TRASH_16,
  ICON_TRASH_24,
} from "../../asset/imageJs";
import { CheckBoxCustom } from "../../components/Form";

function FooterItem(props) {
  return (
    <div className="FooterItem container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__first">
            <div className="text">Số tiền (3 sản phẩm)</div>
            <div className="price">22.000.000đ</div>
          </div>
          <div className="box__btn">
            <button className="btn">Tiếp tục</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterItem;
