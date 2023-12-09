import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CART_24,
  ICON_CHECKED_16,
  ICON_CHECKED_WHITE,
  ICON_CHECK_CIRCLE_16,
} from "../../asset/imageJs";

import { CheckBoxCustom } from "./../../components/Form";

function BundleProducts(props) {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }
  return (
    <div className="BundleProducts">
      <div className="box">
        <div className="box__title">
          <div className="box__title-left">Sản phẩm được đi kèm</div>
          <div className="box__title-right">
            <button className="btn btnCart active">
              <ICON_CHECKED_WHITE />
              <span>Mua thêm 3 sản phẩm (120.000.000đ)</span>
            </button>

            <button className="btn btnCart d-none ">
              <ICON_CART_24 />
              <span>Mua thêm sản phẩm</span>
            </button>

            <div className="btnOption">
              <button className="btnOption__left btn">
                <ICON_ARROW_LEFT_16 />
              </button>

              <button className="btnOption__right btn ">
                <ICON_ARROW_RIGHT_16 />
              </button>
            </div>
          </div>
        </div>

        <div className="box__content">
          {a.map((i, k) => (
            <div className="box__content-item">
              <div className="top">
                <div className="checked">
                  <CheckBoxCustom type={1} />
                </div>
                <div className="image">
                  <img src="https://picsum.photos/600/400" alt="" />
                </div>
              </div>

              <div className="desc">
                <div className="desc__name">
                  RAM DDR4 bus 2400MHz - 8GB - Hàng chính hãng
                </div>
                <div className="desc__price">22.000.000đ</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BundleProducts;
