import React from "react";
import "./ListProductViewed.scss";

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
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
} from "./../../asset/imageJs/index";
const ListProductViewed = (props) => {
  const amount = props && props.amount ? props.amount : 5;

  const title = props && props.title ? props.title : "hello";
  return (
    <div className="ListProductViewed">
      <ProductTitleViewedHome title={title} />
      <ProductContentCompare amount={amount} />
    </div>
  );
};

const ProductTitleViewedHome = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="ListProductViewed__title">
      <div className="ListProductViewed__title-left">
        <div className="one">
          <div className="text">{title}</div>
          <div className="two"></div>
          <div className="dot"></div>
        </div>

        <div className="three"></div>
      </div>
      <div className="ListProductViewed__title-right">
        <a href="" className="showMore">
          Xem thêm
        </a>
        <button className="btn btn__left">
          <ICON_ARROW_LEFT_16 />
        </button>
        <button className="btn btn__right">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
};
const ProductContentCompare = (props) => {
  const amount = props && props.amount ? props.amount : 1;
  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }
  return (
    <div className="ListProductViewed__content">
      {a.map((i, k) => (
        <a key={k} href="s" className="ListProductViewed__content-item">
          <div className="image">
            <img src={IMAGE_SELLER} alt="" />
          </div>
          <div className="desc">
            <div className="title">
              <span>
                {" "}
                Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16 Macbook Pro 13
                inch 2020 Quad Core I5 2.0Ghz 16 Macbook Pro 13 inch 2020 Quad
                Core I5 2.0Ghz 16
              </span>
            </div>

            <div className="price">
              <div className="left">
                <div className="price-new">22.000.000đ</div>
                <div className="price-old">30.000.000đ</div>
              </div>
              <div className="right">
                <span>-20%</span>
              </div>
            </div>

            <div className="compare">
              <button className="btn">So sánh</button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ListProductViewed;
