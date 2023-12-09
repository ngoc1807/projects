import React from "react";
import "./FooterItem.scss";
import {
  ICON_LOCATION_16,
  ICON_PHONE_16,
  ICON_DISCOVER_16,
  ICON_MAIL_16,
  IMAGE_BIDV,
  IMAGE_AGRIBANK,
  IMAGE_VIETCOMBANK,
  IMAGE_PAYONLINE,
  ICON_SEARCH_HOME,
  IMAGE_FOOTER,
  ICON_NEWSPAPER_24,
  ICON_FACEBOOK_24,
  ICON_YOUTUBE_24,
  ICON_GOOGLE_24,
} from "../../asset/imageJs";
const FooterItem = () => {
  return (
    <section className="FooterItem">
      <div className="box-one">
        <div className="system">
          <div className="title-one">Hệ thống cửa hàng</div>
          <div className="underlined"></div>
          <div className="title-two">Cơ sở 1: Xã Đàn, Đống Đa, HN</div>

          <ul className="item">
            <li className="item-info">
              <span className="icon">
                <ICON_LOCATION_16 />
              </span>
              <span className="text">Số 233 Xã Đàn – Đống Đa – Hà Nội </span>
            </li>
            <li className="item-info">
              <span className="icon">
                <ICON_PHONE_16 />
              </span>
              <span className="text">024.6275.4433</span>
            </li>
            <li className="item-info">
              <span className="icon">
                <ICON_MAIL_16 />
              </span>
              <span className="text">contact@ducvietco.com</span>
            </li>
            <li className="item-info">
              <a href="#" className="item-link">
                <span className="icon">
                  <ICON_DISCOVER_16 />
                </span>
                <span className="text">Xem đường đi</span>
              </a>
            </li>
          </ul>

          <div className="title-two">Cơ sở 2: Lê Thanh Nghị, HBT, HN</div>

          <ul className="item">
            <li className="item-info">
              <span className="icon">
                <ICON_LOCATION_16 />
              </span>
              <span className="text">
                Số 93 Lê Thanh Nghị - Hai Bà Trưng – Hà Nội{" "}
              </span>
            </li>
            <li className="item-info">
              <span className="icon">
                <ICON_PHONE_16 />
              </span>
              <span className="text">024.3628.5957</span>
            </li>
            <li className="item-info">
              <span className="icon">
                <ICON_MAIL_16 />
              </span>
              <span className="text">contact@ducvietco.com</span>
            </li>
            <li className="item-info">
              <a href="#" className="item-link">
                <span className="icon">
                  <ICON_DISCOVER_16 />
                </span>
                <span className="text">Xem đường đi</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="introduce">
          <div className="title-one">GIỚI THIỆU ĐỨC VIỆT COMPUTER</div>
          <div className="underlined"></div>
          <ul className="item">
            <li className="item-info">
              <a href="#">
                <span className="text">Giới thiệu </span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Hoạt động công ty</span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Tuyển dụng </span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Liên hệ </span>
              </a>
            </li>
          </ul>

          <div className="title-one">HỖ TRỢ KHÁCH HÀNG</div>
          <div className="underlined"></div>
          <ul className="item">
            <li className="item-info">
              <a href="#">
                <span className="text">Hướng dẫn thanh toán </span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Hướng dẫn đặt hàng</span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Phương thức vận chuyển</span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Chính sách đổi trả và bảo hành</span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Hướng dẫn mua Laptop trả góp</span>
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <span className="text">Bảng giá nâng cấp phụ kiện</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="pay">
          <div className="title-one">Thông tin tài khoản</div>
          <div className="underlined-full"></div>

          <div className="info-bank">
            <div className="name">
              <span>Ngân hàng Vietcombank</span>
            </div>

            <ul>
              <li>
                Chủ tài khoản: Công ty TNHH Thương Mại và Thông Tin Đức Việt
              </li>
              <li>Số tài khoản: 0491001906241</li>
              <li>Chi nhánh: VCB Thăng Long</li>
            </ul>
          </div>

          <div className="title-one">Thanh toán đơn giản</div>
          <div className="underlined"></div>
          <ul className="item w-100">
            <li className="item-info">
              <a href="#">
                <img src={IMAGE_BIDV} alt="" />
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <img src={IMAGE_AGRIBANK} alt="" />
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <img src={IMAGE_VIETCOMBANK} alt="" />
              </a>
            </li>
            <li className="item-info">
              <a href="#">
                <img src={IMAGE_PAYONLINE} alt="" />
              </a>
            </li>
          </ul>

          <div className="title-one">
            ĐĂNG KÝ THÔNG TIN ĐỂ NHẬN ƯU ĐÃI HẤP DẪN
          </div>
          <div className="underlined"></div>
          <div className="search w-100">
            <form className="SearchFooter">
              <input
                className="SearchFooter__input form-control"
                placeholder="Email của bạn"
              ></input>
              <button className=" btn  SearchFooter__btn">
                <div className="SearchFooter__btn-text">Đăng kí ngay</div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="box-two">
        <div className="introduce">
          <div className="title">
            <span>CÔNG TY TNHH THƯƠNG MẠI VÀ THÔNG TIN ĐỨC VIỆT</span>
          </div>

          <div className="info">
            <div className="info__left">
              <ul>
                <li>Tel: 024.62754433</li>
                <li>THotline: 0985736068</li>
                <li>Email: contact@ducvietco.com</li>
                <li>Thời gian làm việc: 8:30 - 20:00</li>
              </ul>
            </div>
            <div className="info__right">
              <ul>
                <li>MST: 0103956333</li>
                <li>Ngày cấp: 10/06/2009</li>
                <li>
                  Nơi cấp: Phòng đăng ký kinh doanh - Sở kế hoạch và đầu tư
                  Thành phố Hà Nội
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="contact">
          <div className="title">
            <span>KẾT NỐI VỚI CHÚNG TÔI</span>
          </div>
          <ul className="list-icon">
            <li>
              <a href="#">
                <ICON_NEWSPAPER_24 />
              </a>
            </li>
            <li>
              <a href="#">
                <ICON_FACEBOOK_24 />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <ICON_YOUTUBE_24 />
              </a>
            </li>{" "}
            <li>
              <a href="#">
                <ICON_GOOGLE_24 />
              </a>
            </li>
          </ul>
        </div>
        <div className="image">
          <img src={IMAGE_FOOTER} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FooterItem;
