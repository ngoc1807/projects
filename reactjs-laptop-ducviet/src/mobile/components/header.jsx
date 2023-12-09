import React from "react";
import {
  ICON_BAG_WHITE,
  ICON_BILL_WHITE,
  ICON_BOOK_WHITE,
  ICON_CHECKED_WHITE,
  ICON_CLOSE_24,
  ICON_EDITOR_WHITE,
  ICON_LOGO_MOBILE_BLACK,
  ICON_LOGO_MOBILE_WHITE,
  ICON_MESSENGER_LINE_24,
  ICON_SEARCH_HOME,
  ICON_SUPPORT_WHITE,
  ICON_TOGGLE_WHITE_24,
  ICON_ARROW_LEFT_24,
  ICON_CART_24,
  ICON_APPLE_24,
  ICON_IBM_24,
  ICON_ASUS_24,
  ICON_INTEL_24,
  ICON_DELL_24,
  ICON_HP_24,
  ICON_LENOVO_24,
  ICON_LOCATION_LINE,
  ICON_PHONE_16,
  ICON_LOCATION_16,
  ICON_MAIL_16,
} from "../../asset/imageJs";

import "./header.scss";

export const HeaderMobile = ({ type, title = "demo" } = {}) => {
  // console.log(type);
  switch (type) {
    case 2:
      return (
        <div className="HeaderMobile container-fluid" id="HeaderMobile">
          <div className="row">
            <BoxTwo />
          </div>
        </div>
      );

    case 3:
      return (
        <div className="HeaderBlogMobile container-fluid">
          <div className="row">
            <BlogItem label={title} />
          </div>
        </div>
      );

    case 4:
      return (
        <div className="HeaderAccountMobile container-fluid">
          <div className="row">
            <AccountItem label={title} />
          </div>
        </div>
      );

    case 5:
      return (
        <div className="HeaderIntroduceMobile container-fluid">
          <div className="row">
            <IntroduceItem label={title} />
          </div>
        </div>
      );
    default:
      return (
        <div className="HeaderMobile container-fluid" id="HeaderMobile">
          <div className="row">
            <BoxOne />

            <Modal />
          </div>
        </div>
      );
  }
};

