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
import "./ProductItemBG.scss";
function ProductItemBG(props) {
  const { color } = props;
  return (
    <div className="ProductItemBG container-fluid">
      <div className="row">
        <BoxOne title="Sản phẩm bán chạy" color={color} />
      </div>
    </div>
  );
}

const BoxOne = ({ title, color } = {}) => {
  let a = [];
  for (let i = 0; i < 3; i++) {
    a.push({ id: i });
  }

  return (
    <div className=" w-100 col-12 boxOne" style={{ background: color }}>
      <div className="boxOne__title">
        <div className="text">Sản phẩm bán chạy </div>
      </div>

      <div className="boxOne__title2">
        <div className="two">
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
            <li>
              <a href="">TẤT CẢ</a>
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

export default ProductItemBG;
