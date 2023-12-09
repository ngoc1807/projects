import React from "react";
import {
  ICON_APPLE_24,
  ICON_IBM_24,
  ICON_ASUS_24,
  ICON_INTEL_24,
  ICON_DELL_24,
  ICON_HP_24,
  ICON_LENOVO_24,
  ICON_CHECKED_16,
  IMAGE_STATUS_HOT,
  ICON_ARROW_DOWN_DOUBLE_24,
  IMAGE_STATUS_DISCOUNT,
  ICON_PLUS_CIRCLE_12,
  ICON_GIFT_RED_16,
} from "../../asset/imageJs";
import "./ProductItem.scss";
function ProductItem(props) {
  return (
    <div className="ProductItem container-fluid">
      <div className="row">
        <BoxOne title="Sản phẩm bán chạy" />
        <BoxTwo />
      </div>
    </div>
  );
}

const BoxOne = ({ title } = {}) => {
  let a = [];
  for (let i = 0; i < 3; i++) {
    a.push({ id: i });
  }

  return (
    <div className=" w-100 col-12 boxOne">
      <div className="boxOne__title">
        <div className="one">
          <div className="text">{title || "tieu de"}</div>
          <div className="two"></div>
          <div className="dot"></div>
        </div>

        <div className="three">SALE TUU TRUONG </div>
        {/* <div className="three1"> </div> */}
      </div>

      <div className="boxOne__title2">
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
          {/* <div>
            <a>Mức giá</a>
          </div>
          <div>
            <a>Mức giá</a>
          </div>

          <div>
            <a>Mức giá</a>
          </div>
          <div>
            <a>Mức giá</a>
          </div>
          <div>
            <a>Mức giá</a>
          </div>

          <div>
            <a>Mức giá</a>
          </div> */}
          <ul>
            <li className="active">
              <a>Mức giá</a>
            </li>
            <li>
              <a href="">10 tr - 15 tr</a>
            </li>
            <li>
              <a href="">10 tr - 15 tr</a>
            </li>
            <li>
              <a href="">15 tr - 25 tr</a>
            </li>
            <li>
              <a href="">Trên 25 triệu</a>
            </li>
            <li className="active">
              <a>Mức giá</a>
            </li>
            <li>
              <a href="">10 tr - 15 tr</a>
            </li>
            <li>
              <a href="">10 tr - 15 tr</a>
            </li>
            <li>
              <a href="">15 tr - 25 tr</a>
            </li>
            <li>
              <a href="">Trên 25 triệu</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="boxOne__list w-100">
        {a.map((i, k) => (
          <div className="boxOne__list-item" key={k}>
            <a href="#" className="boxOne__list-item-one">
              <div className="image">
                <img src="https://picsum.photos/400/400" alt="" />

                <div className="image__status2">
                  <img src={IMAGE_STATUS_DISCOUNT} alt="" />
                </div>
                {/* <div className="image__status">
                <img src={IMAGE_STATUS_HOT} alt="" />
              </div> */}
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
                    Macbook Pro 13 inch 2020 QuaMacbook Pro 13 inch 2020
                    QuaMacbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
                  </span>
                </div>
                <div className="desc__info">
                  <div className="info__left">
                    <div className="price-new">22.000.000đ</div>
                    <div className="price-old">30.000.000đ</div>
                  </div>
                  <div className="info__right">
                    <div className="sale">-20%</div>
                  </div>
                </div>
                <div className="desc_note">
                  Mua trả góp chỉ từ 499.000đ/ tháng
                </div>
                <div className="present">
                  <div className="icon">
                    <ICON_GIFT_RED_16 />
                  </div>
                  <div className="text">Quà tặng +800.000đ</div>
                </div>
              </div>
            </a>
            <div className="boxOne__list-item-two">
              <button className="btn compare">
                <ICON_PLUS_CIRCLE_12 />
                <span>So sánh</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const BoxTwo = (props) => {
  return (
    <div className="col-12  boxTwo w-100">
      <button className="btn w-100 d-flex justify-content-center">
        <ICON_ARROW_DOWN_DOUBLE_24 />

        <span>Xem thêm</span>
      </button>
    </div>
  );
};

export default ProductItem;
