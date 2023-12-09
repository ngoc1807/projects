import React from "react";
import RadioCustom from "../../components/RadioCustom/RadioCustom";
import "./Payment.scss";
import atm from "./../../asset/image/home/atm.png";
const Payment = (props) => {
  const radioText = {
    // marginLeft: "16px",
    color: "#2F3136",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "500",
  };
  return (
    <div className="Payment">
      {/* <div className="Payment__title">
        <div className="text">Thanh toán</div>
      </div> */}
      <div className="Payment__content">
        <div className="box mb16">
          <RadioCustom
            title="Thanh toán khi nhận hàng"
            styleLabel={radioText}
            defaultChecked
            name="payment"
            className="box-title"
          />

          <div className="box-content ">
            <div className="box-content-item   mb16 ATM ">
              <div className="left">
                <div className="left-title">Thanh toán thẻ ATM</div>
                <div className="left-content">Có Internet Banking</div>
              </div>
              <div className="right">
                <img src={atm} alt="" />
              </div>
            </div>
            <div className="box-content-item  mb16 CREDIT ">
              <div className="left">
                <div className="left-title">Thanh toán thẻ </div>
                <div className="left-content">CREDIT</div>
              </div>
              <div className="right">
                <img src={atm} alt="" />
                <img src={atm} alt="" />
                <img src={atm} alt="" />
              </div>
            </div>
            <div className="box-content-item mb16 MOMO">
              <div className="left">
                <div className="left-title">Thanh toán qua MOMO</div>
              </div>
              <div className="right">
                {" "}
                <img src={atm} alt="" />
              </div>
            </div>
            <div className="box-content-item QR">
              <div className="left">
                <div className="left-title">Thanh toán thẻ QR Code</div>
              </div>
              <div className="right">
                <img src={atm} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="box2 mb16">
          <RadioCustom
            title="Thanh toán khi nhận hàng"
            styleLabel={radioText}
            name="payment"
            className="box2-title"
          />

          <div className="box2-content ">
            <div className="box2-content-item  ">
              <div className="title">NGÂN HÀNG VIETINBANK</div>
              <div className="content">
                <div className="content-text">
                  <div className="text1">Tên chủ tài khoản:</div>
                  <div className="text2">Phạm Đức Hoàng</div>
                </div>
                <div className="content-text">
                  <div className="text1">Số tài khoản:</div>
                  <div className="text2">0491 0000 29190</div>
                </div>
                <div className="content-text">
                  <div className="text1">Chi nhánh:</div>
                  <div className="text2">VCB Thăng Long</div>
                </div>
              </div>
            </div>
            <div className="box2-content-item">
              <div className="title">NGÂN HÀNG VIETCOMBANK</div>
              <div className="content">
                <div className="content-text">
                  <div className="text1">Tên chủ tài khoản:</div>
                  <div className="text2">Phạm Đức Hoàng</div>
                </div>
                <div className="content-text">
                  <div className="text1">Số tài khoản:</div>
                  <div className="text2">0491 0000 29190</div>
                </div>
                <div className="content-text">
                  <div className="text1">Chi nhánh:</div>
                  <div className="text2">VCB Thăng Long</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Payment__bottom">
        <div className="title">
          Mọi thông tin liên hệ Hotline: <span>0985 736 068</span> hoặc
          <span> 024.6275.4433</span>
        </div>
        <div className="content">
          <div className="btn btn-danger">Trở về trang chủ</div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
