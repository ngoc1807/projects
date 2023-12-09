import React from "react";
import {
  ICON_ARROW_DOWN_24,
  ICON_BUBBLE_QUESTION_24,
} from "../../asset/imageJs";

import "./QuestionItem.scss";
function QuestionItem(props) {
  return (
    <div className="QuestionItem container-fluid">
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__title">CÂU HỎI THƯỜNG GẶP</div>

          <div id="accordion">
            <div className="card">
              <div className="card-header" id="headingFour">
                <div>
                  <button
                    className="btn collapsed "
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {" "}
                    <ICON_BUBBLE_QUESTION_24 />
                    <span>
                      Mua sản phẩm tại DucViet có được đổi trả không? Nếu được
                      thì phí đổi trả sẽ được tính như thế nào?
                    </span>
                  </button>
                </div>
              </div>

              <div
                id="collapseFour"
                className="collapse "
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao
                  gồm các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng
                  dung lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng
                  có thể đổi sang một sản phẩm khác tương đương hoặc cao hơn về
                  giá trị so với sản phẩm lỗi. Trường hợp khách hàng muốn trả
                  sản phẩm: FPTShop sẽ kiểm tra tình trạng máy và thông báo đến
                  Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <div>
                  <button
                    className="btn collapsed "
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    {" "}
                    <ICON_BUBBLE_QUESTION_24 />
                    <span>
                      Mua sản phẩm tại DucViet có được đổi trả không? Nếu được
                      thì phí đổi trả sẽ được tính như thế nào?
                    </span>
                  </button>
                </div>
              </div>

              <div
                id="collapseTwo"
                className="collapse "
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao
                  gồm các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng
                  dung lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng
                  có thể đổi sang một sản phẩm khác tương đương hoặc cao hơn về
                  giá trị so với sản phẩm lỗi. Trường hợp khách hàng muốn trả
                  sản phẩm: FPTShop sẽ kiểm tra tình trạng máy và thông báo đến
                  Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <div>
                  <button
                    className="btn collapsed "
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    {" "}
                    <ICON_BUBBLE_QUESTION_24 />
                    <span>
                      Mua sản phẩm tại DucViet có được đổi trả không? Nếu được
                      thì phí đổi trả sẽ được tính như thế nào?
                    </span>
                  </button>
                </div>
              </div>

              <div
                id="collapseThree"
                className="collapse "
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao
                  gồm các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng
                  dung lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng
                  có thể đổi sang một sản phẩm khác tương đương hoặc cao hơn về
                  giá trị so với sản phẩm lỗi. Trường hợp khách hàng muốn trả
                  sản phẩm: FPTShop sẽ kiểm tra tình trạng máy và thông báo đến
                  Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <div>
                  <button
                    className="btn collapsed "
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="true"
                    aria-controls="collapseFour"
                  >
                    {" "}
                    <ICON_BUBBLE_QUESTION_24 />
                    <span>
                      Mua sản phẩm tại DucViet có được đổi trả không? Nếu được
                      thì phí đổi trả sẽ được tính như thế nào?
                    </span>
                  </button>
                </div>
              </div>

              <div
                id="collapseFour"
                className="collapse "
                aria-labelledby="headingFour"
                data-parent="#accordion"
              >
                <div className="card-body">
                  Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao
                  gồm các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng
                  dung lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng
                  có thể đổi sang một sản phẩm khác tương đương hoặc cao hơn về
                  giá trị so với sản phẩm lỗi. Trường hợp khách hàng muốn trả
                  sản phẩm: FPTShop sẽ kiểm tra tình trạng máy và thông báo đến
                  Khách hàng về giá trị thu lại sản phẩm ngay tại cửa hàng.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionItem;
