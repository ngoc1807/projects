import React from "react";
import CheckedGroupText from "../../../components/CheckedGroupText/CheckedGroupText";
import "./PaymentsInfo2.scss";
import img1 from "./../../../asset/image/home/tragoptable.png";
import RadioCustom from "../../../components/RadioCustom/RadioCustom";
const data = [
  { id: 1, text: "", src: "https://picsum.photos/128/64", active: true },
  { id: 2, text: "", src: "https://picsum.photos/128/64", active: false },
  { id: 3, text: "", src: "https://picsum.photos/128/64", active: false },

  { id: 4, text: "", src: "https://picsum.photos/128/64", active: false },

  { id: 5, text: "", src: "https://picsum.photos/128/64", active: false },
  { id: 6, text: "", src: "https://picsum.photos/128/64", active: false },

  { id: 7, text: "", src: "https://picsum.photos/128/64", active: false },
  { id: 7, text: "", src: "https://picsum.photos/128/64", active: false },
  { id: 7, text: "", src: "https://picsum.photos/128/64", active: false },
];
const data2 = [
  { id: 1, text: "", src: "https://picsum.photos/128/64", active: true },
  { id: 2, text: "", src: "https://picsum.photos/128/64", active: false },
];
const radioText = {
  // marginLeft: "16px",
  color: "#2F3136",
  // fontSize: "16px",
  // lineHeight: "24px",
  // fontWeight: "normal",
};
const marginLeft = {
  ...radioText,
  marginLeft: "16px",
};
const PaymentsInfo2 = () => {
  return (
    <div className="PaymentsInfo2" id="PaymentsInfo-0">
      <div className="step-one">
        <div className="title">Bước 1: Chọn thẻ tín dụng của ngân hàng</div>
        <div className="content">
          <CheckedGroupText id="typeInstallment2" data={data} number={3} />
        </div>
      </div>
      <div className="step-one">
        <div className="title">Bước 2: Chọn loại thẻ thanh toán</div>
        <div className="content">
          <CheckedGroupText id="typeInstallment3" data={data2} />
        </div>
      </div>

      <div className="step-two">
        <div className="title">Bước 3: Chọn số tiền trả góp</div>
        <div className="content">
          <select className="custom-select" id="inputGroupSelect04">
            <option selected>Trả góp: 20.000.000đ</option>
            <option value="1">Trả góp: 20.000.000đ</option>
            <option value="2">Trả góp: 20.000.000đ</option>
            <option value="3">Trả góp: 20.000.000đ</option>
          </select>
        </div>
      </div>

      <div className="step-three">
        <div className="title">Bước 4: Chọn số tháng trả góp </div>
        <div className="content">
          <table width="100%">
            <thead>
              <tr>
                <th colSpan="4">Trả góp qua thẻ VISA của NH Quốc tế</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first">Số tháng trả góp</td>

                <td>6 tháng</td>
                <td>6 tháng</td>
                <td>6 tháng</td>
              </tr>
              <tr className="first">
                <td className="first select">
                  <div className="text">Giá mua trả góp</div>
                </td>
                <td>18.292.000đ (40%)</td>
                <td>18.292.000đ (40%)</td>
                <td>18.292.000đ (40%)</td>
              </tr>

              <tr>
                <td className="first"> Góp mỗi tháng</td>
                <td>12%</td>
                <td>12%</td>
                <td>12%</td>
              </tr>
              <tr className="first">
                <td className="first"> Giấy tờ cần có</td>
                <td>CMND / Bằng lái xe</td>
                <td>CMND / Bằng lái xe</td>
                <td>CMND / Bằng lái xe</td>
              </tr>
              <tr>
                <td className="first red"> Góp mỗi tháng</td>
                <td className="red">2.992.000đ</td>
                <td className="red">2.992.000đ</td>
                <td className="red">2.992.000đ</td>
              </tr>
              <tr className="first">
                <td className="first red"> Tổng tiền phải trả</td>
                <td className="red">22.992.000đ</td>
                <td className="red">22.992.000đ</td>
                <td className="red">22.992.000đ</td>
              </tr>
              <tr>
                <td className="first"> Chênh lệch so với mua thẳng</td>
                <td>2.992.000đ</td>
                <td>2.992.000đ</td>
                <td>2.992.000đ</td>
              </tr>
              <tr className="first">
                <td className="first"> Xét duyệt online</td>
                <td>
                  <button className="btn">Chọn mua</button>
                </td>
                <td>
                  <button className="btn">Chọn mua</button>
                </td>
                <td>
                  <button className="btn">Chọn mua</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <FormItem />
    </div>
  );
};

const FormItem = () => {
  return (
    <div className="FormItem">
      <div className="title">
        <div className="left">Thông tin khách hàng</div>
        <div className="right"></div>
      </div>
      <div className="box-option">
        <RadioCustom title="Anh" defaultChecked styleLabel={radioText} />
        <RadioCustom title="Chị" styleLabel={marginLeft} />
      </div>
      <div className="box-one">
        <input type="text" className="form-control" placeholder="Nhập họ tên" />
        <input
          type="text"
          className="form-control"
          placeholder="Số điện thoại"
        />
        <input type="text" className="form-control" placeholder="Email" />
      </div>

      <div className="title">
        <div className="left">Để được phục vụ nhanh hơn, hãy chọn thêm</div>
        <div className="right"></div>
      </div>

      <div className="box-option2">
        <RadioCustom
          title="Giao hàng tận nơi"
          name="test2"
          // styleLabel={marginLeft}
        />
      </div>
      <div className="box-two">
        <div className="group">
          <select className="custom-select" placeholder="Tỉnh/Thành phố">
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <select className="custom-select" placeholder="Quận/Huyện">
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
          <select className="custom-select" placeholder="Số nhà, phường xã...">
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <input
          type="text"
          className="form-control "
          placeholder="Số nhà, tên đường"
        />
        <input
          type="text"
          className="form-control mt-3"
          placeholder="Yêu cầu (không bắt buộc)"
        />
      </div>
      <div className="box-option2">
        <RadioCustom
          title="Nhận tại siêu thị"
          name="test2"
          // styleLabel={marginLeft}
        />
      </div>
      <div className="box-btn">
        <button className="btn">Thanh toán ngay</button>
      </div>
    </div>
  );
};
export default PaymentsInfo2;
