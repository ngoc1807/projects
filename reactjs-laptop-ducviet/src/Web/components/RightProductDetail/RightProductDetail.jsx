import React from "react";
import "./RightProductDetail.scss";
import { ICON_CHECKED_16, ICON_LOCATION_LINE } from "../../../asset/imageJs";
const RightProductDetail = () => {
  return (
    <div className="RightProductDetail">
      <div className="boxOne">
        <div className="boxOne__title">
          <span>Điểm còn hàng</span>
        </div>
        <div className="boxOne__list">
          <ul>
            <li>
              <div className="icon">
                <ICON_LOCATION_LINE />
              </div>

              <div className="content">
                <div className="text">
                  <span>Cơ sở 1:</span> Số 233 Xã Đàn-Đống Đa-HN
                </div>

                <a href="#" className="number">
                  <span>Điện thoại: 024.6275.4433</span>
                </a>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_LOCATION_LINE />
              </div>

              <div className="content">
                <div className="text">
                  <span>Cơ sở 2:</span> Số 93 Lê Thanh Nghị-Hai Bà Trưng-HN
                </div>

                <a href="#" className="number">
                  <span>Điện thoại:024.3628.5957</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxTwo">
        <div className="boxTwo__title">
          <span>Chính sách mua hàng</span>
        </div>

        <div className="boxTwo__list">
          <ul>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>
                  Uy tín 20 năm xây dựng và phát triển Uy tín 20 năm xây dựng và
                  phát triểnUy tín 20 năm xây dựng và phát triển
                </span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>Sản phẩm chính hãng 100%</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>Uy tín 20 năm xây dựng và phát triển</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>Bảo hành tận nơi cho doanh nghiệp</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>Ưu đãi riêng cho học sinh sinh viên</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>Uy tín 20 năm xây dựng và phát triển</span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>
                  Vệ sinh miễn phí trọn đời PC, Laptop phát triểnUy tín 20 năm
                  xây dựng và phát triển
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxThere">
        <div className="boxThere__title">
          <span>Miễn phí giao hàng</span>
        </div>
        <div className="boxThere__list">
          <ul>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>
                  Uy tín 20 năm xây dựng phát triểnUy tín 20 năm xây dựng và
                  phát triểnvà phát triển
                </span>
              </div>
            </li>
            <li>
              <div className="icon">
                <ICON_CHECKED_16 />
              </div>

              <div className="content">
                <span>
                  Sản phẩm chính hãng phát triểnUy tín 20 năm xây dựng và phát
                  triển%
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightProductDetail;
