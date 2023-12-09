import React from "react";

import "./LeftItemProductCompare.scss";
const LeftItemProductCompare = () => {
  return (
    <div className="LeftItemProductCompare">
      <div className="box">
        <div className="box__item">
          <div className="box__item-image">
            <img src="https://picsum.photos/400/400" alt="" />
          </div>
          <div className="box__item-title">
            Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
          </div>
          <div className="box__item-title-content">
            Macbook Air 13 Late 2020 Chip M1 8 Core Macbook Air 13 Late 2020
            Chip M1 8 13.3 Inch Retina, SSD 256GB Bảo hành chính hãng 12 tháng
          </div>

          <div className="box__item-desc3">
            <div className="title">Thông số kĩ thuật</div>
            <ul className="box">
              <li className="box-item">
                <div className="dot"></div>
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                </div>
              </li>
              <li className="box-item2">
                <div className="dot"></div>
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                </div>
              </li>
              <li className="box-item">
                <div className="dot"></div>
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                </div>
              </li>
              <li className="box-item2">
                <div className="dot"></div>
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="box__item-desc1">
            <span>Macbook Air 13 Late 2020</span>
            <br />
            <span>Late 2020 Chip M1 8</span>
            <br />
            <span>13.3 Inch Retina, SSD 256GB</span>
            <br />

            <span>Bảo hành chính hãng 12 tháng</span>
          </div>
          <div className="line"></div> */}
          {/* <div className="box__item-desc2">
            <div className="item">
              <div className="item__label">Kích thước : </div>
              <div className="item__text">Laptop 14 inch </div>
            </div>
            <div className="item">
              <div className="item__label">CPU Intel : </div>
              <div className="item__text">Laptop 14 inch</div>
            </div>
            <div className="item">
              <div className="item__label">Intels HD Graphics : </div>
              <div className="item__text">Laptop 14 inch</div>
            </div>
            <div className="item">
              <div className="item__label">RAM : </div>
              <div className="item__text">Laptop 14 inch</div>
            </div>
          </div> */}
          <div className="line"></div>

          <div className="box__item-bottom">
            <div className="price">
              <div className="price-new">22.000.000đ</div>
              <div className="price-old">22.000.000đ</div>
              <div className="price-vat">Đã bao gồm VAT</div>
            </div>
            <div className="price">
              <div className="price-sale">Giảm 20%</div>
              <div className="price-save">Tiết kiệm 4.000.000đ</div>
            </div>
          </div>
          <div className="box__item-btn">
            <button className="btn  detail ">Chi tiết</button>
            <button className="btn change ">Thay sản phẩm khác</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftItemProductCompare;
