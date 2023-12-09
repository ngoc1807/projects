import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CHECKED_16,
  ICON_LOCATION_LINE,
  ICON_STAR_16,
  ICON_CHECK_CIRCLE_16,
  ICON_CART_24,
  ICON_CLOSE_24,
  ICON_ARROW_DOWN_24,
  ICON_ARROW_UP_24,
  ICON_GIFT_RED_16,
} from "../../asset/imageJs";
import "./detailItem.scss";
function DetailItem(props) {
  return (
    <div className="DetailItem">
      <div className="ItemLeft">
        <ItemLeft />
        <ModalDetailImage />
      </div>

      <div className="ItemRight">
        <ItemRight />
      </div>
    </div>
  );
}

const ItemLeft = () => {
  return (
    <div className="box">
      <div className="box__left">
        <div className="imageMain">
          <img
            src="https://picsum.photos/600/400"
            alt=""
            data-toggle="modal"
            data-target="#ModalDetailImage"
          />

          <button className="icon-left-1 btn">
            <ICON_ARROW_LEFT_16 />
          </button>
          <button className="icon-right-1 btn ">
            <ICON_ARROW_RIGHT_16 />
          </button>
        </div>

        <div className="imageList">
          <div className="item">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="item active">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="item active">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="item active">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/600/400" alt="" />
          </div>
          <button className="icon-left-2 btn">
            <ICON_ARROW_LEFT_16 />
          </button>
          <button className="icon-right-2 btn">
            <ICON_ARROW_RIGHT_16 />
          </button>
        </div>
      </div>

      <div className="box__right">
        <div className="box__right-title">
          <span>Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
        </div>
        <div className="box__right-info-1">
          <div className="code">Mã sản phẩm: 1923189283</div>
          <div className="rating">
            <span className="rating__number">4.5</span>
            <span className="rating__icon">
              <ICON_STAR_16 />
            </span>
          </div>

          <div className="review">124 đánh giá</div>

          <div className="sold">
            <span className="sold__icon">
              <ICON_CHECK_CIRCLE_16 />
            </span>
            <span className="sold__text">20 đã bán</span>
          </div>
        </div>

        <div className="box__right-summary">
          <span>
            Macbook Air 13 Late 2020 Chip M1 8 Core Macbook Air 13 Late 2020
            Chip M1 8 13.3 Inch Retina, SSD 256GB
            <br />
            Bảo hành chính hãng 12 tháng
          </span>
        </div>

        <div className="box__right-title-2">
          <span>Chọn loại sản phẩm</span>
        </div>
        <div className="box__right-button-1">
          <button className="btn active  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
          <button className="btn  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
          <button className="btn  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
          <button className="btn  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
          <button className="btn  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
          <button className="btn  ">
            <span className="text">Macbook Air M1 8GB 256GB</span>
            <span className="icon">
              <ICON_CHECKED_16 />
            </span>

            <span className="triangle"></span>
          </button>
        </div>

        <div className="box__right-underlined"></div>

        <div className="box__right-info-2">
          <div className="item">
            <div className="title">Kích thước:</div>
            <div className="text">Laptop 14 inch</div>
          </div>
          <div className="item">
            <div className="title">CPU Intel:</div>
            <div className="text">Intel Core i5 1000</div>
          </div>
        </div>

        <div className="box__right-underlined"></div>

        <div className="box__right-price">
          <div className="new">22.000.000đ</div>
          <div className="old">26.000.000đ</div>
          <div className="note">
            <span>Đã bao gồm VAT</span>
          </div>
        </div>

        <div className="box__right-note">
          <div className="sale">
            <span>Giảm 20%</span>
          </div>

          <div className="saving">
            <span>Tiết kiệm 4.000.000đ</span>
          </div>
        </div>

        <div className="box__right-btn">
          <button className="btn buy">Mua ngay</button>
          <button className="btn addToCart">
            <span>
              <ICON_CART_24 />
            </span>
            Thêm vào giỏ hàng
          </button>
          <button className="btn installment">Mua trả góp</button>
        </div>
      </div>
    </div>
  );
};

const ItemRight = () => {
  return (
    <>
      <div className="boxOne">
        <div className="boxOne__title">
          <div className="boxOne__title-icon">
            <ICON_GIFT_RED_16 />
          </div>
          <div className="text">Miễn phí giao hàng</div>
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
          <div className="boxTwo__title-icon">
            <ICON_GIFT_RED_16 />
          </div>
          <div className="text">Miễn phí giao hàng</div>
        </div>

        <div className="boxTwo__list">
          <ul>
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
      <div className="boxThere">
        <div className="boxThere__title">
          <div className="boxThere__title-icon">
            <ICON_GIFT_RED_16 />
          </div>
          <div className="text">Miễn phí giao hàng</div>
        </div>
        <div className="boxThere__list">
          <ul>
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
                <span>Sản phẩm chính hãng 100%</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="boxFour">
        <div className="boxFour__title">
          <div className="boxFour__title-icon">
            <ICON_GIFT_RED_16 />
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
                  Uy tín 20 năm xây dựng và phát triển
                </div>

                <div className="price">320.000đ</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const ModalDetailImage = (props) => {
  return (
    <div
      className="modal fade"
      id="ModalDetailImage"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ModalDetailImageTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title" id="exampleModalLongTitle">
              Ảnh sản phẩm
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <ICON_CLOSE_24 />
            </button>
          </div>
          <div className="modal-body">
            <div className="boxModal">
              <div className="boxModal__image">
                <img
                  src="https://content.fun-japan.jp/renewal-prod/cms/articles/content/01jpg_2019-10-07-08-22-25.jpg"
                  alt=""
                />
              </div>
              <div className="boxModal__list">
                <ul>
                  <li className="active">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>

                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                  <li className="">
                    <img
                      src="https://phucanhcdn.com/media/product/41710_probook_450_g8_ha1.jpg"
                      alt=""
                    />
                  </li>
                </ul>
                <button className="icon-left-2 btn">
                  <ICON_ARROW_DOWN_24 />
                </button>
                <button className="icon-right-2 btn">
                  <ICON_ARROW_UP_24 />
                </button>
              </div>
              <div className="boxModal__total">1/12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailItem;
