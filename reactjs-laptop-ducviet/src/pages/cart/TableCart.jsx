import React from "react";
import {
  ICON_EYES_16,
  ICON_TRASH_16,
  ICON_TRASH_24,
} from "../../asset/imageJs";
import { CheckBoxCustom } from "../../components/Form";
import cartImage from "./../../asset/image/home/cartProduct.png";

function TableCart(props) {
  return (
    <div className="TableCart">
      <div className="TableCart__title">Giỏ hàng</div>
      <div className="TableCart__content">
        <table class="table">
          <thead>
            <tr>
              <th className="header__checked">
                <CheckBoxCustom label="Đã chọn 03/03" />
              </th>
              <th className="header__amount">Số lượng</th>
              <th className="header__price">Giá</th>
              <th className="header__option">Tùy chọn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="body__info">
                <CheckBoxCustom />
                <div className="body__info-image">
                  <img
                    src="https://www.antien.vn/uploaded/Bose%20Headphone%20700/tai-nghe-bluetooth-chong-on-bose-headphones-700.jpg"
                    alt=""
                  />
                </div>
                <div className="body__info-desc">
                  <div className="title">
                    Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
                  </div>
                  <div className="text">
                    Macbook Air M1 8GB 256GB, RAM 8GB, SSD 256GB
                  </div>
                </div>
              </td>
              <td className="body__amount">
                <input type="number" className="form-control" />
              </td>
              <td className="body__price">
                <div className="body__price-old">120.000.000đ</div>
                <div className="body__price-new">8.000.000đ</div>
              </td>
              <td className="body__option">
                <div>
                  <button
                    className="btn body__option-detail"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Xem thông tin chi tiết"
                  >
                    <ICON_EYES_16 />
                  </button>
                  <button
                    className="btn body__option-trash"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <ICON_TRASH_16 />
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <td className="body__info">
                <CheckBoxCustom />
                <div className="body__info-image">
                  <img
                    src="https://www.antien.vn/uploaded/Bose%20Headphone%20700/tai-nghe-bluetooth-chong-on-bose-headphones-700.jpg"
                    alt=""
                  />
                </div>
                <div className="body__info-desc">
                  <div className="title">
                    Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
                  </div>
                  <div className="text">
                    Macbook Air M1 8GB 256GB, RAM 8GB, SSD 256GB
                  </div>
                </div>
              </td>
              <td className="body__amount">
                <input type="number" className="form-control" />
              </td>
              <td className="body__price">
                <div className="body__price-old">120.000.000đ</div>
                <div className="body__price-new">8.000.000đ</div>
              </td>
              <td className="body__option">
                <div>
                  <button
                    className="btn body__option-detail"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Xem thông tin chi tiết"
                  >
                    <ICON_EYES_16 />
                  </button>
                  <button
                    className="btn body__option-trash"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <ICON_TRASH_16 />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="body__info">
                <CheckBoxCustom />
                <div className="body__info-image">
                  <img
                    src="https://www.antien.vn/uploaded/Bose%20Headphone%20700/tai-nghe-bluetooth-chong-on-bose-headphones-700.jpg"
                    alt=""
                  />
                </div>
                <div className="body__info-desc">
                  <div className="title">
                    Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
                  </div>
                  <div className="text">
                    Macbook Air M1 8GB 256GB, RAM 8GB, SSD 256GB
                  </div>
                </div>
              </td>
              <td className="body__amount">
                <input type="number" className="form-control" />
              </td>
              <td className="body__price">
                <div className="body__price-old">120.000.000đ</div>
                <div className="body__price-new">8.000.000đ</div>
              </td>
              <td className="body__option">
                <div>
                  <button
                    className="btn body__option-detail"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Xem thông tin chi tiết"
                  >
                    <ICON_EYES_16 />
                  </button>
                  <button
                    className="btn body__option-trash"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Xóa"
                  >
                    <ICON_TRASH_16 />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCart;
