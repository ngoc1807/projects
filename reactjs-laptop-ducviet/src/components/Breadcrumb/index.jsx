import React from "react";
import { ICON_ARROW_RIGHT_16 } from "../../asset/imageJs";

function Breadcrumb(props) {
  return (
    <div className="Breadcrumb">
      <div className="box">
        <div className="box__text">
          <a href="#">Trang chủ</a>
        </div>
        <div className="box__icon">
          <span>
            <ICON_ARROW_RIGHT_16 />
          </span>
        </div>
        <div className="box__text">
          <a href="#">Laptop</a>
        </div>
        <div className="box__icon">
          <span>
            <ICON_ARROW_RIGHT_16 />
          </span>
        </div>
        <div className="box__text active">
          <a href="#">Macbook</a>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
