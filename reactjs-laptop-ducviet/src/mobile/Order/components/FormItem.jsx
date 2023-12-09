import React from "react";
import { CheckBoxCustom, RadioBoxCustom } from "./../../../components/Form";
import RadioCustom from "../../../components/RadioCustom/RadioCustom";
import "./FormItem.scss";
function FormItem(props) {
  return (
    <form className="FormCartItem">
      <ItemRight />
      <ItemLeft />
    </form>
  );
}
const checkBoxText = {
  color: "#2F3136",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: 500,
};
const radioText = {
  // marginLeft: "16px",
  color: "#2F3136",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "normal",
};
const marginLeft = {
  ...radioText,

  marginLeft: "16px",
};

const ItemRight = () => {
  return (
    <div className="right" style={{}}>
      <div className="right__title">Thông tin nhận hàng</div>
      <div className="right__content">
        <div className="box">
          <div className="box-title">
            <div className="box-title-text">
              <span>Thông tin khách hàng</span>
            </div>
            <div className="box-title-option">
              <RadioCustom title="Anh" styleLabel={radioText} name="gender" />
              <RadioCustom
                title="Chị"
                defaultChecked
                styleLabel={marginLeft}
                name="gender"
              />
            </div>
          </div>

          <div className="box-formOne">
            <input
              type="text"
              placeholder="Nhập họ tên"
              className="form-control mr-3"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              className="form-control mr-3"
            />
            <input type="text" placeholder="Email" className="form-control" />
          </div>
          {/*  */}
          <div className="box-title">
            <div className="box-title-text">
              <span>Địa chỉ nhận hàng</span>
            </div>
          </div>

          <div className="box-formTwo">
            <CheckBoxCustom
              type={2}
              label="Giao hàng tại nhà"
              defaultChecked
              styleLabel={checkBoxText}
            />

            <div className="content">
              <div className="content-one">
                <input
                  type="text"
                  placeholder="Tỉnh/Thành phố"
                  className="form-control mr-3"
                />
                <input
                  type="text"
                  placeholder="Quận/Huyện"
                  className="form-control mr-3"
                />
                <input
                  type="text"
                  placeholder="Số nhà, phường xã..."
                  className="form-control"
                />
              </div>

              <div className="content-two">
                <input
                  type="text"
                  placeholder="Số nhà, tên đường"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="box-formTwo">
            <CheckBoxCustom
              type={2}
              label="Nhận sản phẩm tại cửa hàng"
              defaultChecked
              styleLabel={checkBoxText}
            />

            <div className="content">
              <div className="content-three">
                <RadioCustom
                  title="233 Xã Đàn, Đống Đa, Hà Nội"
                  styleLabel={radioText}
                  defaultChecked
                  name="address"
                />
                <RadioCustom
                  title="93 Lê Thanh Nghị, Hai Bà Trưng, Hà Nội"
                  styleLabel={radioText}
                  name="address"
                />
              </div>

              <div className="content-two">
                <input
                  type="text"
                  placeholder="Yêu cầu không bắt buộc"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="box-formTwo">
            <CheckBoxCustom
              type={2}
              label="Gọi người khác nhận hàng (nếu có)"
              defaultChecked
              styleLabel={checkBoxText}
            />

            <div className="content">
              <div className="content-four">
                <RadioCustom
                  title="Anh"
                  defaultChecked
                  styleLabel={radioText}
                />
                <RadioCustom title="Chị" styleLabel={radioText} />
              </div>

              <div className="content-two">
                <input
                  type="text"
                  placeholder="Số nhà, tên đường"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const ItemLeft = () => {
  return (
    <div className="left">
      <div className="left__title">
        <span>đơn hàng</span>
      </div>

      <div className="left__content">
        <div className="group-input">
          <div className="title">Nhập voucher</div>

          <div className="input-group ">
            <input type="text" className="form-control" placeholder="" />
            <div className="input-group-append">
              <button className="btn " type="submit">
                Xong
              </button>
            </div>
          </div>
        </div>
        <div className="notify">message</div>
        <div className="item">
          <div className="title">Số tiền</div>
          <div className="text money">12.900.000đ</div>
        </div>

        <div className="item">
          <div className="title">Mã giảm giá</div>
          <div className="text sale">0đ</div>
        </div>
        <div className="item">
          <div className="title">Phí vận chuyển</div>
          <div className="text trans">Chưa tính</div>
        </div>
        <div className="item">
          <div className="title">Tổng tiền</div>
          <div className="text total">12.900.000đ</div>
        </div>
      </div>
      <div className="left__btn">
        <button className="btn">Gửi đơn hàng</button>
      </div>
    </div>
  );
};

export default FormItem;
