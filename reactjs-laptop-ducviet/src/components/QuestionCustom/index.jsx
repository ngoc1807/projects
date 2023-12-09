import React from "react";
import {
  ICON_ARROW_DOWN_24,
  ICON_BUBBLE_QUESTION_24,
} from "../../asset/imageJs";

function QuestionCustom(props) {
  return (
    <div className="QuestionCustom">
      <div className="title">CÂU HỎI THƯỜNG GẶP</div>

      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <div>
              <button
                className="btn collapsed "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <span>
                  <ICON_BUBBLE_QUESTION_24 />
                  Mua sản phẩm tại DucViet có được đổi trả không? Nếu được thì
                  phí đổi trả sẽ được tính như thế nào?
                </span>
                <ICON_ARROW_DOWN_24 />
              </button>
            </div>
          </div>

          <div
            id="collapseOne"
            className="collapse "
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm
              các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung
              lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể
              đổi sang một sản phẩm khác tương đương hoặc cao hơn về giá trị so
              với sản phẩm lỗi. Trường hợp khách hàng muốn trả sản phẩm: FPTShop
              sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị
              thu lại sản phẩm ngay tại cửa hàng.
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
                <span>
                  <ICON_BUBBLE_QUESTION_24 />
                  Mua sản phẩm tại DucViet có được đổi trả không? Nếu được thì
                  phí đổi trả sẽ được tính như thế nào?
                </span>
                <ICON_ARROW_DOWN_24 />
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
              Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm
              các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung
              lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể
              đổi sang một sản phẩm khác tương đương hoặc cao hơn về giá trị so
              với sản phẩm lỗi. Trường hợp khách hàng muốn trả sản phẩm: FPTShop
              sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị
              thu lại sản phẩm ngay tại cửa hàng.
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header" id="headingThere">
            <div>
              <button
                className="btn collapsed "
                data-toggle="collapse"
                data-target="#collapseThere"
                aria-expanded="true"
                aria-controls="collapseThere"
              >
                <span>
                  <ICON_BUBBLE_QUESTION_24 />
                  Mua sản phẩm tại DucViet có được đổi trả không? Nếu được thì
                  phí đổi trả sẽ được tính như thế nào?
                </span>
                <ICON_ARROW_DOWN_24 />
              </button>
            </div>
          </div>

          <div
            id="collapseThere"
            className="collapse "
            aria-labelledby="headingThere"
            data-parent="#accordion"
          >
            <div className="card-body">
              Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm
              các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung
              lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể
              đổi sang một sản phẩm khác tương đương hoặc cao hơn về giá trị so
              với sản phẩm lỗi. Trường hợp khách hàng muốn trả sản phẩm: FPTShop
              sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị
              thu lại sản phẩm ngay tại cửa hàng.
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
                <span>
                  <ICON_BUBBLE_QUESTION_24 />
                  Mua sản phẩm tại DucViet có được đổi trả không? Nếu được thì
                  phí đổi trả sẽ được tính như thế nào?
                </span>
                <ICON_ARROW_DOWN_24 />
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
              Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm
              các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung
              lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể
              đổi sang một sản phẩm khác tương đương hoặc cao hơn về giá trị so
              với sản phẩm lỗi. Trường hợp khách hàng muốn trả sản phẩm: FPTShop
              sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị
              thu lại sản phẩm ngay tại cửa hàng.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingFive">
            <div>
              <button
                className="btn collapsed "
                data-toggle="collapse"
                data-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
              >
                <span>
                  <ICON_BUBBLE_QUESTION_24 />
                  Mua sản phẩm tại DucViet có được đổi trả không? Nếu được thì
                  phí đổi trả sẽ được tính như thế nào?
                </span>
                <ICON_ARROW_DOWN_24 />
              </button>
            </div>
          </div>

          <div
            id="collapseFive"
            className="collapse "
            aria-labelledby="headingFive"
            data-parent="#accordion"
          >
            <div className="card-body">
              Đối với các sản phẩm ĐTDĐ, MTB, MTXT, SMARTWATCH (Áp dụng bao gồm
              các sản phẩm Apple), sản phẩm cùng model, cùng màu, cùng dung
              lượng. Trong tình huống sản phẩm đổi hết hàng, khách hàng có thể
              đổi sang một sản phẩm khác tương đương hoặc cao hơn về giá trị so
              với sản phẩm lỗi. Trường hợp khách hàng muốn trả sản phẩm: FPTShop
              sẽ kiểm tra tình trạng máy và thông báo đến Khách hàng về giá trị
              thu lại sản phẩm ngay tại cửa hàng.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionCustom;
