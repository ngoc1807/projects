import React from "react";
import {
  ICON_CART_24,
  ICON_CHECKED_16,
  ICON_CHECKED_24,
  ICON_CHECK_CIRCLE_16,
  ICON_GIFT_20,
  ICON_LOCATION_LINE,
  ICON_PLUS_CIRCLE_12,
  ICON_STAR_16,
} from "../../asset/imageJs";

import "./DetailProductItem.scss";

const DetailProductItem = () => {
  return (
    <div className="DetailProductItem container-fluid ">
      <div className="row">
        <BoxOne />
        <ItemRight />
      </div>
    </div>
  );
};

const BoxOne = (props) => {
  return (
    <div className="boxOne w-100 col-12">
      <div className="boxOne-title">
        <span>Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
      </div>

      <div className="boxOne-btnCompare">
        <button className="btn">
          <div>
            <ICON_PLUS_CIRCLE_12 />
          </div>
          <div className="text">So sánh</div>
        </button>
      </div>
      <div className="boxOne-summary">
        <span>
          Macbook Air 13 Late 2020 Chip M1 8 Core Macbook Air 13 Late 2020 Chip
          M1 8 13.3 Inch Retina, SSD 256GB
        </span>
      </div>
      <div className="hr1" />

      <div className="boxOne-info2">
        <div className="item">
          <div className="title">Kích thước:</div>
          <div className="text">
            Laptop 14 inch Laptop 14 inch Laptop 14 inch Laptop 14 inch Laptop
            14 inch
          </div>
        </div>
        <div className="item">
          <div className="title">CPU Intel:</div>
          <div className="text">Intel Core i5 1000</div>
        </div>
      </div>
      <div className="hr1" />
      <div className="boxOne-buy">
        <div className="boxOne-buy-price">
          <div className="new">22.000.000đ</div>
          <div className="old">26.000.000đ</div>
          <div className="note">
            <span>Đã bao gồm VAT</span>
          </div>
          <div className="sale">
            <span>Giảm 20%</span>
          </div>
          <div className="saving">
            <span>Tiết kiệm 4.000.000đ</span>
          </div>
        </div>

        <div className="boxOne-buy-content">
          <button className="buyNow btn">
            <div className="left">
              <ICON_CART_24 />
            </div>

            <div className="right">
              <div className="text1">Mua ngay</div>
              <div className="text2">GIAO HÀNG TẬN NƠI</div>
            </div>
          </button>

          <div className="other">
            <button className="addToCart btn">
              <div className="icon">
                <ICON_CART_24 />
              </div>
              <div className="text">
                THÊM VÀO <br />
                GIỎ HÀNG
              </div>
            </button>
            <button className="installment btn">
              <div className="icon">
                <ICON_CART_24 />
              </div>
              <div className="text">
                <div className="text1">TRẢ GÓP 0%</div>
                <div className="text2">Công ty tài chính & thẻ tín dụng</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="boxOne-title-2">
        <span>Chọn loại sản phẩm</span>
      </div>

      <div className="boxOne-button-2">
        <button className="btn active  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ</span>
          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
        <button className="btn  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ 13.000.000đ</span>
          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
        <button className="btn  ">
          <span className="text"> Ram 8GB Ram 8GB Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ</span>

          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>

        <button className="btn  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">Ram 8GB</span>

          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
      </div>
      <div className="boxOne-title-2">
        <span>Chọn loại sản phẩm</span>
      </div>

      <div className="boxOne-button-1">
        <button className="btn active  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ</span>
          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
        <button className="btn  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ 13.000.000đ</span>
          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
        <button className="btn  ">
          <span className="text"> Ram 8GB Ram 8GB Ram 8GB</span>
          <br />
          <span className="text2">13.000.000đ</span>

          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>

        <button className="btn  ">
          <span className="text">Ram 8GB</span>
          <br />
          <span className="text2">Ram 8GB</span>

          <span className="icon">
            <ICON_CHECKED_16 />
          </span>

          <span className="triangle"></span>
        </button>
      </div>
    </div>
  );
};

const ItemRight = () => {
  return (
    <>
      <div className="boxFour">
        <div className="boxFour__title">
          <div className="boxFour__title-icon">
            <ICON_GIFT_20 />
          </div>
          <div className="text">Miễn phí giao hàng</div>
        </div>
        <div className="boxFour__list">
          <ul>
            <li>
              <div className="image">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  Uy tín 20 năm xây dựng và phát triển
                </div>

                <div className="price">320.000đ</div>
              </div>
            </li>
            <li>
              <div className="image">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  Uy tín 20 năm xây dựng và phát triển Uy tín 20 năm xây dựng và
                  phát triển Uy tín 20 năm xây dựng và phát triển
                </div>

                <div className="price">320.000đ</div>
              </div>
            </li>
            <li>
              <div className="image">
                <img src="https://picsum.photos/200/300" alt="" />
              </div>

              <div className="content">
                <div className="title">
                  Uy tín 20 năm xây dựng và phát triển
                </div>

                <div className="price">320.000đ</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxTwo">
        <div className="boxTwo__title">
          <div className="boxTwo__title-icon">
            <ICON_GIFT_20 />
          </div>
          <div className="text">
            Miễn phí giao hàng Miễn phí giao hàngMiễn phí giao hàng Miễn phí
            giao hàng{" "}
          </div>
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
                  phát triển Uy tín 20 năm xây dựng và phát triển
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
                <span>Vệ sinh miễn phí trọn đời PC, Laptop</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxTwo">
        <div className="boxTwo__title">
          <div className="boxTwo__title-icon">
            <ICON_GIFT_20 />
          </div>
          <div className="text">
            Miễn phí giao hàng Miễn phí giao hàngMiễn phí giao hàng Miễn phí
            giao hàng{" "}
          </div>
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
                  phát triển Uy tín 20 năm xây dựng và phát triển
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
                <span>Vệ sinh miễn phí trọn đời PC, Laptop</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const BoxTwo = (props) => {
  return (
    <div className="boxTwo w-100 col-12">
      <div className="boxTwo__title">
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              data-toggle="tab"
              href="#menu1"
              role="tab"
            >
              Điểm còn hàng
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-toggle="tab" href="#menu2" role="tab">
              Chính sách mua hàng
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link" data-toggle="tab" href="#menu3" role="tab">
              Miễn phí giao hàng
            </a>
          </li>
        </ul>
      </div>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active boxTwo__list-item1"
          id="menu1"
          role="tabpanel"
        >
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
        <div class="tab-pane fade" id="menu2" role="tabpanel">
          <div className="boxTwo__list-item2 ">
            <ul>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Uy tín 20 năm xây dựng và phát triển</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Sản phẩm chính hãng 100%</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Uy tín 20 năm xây dựng và phát triển</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Bảo hành tận nơi cho doanh nghiệp</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Ưu đãi riêng cho học sinh sinh viên</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Uy tín 20 năm xây dựng và phát triển</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Vệ sinh miễn phí trọn đời PC, Laptop</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="tab-pane fade" id="menu3" role="tabpanel">
          <div className="boxTwo__list-item2">
            <ul>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Uy tín 20 năm xây dựng và phát triển</span>
                </div>
              </li>
              <li>
                <div className="icon">
                  <ICON_CHECKED_24 />
                </div>

                <div className="content">
                  <span>Sản phẩm chính hãng 100%</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProductItem;
