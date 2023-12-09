import React from "react";
import "./PaymentsItem.scss";
import atm from "./../../../asset/image/home/atm.png";

const PaymentsItem = () => {
  return (
    <div className="PaymentsItem">
      <BoxOne />
    </div>
  );
};

const BoxOne = () => {
  return (
    <div className="BoxOne">
      <div className="title">Chọn phương thức trả góp phù hợp:</div>
      <div className="content">
        <label className="RadioCustom">
          <div className="body">
            <div className="text">CÔNG TY TÀI CHÍNH</div>
            <div className="image">
              <img src={atm} alt="" />
              <img src={atm} alt="" />
              <img src={atm} alt="" />
            </div>
          </div>
          <input type="radio" name="PaymentsType" defaultChecked />
          <span className="checkmark" />
        </label>
        <label className="RadioCustom">
          <div className="body">
            <div className="text"> THẺ VISA MASTER</div>
            <div className="image">
              <img src={atm} alt="" />
              <img src={atm} alt="" />
              <img src={atm} alt="" />
            </div>
          </div>
          <input type="radio" name="PaymentsType" />
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
};

export default PaymentsItem;
