import React from "react";

function FormItem(props) {
  return (
    <form className="FormOrderItem container-fluid">
      <div className="row">
        <Item />
      </div>
    </form>
  );
}

const Item = () => {
  return (
    <div className="box col-12 w-100">
      <div className="boxOne">
        <div className="boxOne-title">1. Thông tin nhận hàng</div>

        <div className="input-group">
          <div className="name">Họ tên</div>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập họ tên"
          />
        </div>

        <div className="input-group">
          <div className="name">Số điện thoại</div>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập số điện thoại"
          />
        </div>

        <div className="input-group">
          <div className="name">Email</div>
          <input
            type="text"
            className="form-control"
            placeholder="Nhập email"
          />
        </div>

        <div className="input-group select">
          <div className="name">Địa chỉ</div>
          <div className="select-group ">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Tỉnh / thành phố</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Quận huyện</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Số nhà, phường xã ..."
            />
          </div>
        </div>
        <div className="input-group">
          <div className="name">Ghi chú</div>
          <textarea
            type="text"
            className="form-control"
            placeholder="Nhập ghi chú"
            rows={3}
          />
          <div className="notify d-none">message</div>
        </div>
      </div>

      <div className="boxTwo">
        <div className="boxTwo-title">2. Phương thức thanh toán</div>
        <div className="radio-group">
          <div className="RadioBoxCustom">
            <label class="container">
              Thanh toán qua chuyển khoản qua tài khoản ngân hàng
              <span className="note1"> (khuyên dùng)</span>
              <input type="radio" name="radio" checked />
              <span class="checkmark"></span>
            </label>

            <label class="container">
              Thanh toán tiền mặt khi nhận hàng (tiền mặt / quẹt thẻ ATM, Visa,
              Master)
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
      </div>

      <div className="boxTwo">
        <div className="boxTwo-title">3. Hình thức giao hàng</div>
        <div className="radio-group">
          <div className="RadioBoxCustom">
            <label class="container">
              Nhận sản phẩm tại cửa hàng
              <input type="radio" name="radio1" />
              <span class="checkmark"></span>
            </label>

            <label class="container">
              Giao hàng tận nơi
              <span className="note2"> (Chính sách giao hàng)</span>
              <input type="radio" name="radio1" checked />
              <span class="checkmark"></span>
            </label>
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
      <div className="left__btn">
        <button className="btn">Gửi đơn hàng</button>
      </div>
    </div>
  );
};

export default FormItem;
