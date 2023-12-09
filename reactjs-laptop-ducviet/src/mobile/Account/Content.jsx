import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_RIGHT_24,
  ICON_BAG_PERCENT_16,
  ICON_CARD_16,
  ICON_PHONE_16,
  ICON_LOCATION_16,
  ICON_FACEBOOK_16,
} from "../../asset/imageJs";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <BoxOne />
        <BoxTwo />
        <BoxThree />
      </div>
    </div>
  );
}

const BoxOne = (props) => {
  return (
    <div className="BoxOne col-12">
      <div className="BoxOne__title">
        <span>CÔNG TY TNHH TM VÀ TT ĐỨC VIỆT</span>
      </div>

      <div className="BoxOne__list">
        <a className="item">
          <div className="icon-first">
            <ICON_LOCATION_16 />
          </div>
          <div className="text">Hệ thống cửa hàng</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="icon-first phone">
            <ICON_PHONE_16 />
          </div>
          <div className="text">Thông tin liên hệ</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="icon-first face">
            <ICON_FACEBOOK_16 />
          </div>
          <div className="text">Kết nối với chúng tôi</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="icon-first card">
            <ICON_CARD_16 />
          </div>
          <div className="text">Thông tin tài khoản</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item" data-toggle="modal" data-target="#contactModal">
          <div className="icon-first bag">
            <ICON_BAG_PERCENT_16 />
          </div>
          <div className="text">Nhận thông tin ưu đãi</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
      </div>

      <div className="BoxOne__modal">
        <div
          class="modal fade"
          id="contactModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <div className="title">Nhận thông tin ưu đãi</div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email của bạn"
                />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn  w-100" data-dismiss="modal">
                  Đăng ký ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const BoxTwo = (props) => {
  return (
    <div className="BoxTwo col-12">
      <div className="BoxTwo__title">
        <span>GIỚI THIỆU ĐỨC VIỆT COMPUTER</span>
      </div>

      <div className="BoxTwo__list">
        <a className="item">
          <div className="text">Giới thiệu</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="text">Hoạt động công ty</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="text">Tuyển dụng</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="text">Liên hệ</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
      </div>
    </div>
  );
};

const BoxThree = (props) => {
  return (
    <div className="BoxThree col-12">
      <div className="BoxThree__title">
        <span>HỖ TRỢ KHÁCH HÀNG</span>
      </div>

      <div className="BoxThree__list">
        <a className="item">
          <div className="text">Hướng dẫn thanh toán</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="text">Hướng dẫn đặt hàng</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="text">Phương thức vận chuyển</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="text">Chính sách đổi trả và bảo hành</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
      </div>
    </div>
  );
};
export default ContentItem;
