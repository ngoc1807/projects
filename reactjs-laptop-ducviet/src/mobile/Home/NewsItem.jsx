import React from "react";
import {
  ICON_ARROW_DOWN_DOUBLE_24,
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_GO_ANDROID_LINE_24,
  ICON_MESSAGE_16,
} from "../../asset/imageJs";
import "./NewsItem.scss";
const NewsItem = ({
  title,
  comment = true,
  amount = 5,
  showMore = true,
} = {}) => {
  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return (
    <div className="NewsItem container-fluid">
      <div className="row">
        <div className="box w-100 col-12">
          <div className="box__title">
            <div className="text">{title || "Tin tức"}</div>
            <a href="">
              <div className="showMore">Xem thêm</div>
            </a>
          </div>

          <div className="box__content">
            {comment
              ? a.map((i, k) => (
                  <a href="s" className="item" key={k}>
                    <div className="box">
                      <div className="box__image">
                        <img src="https://picsum.photos/600/400" alt="" />
                      </div>
                      <div className="box__desc">
                        <div className="box__desc-title">
                          Apple Fitness + bổ sung bài tập cho người đang mang
                          thai và người lớn. Mọi người nên sử dụng
                        </div>

                        <div className="box__desc-option">
                          <div className="time">
                            <ICON_CLOCK_16 />
                            <span>12:00, 20/08/2021</span>
                          </div>
                          <div className="time">
                            <ICON_EYE_16 />
                            <span>220</span>
                          </div>
                          <div className="time">
                            <ICON_MESSAGE_16 />
                            <span>220</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))
              : a.map((i, k) => (
                  <a href="s" className="item1" key={k}>
                    <div className="box">
                      <div className="box__image">
                        <img src="https://picsum.photos/600/400" alt="" />
                      </div>
                      <div className="box__desc">
                        <div className="box__desc-title">
                          Apple Fitness + bổ sung bài tập cho người đang mang
                          thai và người lớn. Mọi người nên sử dụng
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
