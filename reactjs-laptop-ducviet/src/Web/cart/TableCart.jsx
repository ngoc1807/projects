import React from "react";
import {
  ICON_EYES_16,
  ICON_TRASH_16,
  ICON_TRASH_24,
} from "../../asset/imageJs";
import { CheckBoxCustom } from "../../components/Form";
import cartImage from "./../../asset/image/home/cartProduct.png";

import "./TableCart.scss";

function TableCart(props) {
  return (
    <div className="TableCart">
      <div className="TableCart__title">
        <div className="text">GIỎ HÀNG</div>
        <div className="btn">
          <button className="btn btn-danger">
            <span>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.7717 2.92534C10.7397 2.59467 10.5957 2.31201 10.3397 2.07734C10.0837 1.84267 9.77969 1.72534 9.42769 1.72534H3.57169C3.21969 1.72534 2.91569 1.84267 2.65969 2.07734C2.40369 2.31201 2.25969 2.59467 2.22769 2.92534L1.42769 10.9253C1.40636 11.192 1.45436 11.4373 1.57169 11.6613C1.68902 11.8853 1.85436 12.0667 2.06769 12.2053C2.29169 12.3333 2.52636 12.3973 2.77169 12.3973H10.2277C10.633 12.3973 10.9637 12.2587 11.2197 11.9813C11.4864 11.6933 11.6037 11.3413 11.5717 10.9253L10.7717 2.92534ZM12.8997 10.7973C12.9424 11.32 12.8517 11.8107 12.6277 12.2693C12.4037 12.7173 12.0784 13.0747 11.6517 13.3413C11.225 13.608 10.7504 13.7413 10.2277 13.7413H2.77169C2.27036 13.7413 1.80636 13.608 1.37969 13.3413C0.953023 13.0747 0.622357 12.7173 0.38769 12.2693C0.153023 11.8107 0.0570232 11.32 0.0996899 10.7973L0.89969 2.79734C0.942357 2.36001 1.08636 1.96001 1.33169 1.59734C1.57702 1.22401 1.89702 0.930673 2.29169 0.71734C2.68636 0.504006 3.11302 0.397339 3.57169 0.397339H9.42769C9.88636 0.397339 10.313 0.504006 10.7077 0.71734C11.1024 0.930673 11.4224 1.22401 11.6677 1.59734C11.913 1.96001 12.057 2.36001 12.0997 2.79734L12.8997 10.7973ZM6.49969 7.06934C5.88102 7.06934 5.31569 6.92001 4.80369 6.62134C4.30236 6.32267 3.90236 5.92267 3.60369 5.42134C3.31569 4.90934 3.17169 4.34401 3.17169 3.72534C3.17169 3.52267 3.23036 3.36267 3.34769 3.24534C3.46502 3.12801 3.62502 3.06934 3.82769 3.06934C4.03036 3.06934 4.19036 3.12801 4.30769 3.24534C4.43569 3.36267 4.49969 3.52267 4.49969 3.72534C4.49969 4.09867 4.58502 4.44001 4.75569 4.74934C4.93702 5.04801 5.17702 5.28801 5.47569 5.46934C5.78502 5.64001 6.12636 5.72534 6.49969 5.72534C6.87302 5.72534 7.20902 5.64001 7.50769 5.46934C7.81702 5.28801 8.05702 5.04801 8.22769 4.74934C8.40902 4.44001 8.49969 4.09867 8.49969 3.72534C8.49969 3.52267 8.55836 3.36267 8.67569 3.24534C8.80369 3.12801 8.96902 3.06934 9.17169 3.06934C9.37436 3.06934 9.53436 3.12801 9.65169 3.24534C9.76902 3.36267 9.82769 3.52267 9.82769 3.72534C9.82769 4.34401 9.67836 4.90934 9.37969 5.42134C9.09169 5.92267 8.69169 6.32267 8.17969 6.62134C7.67836 6.92001 7.11836 7.06934 6.49969 7.06934Z"
                  fill="white"
                />
              </svg>
            </span>{" "}
            Mua thêm các sản phẩm khác
          </button>
        </div>
      </div>

      <div className="TableCart__content">
        <table className="table">
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
