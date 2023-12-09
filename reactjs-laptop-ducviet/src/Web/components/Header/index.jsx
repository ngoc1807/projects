import React from "react";
import "./header.scss";
import {
  ICON_ARROW_DOWN_24,
  ICON_ARROW_RIGHT_16,
  ICON_CART_LINE_24,
  ICON_EAR_PHONE,
  ICON_LAPTOP,
  ICON_LOCATION_LINE,
  ICON_MEMORIES,
  ICON_MOUSE,
  ICON_SCREEN,
  ICON_SEARCH_HOME,
  ICON_SEVER,
  ICON_WINDOW,
  ICON_SUPPORT_WHITE,
  ICON_BAG_WHITE,
  ICON_BILL_WHITE,
  ICON_LOGO_WEB,
  ICON_PHONE_16,
  ICON_LAPTOP_48,
  ICON_LENOVO_24,
  ICON_HP_24,
  ICON_DELL_24,
  ICON_INTEL_24,
  ICON_ASUS_24,
  ICON_APPLE_24,
  ICON_IBM_24,
} from "./../../../asset/imageJs";

const Header = (props) => {
  return (
    <section className="Header" id="navbarWeb">
      <div className=" box-one">
        <ItemFirst />
      </div>
      <div className=" box-two">
        <ItemSecond />
      </div>
    </section>
  );
};

