import React from "react";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_GO_ANDROID_LINE_24,
  ICON_MESSAGE_16,
} from "../../../asset/imageJs";
const SummaryBlogHome = () => {
  return (
    <div className="SummaryBlogHome">
      <TuVan />
    </div>
  );
};

export default SummaryBlogHome;

const TuVan = (props) => {
  let a = [];
  for (let i = 0; i < 4; i++) {
    a.push({ id: i });
  }

  return (
    <div className="advisory">
      <div className="advisory__title">
        <div className="one">Tư vấn chọn mua</div>
        <div className="two">
          <a href="">Xem thêm</a>
        </div>
      </div>

      <div className="advisory__content">
        <div className="item-first">
          <div className="image">
            <video controls>
              <source
                src="https://www.w3schools.com/tags/movie.mp4"
                type="video/mp4"
              />
              Trình duyệt của bạn không hỗ trợ HTML5.
            </video>
          </div>
          <div className="desc">
            <a href="" className="desc__title">
              Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi
              11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi 11 Lite 5G: Toàn
              diện quá! Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá! Đánh giá
              Xiaomi Mi 11 Lite 5G: Toàn diện quá!
            </a>
          </div>
        </div>

        <div className="item-second">
          {a.map((i, k) => (
            <a href="s" className="item" key={k}>
              <div className="box">
                <div className="box__image">
                  <img src="https://picsum.photos/1000/800" alt="" />
                </div>
                <div className="box__desc">
                  <div className="box__desc-title">
                    Apple Fitness + bổ sung bài tập cho người đang mang thai và
                    người lớn. Mọi người nên sử dụng
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
