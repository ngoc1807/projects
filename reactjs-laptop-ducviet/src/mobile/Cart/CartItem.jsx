import React from "react";
import {
  ICON_MINUS_LINE_24,
  ICON_PLUS_LINE_24,
  ICON_STAR_16,
  ICON_TRASH_16,
  ICON_TRASH_24,
} from "../../asset/imageJs";
import { CheckBoxCustom } from "../../components/Form";

function CartItem(props) {
  let a = [];
  for (let i = 0; i < 2; i++) {
    a.push({ id: i });
  }
  return (
    <div className="CartItem container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__title">
            <CheckBoxCustom label="Đã chọn 03/03" />
          </div>
          <div className="box__content ">
            {a.map((i, k) => (
              <div className="box__content-item" key={k}>
                <div className="first">
                  <CheckBoxCustom />
                </div>
                <div className="second">
                  <img
                    src="https://picsum.photos/600/400
       "
                    alt=""
                  />
                </div>

                <div className="three">
                  <div className="three__title">
                    <div className="three__title-text">
                      <div className="text">
                        Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
                      </div>
                      <div className="summary">
                        Macbook Air M1 8GB 256GB, RAM 8GB, SSD 256GB
                      </div>
                    </div>

                    <button className="btn three__title-delete">
                      <ICON_TRASH_16 />
                    </button>
                  </div>

                  <div className="three__price">
                    <div className="three__price-left">
                      <div className="new">12.000.000đ</div>
                      <div className="old">14.000.000đ</div>
                    </div>

                    <div className="three__price-right">
                      <button className="btn">
                        <ICON_MINUS_LINE_24 />{" "}
                      </button>
                      <div className="amount"> 3</div>
                      <button className="btn">
                        {" "}
                        <ICON_PLUS_LINE_24 />{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
