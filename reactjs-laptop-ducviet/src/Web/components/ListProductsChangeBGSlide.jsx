import React from "react";

import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_GIFT_RED_16,
  ICON_PLUS_CIRCLE_12,
  IMAGE_SELLER,
  IMAGE_STATUS_DISCOUNT,
  IMAGE_STATUS_HOT,
} from "./../../asset/imageJs/index";
import "./ListProductsChangeBGSlide.scss";
const ListProductsChangeBGSlide = (props) => {
  const amount = props && props.amount ? props.amount : 5;

  const title = props && props.title ? props.title : "hello";

  return (
    <div className="ListProductsChangeBGSlide">
      <ProductTitleAdv title={title} />
      <ProductContentAdv amount={amount} />
    </div>
  );
};

export default ListProductsChangeBGSlide;

const ProductTitleAdv = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="ListProductsChangeBGSlide__title">
      <div className="ListProductsChangeBGSlide__title-left">{title}</div>
      <div className="ListProductsChangeBGSlide__title-right">
        <ul>
          <li>
            <a href="">LAPTOP</a>
          </li>
          <li>
            <a href="">MÁY TÍNH</a>
          </li>
          <li>
            <a href="">LINH KIỆN</a>
          </li>
          <li>
            <a href="">THIẾT BỊ MẠNG</a>
          </li>
          <li className="active">
            <a href="">TẤT CẢ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ProductContentAdv = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <div className="ListProductsChangeBGSlide__content">
      <div className="sliderCustom">
        <div id="sildeproduct1" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#sildeproduct1"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#sildeproduct1" data-slide-to="1"></li>
            <li data-target="#sildeproduct1" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="list">
                <ProductItemAdv amount={amount} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="list">
                <ProductItemAdv amount={amount} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="list">
                <ProductItemAdv amount={amount} />
              </div>
            </div>
          </div>
          <a
            className="iconLeft"
            href="#sildeproduct1"
            role="button"
            data-slide="prev"
          >
            <div className="iconPrev">
              <ICON_ARROW_LEFT_16 />
            </div>
          </a>
          <a
            className="iconRight"
            href="#sildeproduct1"
            role="button"
            data-slide="next"
          >
            <div className="iconNext">
              <ICON_ARROW_RIGHT_16 />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProductItemAdv = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return a.map((i, k) => (
    <div
      href="/"
      className={`ListProductsChangeBGSlide__content-item ${
        (k + 1) % 5 ? "" : "no_left"
      }`}
      key={k}
    >
      <a
        href="/"
        className={`ListProductsChangeBGSlide__content-item-one`}
        key={k}
      >
        <div className="image">
          {/* <div className="image__status">
            <img src={IMAGE_STATUS_HOT} alt="" />
          </div>
        */}
          <div className="image__status2">
            <img src={IMAGE_STATUS_DISCOUNT} alt="" />
          </div>
          <img src={IMAGE_SELLER} alt="" className="main" />
        </div>
        <div className="desc">
          <div className="desc__code">
            <div className="adv">
              <div className="left">%</div>
              <div className="right">SALE sinh nhật</div>
            </div>
          </div>
          <div className="desc__title">
            <span>
              Macbook Pro 13 inch 2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13
              inch 2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13 inch 2020 Quad
              Core I7 2.0Ghz 16
            </span>
          </div>
          <div className="desc__info">
            <div className="info__left">
              <div className="price-new">22.000.000đ</div>
              <div className="price-old">30.000.000đ</div>
            </div>
            <div className="info__right">
              <span>-20%</span>
            </div>
          </div>
          <div className="info__note">
            <span>Mua trả góp chỉ từ 499.000đ/ tháng</span>
          </div>
        </div>
      </a>
      <div className="ListProductsChangeBGSlide__content-item-two">
        <div className="present">
          <div className="icon">
            <ICON_GIFT_RED_16 />
          </div>
          <div className="text">Quà tặng +800.000đ Quà tặng +800.000đ </div>

          <div className="prepare">
            <span>
              <ICON_PLUS_CIRCLE_12 />
            </span>
            so sánh
          </div>
        </div>
      </div>
    </div>
  ));
};