const BoxOne = (props) => {
  return (
    <div className="col-12 boxOne1 w-100">
      <div className="boxOne1-banner">
        <img src="https://picsum.photos/200/300" alt="" />
      </div>

      <div className="boxOne">
        <div className="boxOne__logo">
          <ICON_LOGO_MOBILE_WHITE />
        </div>
        <form action="" className="boxOne__search">
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm sản phẩm"
          />
          <button type="button" className="btn mSearch" id="headerBtnSearchOne">
            <ICON_SEARCH_HOME />
          </button>
          <button type="reset" className="btn mClose" id="headerBtnSearchClose">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.8947 12.1059L19.6005 6.4002C19.8748 6.12588 20.0119 5.80584 20.0119 5.44009C20.0119 5.05605 19.8839 4.73602 19.6279 4.47999C19.3719 4.22396 19.0427 4.09595 18.6404 4.09595C18.2929 4.09595 17.982 4.23311 17.7077 4.50742L12.0019 10.2132L6.29619 4.50742C6.02187 4.23311 5.70184 4.09595 5.33609 4.09595C4.97033 4.09595 4.6503 4.22396 4.37598 4.47999C4.11996 4.73602 3.99194 5.05605 3.99194 5.44009C3.99194 5.80584 4.1291 6.12588 4.40342 6.4002L10.1092 12.1059L4.40342 17.8117C4.1291 18.0494 3.99194 18.3603 3.99194 18.7444C3.99194 19.1284 4.1291 19.4484 4.40342 19.7045C4.64116 19.9605 4.95205 20.0885 5.33609 20.0885C5.72013 20.0885 6.04016 19.9605 6.29619 19.7045L12.0019 13.9987L17.7077 19.7045C17.9637 19.9605 18.2746 20.0885 18.6404 20.0885C19.0427 20.0885 19.3627 19.9605 19.6005 19.7045C19.8748 19.4484 20.0119 19.1284 20.0119 18.7444C20.0119 18.3603 19.8748 18.0494 19.6005 17.8117L13.8947 12.1059Z"
                fill="#2F3136"
              />
            </svg>
          </button>
        </form>

        <div className="boxOne__store">
          <button
            className="btn"
            id=""
            data-toggle="modal"
            data-target="#HeThongCuaHang"
          >
            <div className="icon">
              <ICON_LOCATION_LINE />
            </div>
            <div className="text">Hệ thống cửa hàng</div>
          </button>
        </div>

        <div className="boxOne__cart">
          <div className="count">2</div>
          <button className="btn">
            <ICON_CART_24 />
          </button>
        </div>
        <div className="boxOne__toggle">
          <button className="btn btn__toggle open">
            <ICON_TOGGLE_WHITE_24 />
          </button>
          <button className="btn btn__toggle close1">
            <ICON_CLOSE_24 />
          </button>

          <div className="menu">
            <div style={{ flex: 1 }}>
              <div className="menu-item ">
                <div className="menu-item-label active">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">Laptop mới</div>
                </div>

                <div className="menu-item-content">
                  <div className="menu-item-content-boxOne">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">
                        Laptop chính hãng Laptop chính hãng Laptop chính hãng
                      </div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxTwo">
                    <div className="label">HÃNG</div>

                    <div className="content">
                      <a href="a" className="list-item apple">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="list-item ibm">
                        <ICON_IBM_24 />
                      </a>
                      <a href="a" className="list-item asus ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className="list-item intel active">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="list-item dell">
                        <ICON_DELL_24 />
                      </a>
                      <a href="a" className="list-item hp">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="list-item lenovo">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item-content-boxThree">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">4GB</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxOne">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">
                        Laptop chính hãng Laptop chính hãng Laptop chính hãng
                      </div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxTwo">
                    <div className="label">HÃNG</div>

                    <div className="content">
                      <a href="a" className="list-item apple">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="list-item ibm">
                        <ICON_IBM_24 />
                      </a>
                      <a href="a" className="list-item asus ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className="list-item intel active">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="list-item dell">
                        <ICON_DELL_24 />
                      </a>
                      <a href="a" className="list-item hp">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="list-item lenovo">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item-content-boxThree">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">4GB</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  laptop cu */}

              <div className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">Laptop cũ</div>
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-content-boxOne">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">
                        Laptop chính hãng Laptop chính hãng Laptop chính hãng
                      </div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxTwo">
                    <div className="label">HÃNG</div>

                    <div className="content">
                      <a href="a" className="list-item apple">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="list-item ibm">
                        <ICON_IBM_24 />
                      </a>
                      <a href="a" className="list-item asus ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className="list-item intel active">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="list-item dell">
                        <ICON_DELL_24 />
                      </a>
                      <a href="a" className="list-item hp">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="list-item lenovo">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item-content-boxThree">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">4GB</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* linh phu kien */}
              <div className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">Linh - phụ kiện</div>
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-content-boxOne">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">
                        Laptop chính hãng Laptop chính hãng Laptop chính hãng
                      </div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxTwo">
                    <div className="label">HÃNG</div>

                    <div className="content">
                      <a href="a" className="list-item apple">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="list-item ibm">
                        <ICON_IBM_24 />
                      </a>
                      <a href="a" className="list-item asus ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className="list-item intel active">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="list-item dell">
                        <ICON_DELL_24 />
                      </a>
                      <a href="a" className="list-item hp">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="list-item lenovo">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item-content-boxThree">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">4GB</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  bao hanh */}

              <a href="/" className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">Bảo hành</div>
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-content-boxOne">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">
                        Laptop chính hãng Laptop chính hãng Laptop chính hãng
                      </div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                  <div className="menu-item-content-boxTwo">
                    <div className="label">HÃNG</div>

                    <div className="content">
                      <a href="a" className="list-item apple">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="list-item ibm">
                        <ICON_IBM_24 />
                      </a>
                      <a href="a" className="list-item asus ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className="list-item intel active">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="list-item dell">
                        <ICON_DELL_24 />
                      </a>
                      <a href="a" className="list-item hp">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="list-item lenovo">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item-content-boxThree">
                    <div className="label">CHỌN DANH MỤC</div>

                    <div className="content">
                      <div className="item">4GB</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                      <div className="item">Laptop chính hãng</div>
                    </div>
                  </div>
                </div>
              </a>

              {/* tu van mua */}
              <div className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">
                    Dịch vụ <br />
                    sửa chữa
                  </div>
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-content-boxFour">
                    <div className="title">THAY THẾ LINH KIỆN</div>
                    <div className="content">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                  </div>
                  <div className="menu-item-content-boxFive">
                    <div className="title">
                      <div className="text1">SỬA CHỮA KHÁC</div>
                      <div className="text2">
                        <span>
                          <ICON_PHONE_16 />
                        </span>
                        0985 736 068
                      </div>
                    </div>
                    <div className="content">
                      <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                  </div>
                </div>
              </div>

              {/*  khuyen mai */}
              <a href="/" className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">khuyễn mãi</div>
                </div>
                <div className="menu-item-content"></div>
              </a>

              {/* tin tuc */}

              <a href="/" className="menu-item">
                <div className="menu-item-label">
                  <div className="icon">
                    <ICON_TOGGLE_WHITE_24 />
                  </div>
                  <div className="text">Tin tức</div>
                </div>
                <div className="menu-item-content"></div>
              </a>
            </div>

            <div className="menuBottom ">
              <div className="menuBottom__item ">
                <a href="#">
                  <span>Học tập văn phòng</span>
                </a>
              </div>

              <div className="menuBottom__item ">
                <a href="">
                  <span>Gaming</span>
                </a>
              </div>

              <div className="menuBottom__item ">
                <a href="">
                  <span>Đồ họa thiết kế</span>
                </a>
              </div>

              <div className="menuBottom__item ">
                <a href="">
                  <span>Cao cấp sang trọng</span>
                </a>
              </div>
              <div className="menuBottom__item last">
                <a href="#">
                  <ICON_TOGGLE_WHITE_24 />
                  <div>Xem tất cả</div>
                </a>
              </div>
            </div>
          </div>

          <label className="mark" htmlFor="btnToggle"></label>
        </div>
      </div>
    </div>
  );
};

