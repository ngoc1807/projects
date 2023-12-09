import React from "react";
import {
  ICON_BANK_CARD,
  ICON_SWAP_FILL,
  ICON_TRUCK_FILL,
  ICON_WHATSAPP_FILL,
} from "../../asset/imageJs";

const HighlightItem = (props) => {
  return (
    <div className="Highlight col-12 w-100">
      <div className="item one">
        <div className="item__image">
          <ICON_TRUCK_FILL />
        </div>
        <div className="item__desc">
          <div className="item__desc-title">Chính sách giao hàng</div>
          <div className="item__desc-text">Nhận hàng và thanh toán tại nhà</div>
        </div>
      </div>
      <div className="item two">
        <div className="item__image">
          <ICON_SWAP_FILL />
        </div>
        <div className="item__desc">
          <div className="item__desc-title">Đổi trả dễ dàng</div>
          <div className="item__desc-text">Dùng thử trong vòng 3 ngày</div>
        </div>
      </div>
      <div className="item one">
        <div className="item__image">
          <ICON_BANK_CARD />
        </div>
        <div className="item__desc">
          <div className="item__desc-title">Thanh toán tiện lợi</div>
          <div className="item__desc-text">
            Trả tiền mặt, trả góp, chuyển khoản
          </div>
        </div>
      </div>
      <div className="item two">
        <div className="item__image">
          <ICON_WHATSAPP_FILL />
        </div>
        <div className="item__desc">
          <div className="item__desc-title">Hỗ trợ nhiệt tình</div>
          <div className="item__desc-text">Tư vấn, giải đáp mọi thắc mắc</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightItem;
