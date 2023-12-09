import React from "react";
import {
  ICON_LAPTOP_BLACK_32,
  ICON_SEVER_32,
  ICON_PRINTF_BLACK_32,
  ICON_PHONE_32,
  ICON_SCREEN_32,
  ICON_MOUSE_BLACK_32,
  ICON_MEMORIES_BLACK_32,
  ICON_CORD_BLACK_32,
  ICON_LAPTOP_48,
} from "../../asset/imageJs";

import "./slideItem.scss";
function SlideItem(props) {
  return (
    <div className="SlideItem container-fluid">
      <div className="row">
        <BoxOne />
        <BoxTwo />
      </div>
    </div>
  );
}

const BoxOne = (props) => {
  return (
    <div
      id="CarouselHomeMobile"
      className="carousel slide w-100 col-12 boxOne"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#CarouselHomeMobile"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#CarouselHomeMobile" data-slide-to="1"></li>
        <li data-target="#CarouselHomeMobile" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/600/400" alt="First slide" />
        </div>
        <div className="carousel-item  ">
          <img src="https://picsum.photos/600/400" alt="First slide" />
        </div>
        <div className="carousel-item  ">
          <img src="https://picsum.photos/600/400" alt="First slide" />
        </div>
      </div>
    </div>
  );
};
const BoxTwo = (props) => {
  return (
    <div className="col-12  boxTwo w-100">
      <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_LAPTOP_BLACK_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Laptop</div>
      </a>

      <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_PRINTF_BLACK_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Linh và phụ kiện</div>
      </a>
      <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_PHONE_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Linh kiện máy tính</div>
      </a>
      <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_SCREEN_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Màn hình máy tính</div>
      </a>

      <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_SEVER_32 />
          </div>
        </div>
        <div className="boxTwo__item-text"> Laptop theo nhu cầu </div>
      </a>

      {/* <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_MOUSE_BLACK_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Gameing Gear</div>
      </a> */}

      {/* <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_MEMORIES_BLACK_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">TB lưu trữ, nghe nhìn</div>
      </a> */}

      {/* <a href="#" className="boxTwo__item">
        <div className="boxTwo__item-image">
          <div>
            <ICON_CORD_BLACK_32 />
          </div>
        </div>
        <div className="boxTwo__item-text">Khác</div>
      </a>
   */}
    </div>
  );
};

export default SlideItem;