const BoxTwo = (props) => {
  return (
    <div className="col-12 boxTwo w-100">
      <input
        type="text"
        className="form-control"
        placeholder="Tìm kiếm sản phẩm "
        id="headerInputSearch"
      />

      <button className="btn" id="headerBtnSearchTwo">
        <ICON_SEARCH_HOME />
      </button>
    </div>
  );
};

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="HeThongCuaHang"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title" id="exampleModalLabel">
              Hệ thống laptop đức việt
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="item1">
              <div className="item1-right">
                <div className="item1-right-title">
                  Cơ sở 1: Xã Đàn–Đống Đa–Hà Nội
                </div>
                <div className="item1-right-list">
                  <div className="item1-right-list-icon">
                    <ICON_LOCATION_16 />
                  </div>
                  <div className="item1-right-list-text blue">
                    Số 233 Xã Đàn – Đống Đa – Hà Nội
                  </div>
                </div>
                <div className="item1-right-list">
                  <div className="item1-right-list-icon">
                    <ICON_PHONE_16 />
                  </div>
                  <div className="item1-right-list-text ">024.6275.4433</div>
                </div>
                <div className="item1-right-list">
                  <div className="item1-right-list-icon">
                    <ICON_MAIL_16 />
                  </div>
                  <div className="item1-right-list-text ">
                    contact@ducvietco.com
                  </div>
                </div>
              </div>
              <div className="item1-left">
                <img
                  src="https://picsum.photos/200/300