const ItemFirst = () => {
  return (
    <div className="ItemFirst ">
      <div className="ItemFirst__one">
        <div className="ItemFirst__one-item">
          <div className="image">
            <div className="image__one">
              <ICON_PHONE_16 />
            </div>
            <div className="image__two">
              <div className="count">1</div>
            </div>
          </div>
          <div className="text">0985 736 068</div>
        </div>

        <div className="ItemFirst__one-item">
          <div className="image">
            <div className="image__one">
              <ICON_PHONE_16 />
            </div>
            <div className="image__two">
              {" "}
              <div className="count">2</div>
            </div>
          </div>
          <div className="text">0985 736 068</div>
        </div>
      </div>
      <div className="ItemFirst__list">
        <ul className="box">
          <li className="item">
            <a className="item__link" href="#">
              <span className="item__link-icon">
                <ICON_SUPPORT_WHITE />
              </span>
              <span className="item__link-text">Tư vấn chọn mua</span>
            </a>
          </li>

          <li className="item">
            <a className="item__link" href="#">
              <span className="item__link-icon">
                <ICON_BAG_WHITE />
              </span>
              <span className="item__link-text">Tin khuyến mãi</span>
            </a>
          </li>

          <li className="item">
            <a className="item__link" href="#">
              <span className="item__link-icon">
                <ICON_BILL_WHITE />
              </span>
              <span className="item__link-text">Tin tức</span>
            </a>
          </li>
          <li className="item">
            <a className="item__link" href="#">
              <span className="item__link-icon">
                <ICON_SUPPORT_WHITE />
              </span>
              <span className="item__link-text">Liên hệ</span>
            </a>
          </li>
          <li className="item">
            <a className="item__link" href="#">
              <div className="dropdown">
                <a
                  className=" dropdown-toggle item__link"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="item__link-icon">
                    <ICON_LOCATION_LINE />
                  </span>
                  <span className="item__link-text">Hệ thống cửa hàng</span>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <div className="dropdown-item" href="#">
                    <div className="icon">
                      <ICON_LOCATION_LINE />
                    </div>
                    <div className="desc">
                      <div className="desc-title">
                        Cơ sở 1: Số 233 Xã Đàn – Đống Đa – Hà Nội
                      </div>
                      <div className="desc-text">
                        Số điện thoại: 024.6275.4433
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-item" href="#">
                    <div className="icon">
                      <ICON_LOCATION_LINE />
                    </div>
                    <div className="desc">
                      <div className="desc-title">
                        Cơ sở 1: Số 233 Xã Đàn – Đống Đa – Hà Nội
                      </div>
                      <div className="desc-text">
                        Số điện thoại: 024.6275.4433
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const ItemSecond = () => {
  return (
    <div className="ItemSecond ">
      <div className="ItemSecond__logo">
        {/* <img src={IMAGE_LOGO} alt="" /> */}
        <ICON_LOGO_WEB />
      </div>
      <div className="ItemSecond__search">
        <SearchHome />
      </div>
      <div className="ItemSecond__option">
        <ul className="box">
          <li className="item">
            <a href="#">
              <div className="item__link">
                <div className="item__link-icon">
                  <ICON_LAPTOP_48 />
                </div>
                <div className="item__link-text">Laptop mới</div>
                <div className="menu">
                  <div className="menu-item trademark">
                    <div className="menu-item-title  ">
                      <span>Laptop theo thương hiệu :</span>
                    </div>
                    <div className="menu-item-content">
                      <a href="a" className="apple menu-item-content-link">
                        <ICON_APPLE_24 />
                      </a>

                      <a href="a" className="dell menu-item-content-link">
                        <ICON_DELL_24 />
                      </a>

                      <a href="a" className=" hp menu-item-content-link">
                        <ICON_HP_24 />
                      </a>
                      <a href="a" className="intel  menu-item-content-link">
                        <ICON_INTEL_24 />
                      </a>
                      <a href="a" className="ibm menu-item-content-link">
                        <ICON_IBM_24 />
                      </a>

                      <a href="a" className="asus menu-item-content-link ">
                        <ICON_ASUS_24 />
                      </a>
                      <a href="a" className=" lenovo menu-item-content-link">
                        <ICON_LENOVO_24 />
                      </a>
                    </div>
                  </div>

                  <div className="menu-item">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-item">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-item no-right">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-item">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>

                  <div className="menu-item">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item no-right">
                    <div className="menu-item-title">
                      <span>LAPTOP CHÍNH HÃNG</span>
                    </div>
                    <div className="menu-item-content">
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>{" "}
                      <div className="menu-item-content-link">
                        <a className="text">LaptopChinh hangx</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="item">
            <a className="item__link" href="#">
              <div className="item__link-icon">
                <ICON_LAPTOP_48 />
              </div>
              <div className="item__link-text">Laptop 99%</div>

              <div className="menu">
                <div className="menu-item trademark">
                  <div className="menu-item-title  ">
                    <span>LAPTOP THEO HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <a href="a" className="apple menu-item-content-link">
                      <ICON_APPLE_24 />
                    </a>

                    <a href="a" className="dell menu-item-content-link">
                      <ICON_DELL_24 />
                    </a>

                    <a href="a" className=" hp menu-item-content-link">
                      <ICON_HP_24 />
                    </a>
                    <a href="a" className="intel  menu-item-content-link">
                      <ICON_INTEL_24 />
                    </a>
                    <a href="a" className="ibm menu-item-content-link">
                      <ICON_IBM_24 />
                    </a>

                    <a href="a" className="asus menu-item-content-link ">
                      <ICON_ASUS_24 />
                    </a>
                    <a href="a" className=" lenovo menu-item-content-link">
                      <ICON_LENOVO_24 />
                    </a>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item no-right">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
                <div className="menu-item no-right">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>

          <li className="item">
            <a className="item__link" href="#">
              <div className="item__link-icon">
                <ICON_LAPTOP_48 />
              </div>
              <div className="item__link-text">Link-phụ kiện</div>
              <div className="menu">
                <div className="menu-item trademark">
                  <div className="menu-item-title  ">
                    <span>LAPTOP THEO HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <a href="a" className="apple menu-item-content-link">
                      <ICON_APPLE_24 />
                    </a>

                    <a href="a" className="dell menu-item-content-link">
                      <ICON_DELL_24 />
                    </a>

                    <a href="a" className=" hp menu-item-content-link">
                      <ICON_HP_24 />
                    </a>
                    <a href="a" className="intel  menu-item-content-link">
                      <ICON_INTEL_24 />
                    </a>
                    <a href="a" className="ibm menu-item-content-link">
                      <ICON_IBM_24 />
                    </a>

                    <a href="a" className="asus menu-item-content-link ">
                      <ICON_ASUS_24 />
                    </a>
                    <a href="a" className=" lenovo menu-item-content-link">
                      <ICON_LENOVO_24 />
                    </a>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item no-right">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>

                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
                <div className="menu-item no-right">
                  <div className="menu-item-title">
                    <span>LAPTOP CHÍNH HÃNG</span>
                  </div>
                  <div className="menu-item-content">
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>{" "}
                    <div className="menu-item-content-link">
                      <a className="text">LaptopChinh hangx</a>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </li>
          <li className="item">
            <a className="item__link" href="#">
              <div className="item__link-icon">
                <ICON_LAPTOP_48 />
              </div>
              <div className="item__link-text">Bảo hành</div>
            </a>
          </li>
          <li className="item">
            <a className="item__link" href="#">
              <div className="item__link-icon">
                <ICON_LAPTOP_48 />
              </div>
              <div className="item__link-text">Dịch vụ sửa chữa</div>
            </a>
          </li>
          <li className="item">
            <a className="item__link" href="#">
              <div className="item__link-icon">
                <ICON_LAPTOP_48 />
              </div>
              <div className="item__link-text">Khuyễn mãi</div>
            </a>
          </li>
        </ul>

        <div className="box__cart">
          <a href="" className="cart">
            <div className="cart__icon">
              <ICON_CART_LINE_24 />
            </div>
            <div className="cart__number">1</div>
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchHome = () => {
  return (
    <div className="SearchHome">
      <div className="dropdown  SearchHome__dropdown">
        <button className="btn" type="button" data-toggle="dropdown">
          <span> Tất cả thư mục</span>{" "}
          <span className="SearchHome__dropdown-icon">
            <ICON_ARROW_DOWN_24 />
          </span>
        </button>
        <ul className="dropdown-menu menu__one  ">
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_LAPTOP />
              </div>
              <div className="text">Máy tính xách tay - Laptop</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
              <li className="menu__two-item">
                <a href="">LaptopACer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_SCREEN />
              </div>
              <div className="text">Máy tính - Máy chủ</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>

          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_SEVER />
              </div>
              <div className="text">Máy in - Thiết bị văn phòng</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>

          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_EAR_PHONE />
              </div>
              <div className="text">Linh kiện máy tính</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_SCREEN />
              </div>
              <div className="text">Màn hình máy tính</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>

          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MOUSE />
              </div>
              <div className="text">Gaming Gear</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>

          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_WINDOW />
              </div>
              <div className="text">Microsoft Surface</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MEMORIES />
              </div>
              <div className="text">TB lưu trữ, nghe nhìn</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MEMORIES />
              </div>
              <div className="text">TB lưu trữ, nghe nhìn</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MEMORIES />
              </div>
              <div className="text">TB lưu trữ, nghe nhìn</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MEMORIES />
              </div>
              <div className="text">TB lưu trữ, nghe nhìn</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
          <li className="menu__one-item">
            <a href="#">
              <div className="icon-left">
                <ICON_MEMORIES />
              </div>
              <div className="text">TB lưu trữ, nghe nhìn</div>
              <div className="icon-right">
                <ICON_ARROW_RIGHT_16 />
              </div>
            </a>

            <ul className="menu__two">
              <li className="menu__two-item">
                <a href="">Asus</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Dell</a>
              </li>
              <li className="menu__two-item">
                <a href="">Laptop Acer</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <form>
        <input
          className="  SearchHome__input form-control"
          placeholder="Tìm kiếm sản phẩm"
        ></input>
        <button className=" btn  SearchHome__btn">
          <div className=" SearchHome__btn-icon">
            <ICON_SEARCH_HOME />
          </div>
          {/* <div className="SearchHome__btn-text">Tìm kiếm</div> */}
        </button>
      </form>
    </div>
  );
};

export default Header;
