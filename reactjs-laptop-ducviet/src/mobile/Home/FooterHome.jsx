import React from "react";
import { ICON_TOGGLE_WHITE_24 } from "../../asset/imageJs";
import "./FooterHome.scss";
const FooterHome = ({ position }) => {
  return (
    <div
      className="FooterHome container-fluid"
      id="FooterMobile"
      style={position ? { position: position } : { position: "sticky" }}
    >
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__item ">
            <a href="#">
              <span>Học tập văn phòng</span>
            </a>
          </div>

          <div className="box__item ">
            <a href="">
              <span>Gaming</span>
            </a>
          </div>

          <div className="box__item ">
            <a href="">
              <span>Đồ họa thiết kế</span>
            </a>
          </div>

          <div className="box__item ">
            <a href="">
              <span>Cao cấp sang trọng</span>
            </a>
          </div>
          <div className="box__item last">
            <a href="#">
              <ICON_TOGGLE_WHITE_24 />
              <div>Xem tất cả</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterHome;