"
                  alt=""
                />
              </div>
            </div>
            <div className="item2">
              <div className="item2-right">
                <div className="item2-right-title">
                  Cơ sở 1: Xã Đàn–Đống Đa–Hà Nội
                </div>
                <div className="item2-right-list">
                  <div className="item2-right-list-icon">
                    <ICON_LOCATION_16 />
                  </div>
                  <div className="item2-right-list-text blue">
                    Số 233 Xã Đàn – Đống Đa – Hà Nội
                  </div>
                </div>
                <div className="item2-right-list">
                  <div className="item2-right-list-icon">
                    <ICON_PHONE_16 />
                  </div>
                  <div className="item2-right-list-text ">024.6275.4433</div>
                </div>
                <div className="item2-right-list">
                  <div className="item2-right-list-icon">
                    <ICON_MAIL_16 />
                  </div>
                  <div className="item2-right-list-text ">
                    contact@ducvietco.com
                  </div>
                </div>
              </div>
              <div className="item2-left">
                <img
                  src="https://picsum.photos/200/300
"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AccountItem = ({ label = "Demo" }) => {
  return (
    <div className="col-12 AccountItem w-100">
      <div className="AccountItem__label">{label}</div>
    </div>
  );
};

const BlogItem = ({ label = "Demo" }) => {
  return (
    <div className="col-12 BlogItem w-100">
      <button className="BlogItem__btnOne btn">
        <ICON_ARROW_LEFT_24 />
      </button>
      <div className="BlogItem__label">{label}</div>

      <div className="BlogItem__btnThree">
        <label className="btn btn__toggle" htmlFor="HeaderBlogMobile">
          <ICON_TOGGLE_WHITE_24 />
        </label>

        <input type="checkbox" id="HeaderBlogMobile" />
        <div className="items">
          <ul className="list">
            <li className="list__item first">
              Danh mục tin tức
              <div className="left__close">
                <label htmlFor="HeaderBlogMobile">
                  <ICON_CLOSE_24 />
                </label>
              </div>
            </li>
            <li className="list__search">
              <form className="list__search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tìm kiếm "
                />
                <button className="btn">
                  <ICON_SEARCH_HOME />
                </button>
              </form>
            </li>

            <li className="list__item active ">
              <a href="#">Tất cả</a>
            </li>
            <li className="list__item ">
              <a href="#">Tin khuyến mại</a>
            </li>
            <li className="list__item ">
              <a href="#">Tin mới nhất</a>
            </li>
            <li className="list__item ">
              <a href="#">Hướng dẫn chọn mua</a>
            </li>
            <li className="list__item ">
              <a href="#">Tư vấn kỹ thuật</a>
            </li>
          </ul>

          <label className="items__mark" htmlFor="HeaderBlogMobile"></label>
        </div>
      </div>
    </div>
  );
};

const IntroduceItem = ({ label = "Demo" }) => {
  return (
    <div className="col-12 IntroduceItem w-100">
      <button className="IntroduceItem__btnOne btn">
        <ICON_ARROW_LEFT_24 />
      </button>
      <div className="IntroduceItem__label">{label}</div>

      <div className="IntroduceItem__btnThree">
        <label className="btn btn__toggle" htmlFor="HeaderIntroduceMobile">
          <ICON_TOGGLE_WHITE_24 />
        </label>

        <input type="checkbox" id="HeaderIntroduceMobile" />
        <div className="items">
          <ul className="list">
            <li className="list__item first">
              Giới thiệu
              <div className="left__close">
                <label htmlFor="HeaderIntroduceMobile">
                  <ICON_CLOSE_24 />
                </label>
              </div>
            </li>
            <li className="list__item active ">
              <a href="#">Giới thiệu</a>
            </li>
            <li className="list__item ">
              <a href="#">Hoạt động công ty</a>
            </li>
            <li className="list__item ">
              <a href="#">Tuyển dụng</a>
            </li>
            <li className="list__item ">
              <a href="#">Liên hệ</a>
            </li>
          </ul>

          <label
            className="items__mark"
            htmlFor="HeaderIntroduceMobile"
          ></label>
        </div>
      </div>
    </div>
  );
};
