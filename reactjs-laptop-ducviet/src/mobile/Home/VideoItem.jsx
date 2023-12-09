import React from "react";
import "./VideoItem.scss";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
} from "../../asset/imageJs";
const VideoItem = ({ title }) => {
  return (
    <div className="VideoItem">
      <div className="VideoItem__two col-12">
        <div className="item">
          <div className="item__title">
            <div className="left">{title || "tiêu đề"}</div>

            <a href="#" className="right">
              <div className="showMore">Xem thêm</div>
            </a>
          </div>
          <div className="item__typeOne">
            <a href="#c" className="typeOne">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
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
            </a>
          </div>
          <div className="item__typeTwo">
            <a href="#d" className="typeTwo">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
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
            </a>
            <a href="#d" className="typeTwo">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
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
            </a>

            <a href="#d" className="typeTwo">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
