import React from "react";
import { ICON_STAR_16 } from "../../asset/imageJs";

import "./CommentCustom.scss";

function CommentCustom(props) {
  const { widthCustom, title } = props;

  return (
    <div
      className="CommentCustomMobile container-fluid"
      style={{ width: widthCustom }}
    >
      <div className="row">
        <div className="box col-12 w-100">
          <div className="box__title">{title}</div>
          <div className="box__content">
            <div className="box__content-form">
              <textarea
                class="form-control"
                placeholder="Viết đánh giá của bạn"
                rows="5"
                id="comment"
              ></textarea>
            </div>
            <div className="box__content-title">
              <span>Các đánh giá khác</span>
            </div>

            <div className="box__content-list">
              <div className="item">
                <div className="item__image">
                  <img
                    src="https://vtv1.mediacdn.vn/zoom/700_438/2020/4/20/one-piece-anime-hiatus-15873776419971960853722.jpg"
                    alt=""
                  />
                </div>

                <div className="item__info">
                  <div className="item__info-title">
                    <div className="name">Trần Văn A</div>
                    <div className="rating"></div>
                  </div>

                  <div className="item__info-time">12:00, 12/02/2021</div>
                  <div className="item__info-summary">
                    Dell N3579 có thiết kế rất hiện đại, mang dáng vẻ thời
                    trang, đáp ứng nhiều nhu cầu cụ thể, đòi hỏi khắt khe của
                    người dùng. Từ bộ xử lý mới nhất cho đến card đồ họa rời
                    mạnh mẽ, Dell N3579 làm cho mọi trải nghiệm trở nên tuyệt
                    vời và chân thực hơn.
                  </div>
                </div>

                <div className="item-child">
                  <div
                    className="
                    "
                  ></div>
                </div>
              </div>

              <div className="item">
                <div className="item__image">
                  <img
                    src="https://vtv1.mediacdn.vn/zoom/700_438/2020/4/20/one-piece-anime-hiatus-15873776419971960853722.jpg"
                    alt=""
                  />
                </div>

                <div className="item__info">
                  <div className="item__info-title">
                    <div className="name">Trần Văn A</div>

                    <div className="rating"></div>
                  </div>

                  <div className="item__info-time">12:00, 12/02/2021</div>
                  <div className="item__info-summary">
                    Dell N3579 có thiết kế rất hiện đại, mang dáng vẻ thời
                    trang, đáp ứng nhiều nhu cầu cụ thể, đòi hỏi khắt khe của
                    người dùng. Từ bộ xử lý mới nhất cho đến card đồ họa rời
                    mạnh mẽ, Dell N3579 làm cho mọi trải nghiệm trở nên tuyệt
                    vời và chân thực hơn.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCustom;
