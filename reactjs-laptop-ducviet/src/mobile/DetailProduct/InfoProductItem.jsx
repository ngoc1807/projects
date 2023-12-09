import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CART_24,
  ICON_CHECKED_WHITE,
} from "../../asset/imageJs";

import { CheckBoxCustom } from "../../components/Form";

import "./InfoProductItem.scss";
function InfoProductItem(props) {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }
  return (
    <div className="InfoProductItem container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__content">
            <div className="title">Thông số kĩ thuật</div>

            <div className="list">
              <ul>
                <li className="one">
                  <div className="dot"></div>
                  <div className="text">
                    15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit
                    Display
                  </div>
                </li>
                <li className="two">
                  <div className="dot"></div>
                  <div className="text">
                    CPU:Intel® Core i7-8750H Coffee Lake (2.20Ghz Upto 4.10Ghz,
                    9 MB Intel® Smart Cache, 6 Cores, 12 Threads)
                  </div>
                </li>
                <li className="one">
                  <div className="dot"></div>
                  <div className="text">RAM: 8GB DDR4 (Up to max 32Gb)</div>
                </li>
                <li className="two">
                  <div className="dot"></div>
                  <div className="text">
                    Ổ Cứng: SSD 128GB M2 2280 / HDD 1TB SATA3 2.5 inch
                  </div>
                </li>
                <li className="one">
                  <div className="dot"></div>
                  <div className="text">
                    VGA: Intel UHD 630M & NVIDIA GeForce GTX1050Ti 4G GDDR5
                  </div>
                </li>

                <li className="two">
                  <div className="dot"></div>
                  <div className="text">
                    Hệ điều hành : Window 10 Pro Actived)
                  </div>
                </li>

                <li className="one">
                  <div className="dot"></div>
                  <div className="text">
                    Phụ kiện : Sạc, Dây nguồn, Balo, Chuột không dây, Lót chuột
                  </div>
                </li>
                <li className="two">
                  <div className="dot"></div>
                  <div className="text">Warranty : 12 tháng</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoProductItem;
