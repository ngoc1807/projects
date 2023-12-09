import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CART_24,
  ICON_CHECKED_WHITE,
} from "../../asset/imageJs";

import "./CompareProduct.scss";
function CompareProduct(props) {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }
  return (
    <div className="CompareProduct container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__title">
            <div className="box__title-left">Sản phẩm so sánh</div>
          </div>

          <div className="box__content">
            {a.map((i, k) => (
              <div className="box__content-item">
                <div className="top">
                  <div className="image">
                    <img src="https://picsum.photos/600/400" alt="" />
                  </div>
                </div>

                <div className="desc">
                  <div className="desc__name">
                    RAM DDR4 bus 2400MHz - 8GB - Hàng chính hãng asd sadasd sas
                  </div>
                  <div className="desc__price">22.000.000đ</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareProduct;
