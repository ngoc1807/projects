import React from "react";

function FormItem(props) {
  return (
    <form className="FormOrderVoucherItem container-fluid">
      <div className="row">
        <Item />
      </div>
    </form>
  );
}

const Item = () => {
  return (
    <div className="box col-12 w-100">
      <div className="box__content">
        <div className="group-input">
          <div className="title">Nhập voucher</div>

          <div class="input-group ">
            <input type="text" class="form-control" placeholder="" />
            <div class="input-group-append">
              <button class="btn " type="submit">
                Xong
              </button>
            </div>
          </div>
        </div>

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
    </div>
  );
};

export default FormItem;
