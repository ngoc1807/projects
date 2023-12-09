import React from "react";
import {
  ICON_ARROW_RIGHT_16,
  ICON_CAMERA,
  ICON_CORD,
  ICON_EAR_PHONE,
  ICON_LAMP,
  ICON_LAPTOP,
  ICON_MEMORIES,
  ICON_MOUSE,
  ICON_SCREEN,
  ICON_SEVER,
  ICON_WIFI,
  ICON_WINDOW,
  IMAGE_SLIDE1,
  ICON_ARROW_LEFT_16,
  IMAGE_SLIDE_LEFT1,
} from "./../../../asset/imageJs/index";

const ItemFirst = () => {
  return (
    <div className="ItemFirst">
      <div className="one d-flex">
        {/* <Menu /> */}
        <Slide />
        <ListImageOne />
      </div>
      <div className="two">
        <ListImageTwo />
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <ul className="menu__one  ">
      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_LAPTOP />
          </div>
          <div className="text">Máy tính xách tay - Laptop</div>
        </a>

        <div className="menu__two">
          <div className="box">
            <div className="box__empty"></div>

            <div className="box__list">
              <div className="menu__two-item">
                <div className="title">
                  <span>Thương hiệu</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                </div>
              </div>

              <div className="menu__two-item">
                <div className="title">
                  <span>Màu sắc</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="Acer"></a>
                  <a href="Apple"></a>
                </div>
              </div>

              <div className="menu__two-item">
                <div className="title">
                  <span>Màu sắc</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="Acer"></a>
                  <a href="Apple"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_SCREEN />
          </div>
          <div className="text">Máy tính - Máy chủ</div>
        </a>

        <div className="menu__two">
          <div className="box">
            <div className="box__empty"></div>

            <div className="box__list">
              <div className="menu__two-item">
                <div className="title">
                  <span>Thương hiệu</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                </div>
              </div>

              <div className="menu__two-item">
                <div className="title">
                  <span>Màu sắc</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="Acer"></a>
                  <a href="Apple"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_SEVER />
          </div>
          <div className="text">Máy in - Thiết bị văn phòng</div>
        </a>
        <div className="menu__two">
          <div className="box">
            <div className="box__empty"></div>

            <div className="box__list">
              <div className="menu__two-item">
                <div className="title">
                  <span>Thương hiệu</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="#">Acer</a>
                  <a href="#">Apple</a>
                </div>
              </div>

              <div className="menu__two-item">
                <div className="title">
                  <span>Màu sắc</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="Acer"></a>
                  <a href="Apple"></a>
                </div>
              </div>

              <div className="menu__two-item">
                <div className="title">
                  <span>Màu sắc</span>
                </div>
                <div className="list">
                  <a href="#">Sam sung</a>

                  <a href="#">Sony</a>
                  <a href="Acer"></a>
                  <a href="Apple"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_EAR_PHONE />
          </div>
          <div className="text">Linh kiện máy tính</div>
        </a>
      </li>
      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_SCREEN />
          </div>
          <div className="text">Màn hình máy tính</div>
        </a>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_MOUSE />
          </div>
          <div className="text">Gaming Gear</div>
        </a>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_WINDOW />
          </div>
          <div className="text">Microsoft Surface</div>
        </a>
      </li>
      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_MEMORIES />
          </div>
          <div className="text">TB lưu trữ, nghe nhìn</div>
        </a>
      </li>
      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_WIFI />
          </div>
          <div className="text">Thiết bị mạng</div>
        </a>
      </li>
      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_CAMERA />
          </div>
          <div className="text">Camera</div>
        </a>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_LAMP />
          </div>
          <div className="text">Phụ kiện laptop,PC</div>
        </a>
      </li>

      <li className="menu__one-item">
        <a href="#" className="menu__one-link">
          <div className="icon-left">
            <ICON_CORD />
          </div>
          <div className="text">Khác</div>
        </a>
      </li>
    </ul>
  );
};

const Slide = () => {
  return (
    <div className="sliderCustom">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block " src={IMAGE_SLIDE1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block " src={IMAGE_SLIDE1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block " src={IMAGE_SLIDE1} alt="Third slide" />
          </div>
        </div>
        <a
          className="iconLeft"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <div className="iconPrev">
            <ICON_ARROW_LEFT_16 />
          </div>
        </a>
        <a
          className="iconRight"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <div className="iconNext">
            <ICON_ARROW_RIGHT_16 />
          </div>
        </a>
      </div>
    </div>
  );
};
const ListImageOne = () => {
  return (
    <div className="ListImageOne">
      <div className="item">
        <img src={IMAGE_SLIDE_LEFT1} alt="" />
      </div>
      <div className="item">
        <img src={IMAGE_SLIDE1} alt="" />
      </div>
    </div>
  );
};

const ListImageTwo = () => {
  return (
    <div className="ListImageTwo">
      <div className="item">
        <img src={IMAGE_SLIDE_LEFT1} alt="" />
      </div>
      <div className="item">
        <img src={IMAGE_SLIDE1} alt="" />
      </div>
      <div className="item">
        <img src={IMAGE_SLIDE_LEFT1} alt="" />
      </div>
    </div>
  );
};

export default ItemFirst;
