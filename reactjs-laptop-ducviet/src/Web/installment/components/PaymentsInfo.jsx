import React from "react";
import "./PaymentsInfo.scss";
import img1 from "./../../../asset/image/home/tragoptable.png";
import CheckedGroupText from "../../../components/CheckedGroupText/CheckedGroupText";
import RadioCustom from "../../../components/RadioCustom/RadioCustom";

const data = [
  { id: 1, text: "6 tháng", active: true },
  { id: 2, text: "7 tháng", active: false },
  { id: 3, text: "8 tháng", active: false },

  { id: 4, text: "9 tháng", active: false },

  { id: 5, text: "10 tháng", active: false },
  { id: 6, text: "11 tháng", active: false },

  { id: 7, text: "12 tháng", active: false },
];

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

const TableInfo = () => {
  return (
    <div className="PaymentsInfo" id="PaymentsInfo-0">
      <BoxTwo />
      <div className="table">
        <table width="100%">
          <thead>
            <tr>
              <th>Công ty</th>
              <th>
                <img src={img1} />
              </th>
              <th>
                <img src={img1} />
              </th>
              <th>
                <img src={img1} />
              </th>
              <th>
                <img src={img1} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="first">Giá sản phẩm</td>

              <td>18.292.000đ </td>
              <td>18.292.000đ </td>
              <td>18.292.000đ </td>
              <td>18.292.000đ </td>
            </tr>
            <tr className="first">
              <td className="first select">
                <div className="text">Trả trước</div>
                <select className="custom-select" id="inputGroupSelect04">
                  <option selected>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </td>
              <td>18.292.000đ (40%)</td>
              <td>18.292.000đ (40%)</td>
              <td>18.292.000đ (40%)</td>
              <td>18.292.000đ (40%)</td>
            </tr>

            <tr>
              <td className="first"> Lãi suất thực</td>
              <td>12%</td>
              <td>12%</td>
              <td>12%</td>
              <td>12%</td>
            </tr>
            <tr className="first">
              <td className="first"> Giấy tờ cần có</td>
              <td>CMND / Bằng lái xe</td>
              <td>CMND / Bằng lái xe</td>
              <td>CMND / Bằng lái xe</td>
              <td>CMND / Bằng lái xe</td>
            </tr>
            <tr>
              <td className="first"> Góp mỗi tháng</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
            </tr>
            <tr className="first">
              <td className="first"> Tổng tiền phải trả</td>
              <td className="red">22.992.000đ</td>
              <td className="red">22.992.000đ</td>
              <td className="red">22.992.000đ</td>
              <td className="red">22.992.000đ</td>
            </tr>
            <tr>
              <td className="first"> Chênh lệch so với mua thẳng</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
              <td>2.992.000đ</td>
            </tr>
            <tr className="first">
              <td className="first"> Xét duyệt online</td>
              <td>Chưa hỗ trợ</td>
              <td>
                <button className="btn">Đăng ký</button>
              </td>
              <td>
                <button className="btn">Đăng ký</button>
              </td>
              <td>
                <button className="btn">Đăng ký</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="note">
        <span>* Lưu ý :</span>
        Bảng tính này chỉ mang tính chất tham khảo. Vui lòng đến trực tiếp
        showroom để được chỉ dẫn chi tiết hơn
      </div>
      <FormItem />
    </div>
  );
};

const BoxTwo = () => {
  return (
    <div className="BoxTwo">
      <div className="title">Chọn số tháng trả góp:</div>
      <div className="content">
        <CheckedGroupText id="installment" data={data} />
      </div>
    </div>
  );
};

const FormItem = () => {
  return (
    <div className="FormItem">
      <div className="title">
        <div className="left">Thông tin khách hàng</div>
        <div className="right">
          <RadioCustom title="Anh" defaultChecked styleLabel={radioText} />
          <RadioCustom title="Chị" styleLabel={marginLeft} />
        </div>
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
        <div className="left">Địa chỉ nhận hàng</div>
        <div className="right"></div>
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
          className="form-control"
          placeholder="Số nhà, tên đường"
        />
      </div>

      <div className="box-btn">
        <button className="btn">
          <div className="icon">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M29.8177 26.1819H24.7269C21.5189 26.1819 18.9088 23.5718 18.9088 20.3638C18.9088 17.1558 21.5189 14.5457 24.7269 14.5457H29.8177C30.2197 14.5457 30.545 14.2204 30.545 13.8185V11.6367C30.545 10.1116 29.3621 8.87133 27.8675 8.75106L23.6907 1.45572C23.3037 0.781006 22.6787 0.298763 21.9308 0.0985167C21.1865 -0.100366 20.4081 0.00408642 19.7419 0.39183L5.42378 8.7276H2.90907C1.30471 8.7276 0 10.0322 0 11.6367V29.0909C0 30.6953 1.30464 32 2.90907 32H27.636C29.2403 32 30.545 30.6954 30.545 29.0909V26.9092C30.545 26.5072 30.2197 26.1819 29.8177 26.1819ZM24.5927 5.95974L26.1774 8.7276H19.8385L24.5927 5.95974ZM8.31464 8.7276L20.4741 1.64888C20.803 1.4564 21.1872 1.40527 21.5544 1.50331C21.9258 1.60272 22.2355 1.84278 22.428 2.17871L22.4295 2.18137L11.1858 8.7276H8.31464Z"
                  fill="white"
                />
                <path
                  d="M29.8177 16.0002H24.7268C22.3206 16.0002 20.3633 17.9576 20.3633 20.3638C20.3633 22.77 22.3206 24.7273 24.7268 24.7273H29.8177C31.0208 24.7273 31.9995 23.7487 31.9995 22.5456V18.182C31.9995 16.9789 31.0208 16.0002 29.8177 16.0002ZM24.7268 21.8183C23.925 21.8183 23.2723 21.1656 23.2723 20.3638C23.2723 19.562 23.925 18.9093 24.7268 18.9093C25.5287 18.9093 26.1813 19.562 26.1813 20.3638C26.1814 21.1656 25.5287 21.8183 24.7268 21.8183Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="content">
            <div className="text">ĐẶT MUA TRẢ GÓP</div>
            <div className="text2">Đến của hàng làm hồ sơ</div>
          </div>
        </button>
      </div>
    </div>
  );
};
export default TableInfo;
