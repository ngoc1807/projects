import React from "react";
import {
  ICON_ARROW_DOWN_16,
  ICON_ARROW_DOWN_24,
  ICON_ARROW_UP_24,
} from "../../asset/imageJs";
import "./contentItem.scss";
const ContentItem = () => {
  return (
    <div className="ContentItem">
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
          <div className="box-line">
            <div className="line"></div>
          </div>

          <div className="box__item-bottom">
            <div className="price">
              <div className="price-new">22.000.000đ</div>
              <div className="price-old">22.000.000đ</div>
              <div className="price-vat">
                <span>Đã bao gồm VAT</span>
              </div>
              <div className="price-sale">
                <span>Giảm 20%</span>
              </div>
              <div className="price-save">Tiết kiệm 4.000.000đ</div>
            </div>
          </div>
          <div className="box__item-desc3">
            <div className="title">Thông số kĩ thuật</div>
            <ul className="box">
              <li className="box-item">
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                </div>

                <div className="icon">
                  <ICON_ARROW_DOWN_16 />
                </div>
              </li>
              <li className="box-item2">
                <div className="text">15.6-inch FHD</div>
                <div className="icon">
                  <ICON_ARROW_DOWN_16 />
                </div>
              </li>
              <li className="box-item">
                <div className="text">
                  15.6-inch FHD (1920 x 1080) IPS Anti-Glare LED-Backlit Display
                  Anti-Glare LED-Backlit Display Anti-Glare LED-Backlit Display
                </div>
                <div className="icon">
                  <ICON_ARROW_DOWN_16 />
                </div>
              </li>
            </ul>
          </div>

          <div className="box__item-btn">
            <button className="btn  detail ">Chi tiết</button>
            {/* <button className="btn change ">Thay sản phẩm khác</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
