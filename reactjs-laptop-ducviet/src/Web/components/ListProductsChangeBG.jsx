import React from "react";

import {
  ICON_GIFT_RED_16,
  ICON_PLUS_CIRCLE_12,
  IMAGE_SELLER,
  IMAGE_STATUS_DISCOUNT,
  IMAGE_STATUS_HOT,
} from "./../../asset/imageJs/index";
import "./ListProductsChangeBG.scss";
const ListProductsChangeBG = (props) => {
  const amount = props && props.amount ? props.amount : 5;

  const title = props && props.title ? props.title : "hello";

  return (
    <div className="ListProductsChangeBG">
      <ProductTitleAdv title={title} />
      <ProductContentAdv amount={amount} />
    </div>
  );
};

export default ListProductsChangeBG;

const ProductTitleAdv = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="ListProductsChangeBG__title">
      <div className="ListProductsChangeBG__title-left">{title}</div>
      <div className="ListProductsChangeBG__title-right">
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
    <div className="ListProductsChangeBG__content">
      <ProductItemAdv amount={amount} />
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
      className={`ListProductsChangeBG__content-item ${
        (k + 1) % 5 ? "" : "no_left"
      }`}
      key={k}
    >
      <a href="/" className={`ListProductsChangeBG__content-item-one`} key={k}>
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
      <div className="ListProductsChangeBG__content-item-two">
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
