import React from "react";
import "./ContentItem.scss";
import imgHotline from "./../../asset/image/home/img_hotline.png";
const ContentItem = () => {
  return (
    <div className="ContentItem">
      <div className="box">
        <div className="imageBox">
          <img src={imgHotline} alt="" />
          <div className="imageText">Đơn hàng đã được đặt hàng thành công</div>
        </div>

        <div className="contentBox">
          <div class="custom-control custom-radio">
            <input
              type="radio"
              class="custom-control-input"
              id="customControlValidation2"
              name="radio-stacked"
              //   required
            />
            <label class="custom-control-label" for="customControlValidation2">
              Thanh toán khi nhận hàng
            </label>
          </div>
          <div class="custom-control custom-radio mb-3">
            <input
              type="radio"
              class="custom-control-input"
              id="customControlValidation3"
              name="radio-stacked"
              //   required
            />
            <label class="custom-control-label" for="customControlValidation3">
              Or toggle this other custom radio
            </label>
            <div class="invalid-feedback">
              More example invalid feedback text
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
