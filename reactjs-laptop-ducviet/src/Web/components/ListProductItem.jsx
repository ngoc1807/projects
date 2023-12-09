import React from "react";
import "./ListProductItem.scss";

import {
  IMAGE_SELLER,
  IMAGE_STATUS_HOT,
  ICON_APPLE_24,
  ICON_IBM_24,
  ICON_ASUS_24,
  ICON_INTEL_24,
  ICON_DELL_24,
  ICON_HP_24,
  ICON_LENOVO_24,
  ICON_PLUS_CIRCLE_12,
  ICON_GIFT_RED_16,
  IMAGE_STATUS_DISCOUNT,
} from "./../../asset/imageJs/index";
const ListProductItem = (props) => {
  const amount = props && props.amount ? props.amount : 5;

  const title = props && props.title ? props.title : "hello";
  return (
    <div className="ListProductItem">
      <ProductTitle title={title} />
      <ProductContent amount={amount} />
    </div>
  );
};

export const ProductTitle = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="ListProductItem__title">
      <div className="ListProductItem__title-left">
        <div className="one">
          <div className="text">{title}</div>
          <div className="two"></div>
          <div className="dot"></div>
        </div>

        <div className="three">SALE TUU TRUONG</div>
      </div>
      <div className="ListProductItem__title-right">
        <div className="one">
          <ul>
            <li>
              <a href="">
                <ICON_APPLE_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_IBM_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_ASUS_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_INTEL_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_DELL_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_HP_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_LENOVO_24 />
              </a>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li className="active">
              <a>Mức giá</a>
            </li>
            <li>
              <a href="">10 triệu - 15 triệu</a>
            </li>
            <li>
              <a href="">10 triệu - 15 triệu</a>
            </li>
            <li>
              <a href="">15 triệu - 25 triệu</a>
            </li>
            <li>
              <a href="">Trên 25 triệu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ProductContent = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <>
      <div className="ListProductItem__content">
        <ProductItem amount={amount} />
      </div>
      <div className="ListProductItem__showMore">
        <button className="btn">Xem thêm</button>
      </div>
    </>
  );
};

export const ProductItem = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return a.map((i, k) => (
    <div
      href="/"
      className={`ListProductItem__content-item ${
        (k + 1) % 5 ? "" : "no_left"
      }`}
      key={k}
    >
      <a href="/" className={`ListProductItem__content-item-one`} key={k}>
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
      <div className="ListProductItem__content-item-two">
        <div className="present">
          <div className="icon">
            <ICON_GIFT_RED_16 />
          </div>
          <div className="text">Quà tặng +800.000đ Quà tặng +800.000đ</div>

          <div className="btn prepare">
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

export default ListProductItem;
