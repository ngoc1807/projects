import React from "react";

import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_GO_ANDROID_LINE_24,
  ICON_MESSAGE_16,
} from "../../asset/imageJs";
import { ItemBlogCustom } from "../components/ItemBlogCustom";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <div className="MainBlog col-12">
          <MainBlog />
          <DangChuY title="Đáng chú ý" />
          <ItemBlogCustom title="Xu hướng" comment={true} amount={3} />
          <AdsItem />

          <ItemBlogCustom
            title="Tin khuyến mãi"
            showMore={true}
            comment={true}
            amount={5}
          />

          <DangChuY title="Tin mới nhất" />

          <ItemTwo title="Tư vấn chọn mua" />
          <ItemBlogCustom
            title="Hướng dẫn kĩ thuật"
            showMore={true}
            comment={true}
            amount={5}
          />
          <AdsItem1 />
        </div>
      </div>
    </div>
  );
}

const MainBlog = (props) => {
  return (
    <div className="MainBlog__one">
      <a href="#a" className="item-first">
        <div className="box">
          <div className="image">
            <img src="https://picsum.photos/1000/800" alt="" />
          </div>
          <div className="desc">
            <div className="desc__title">
              Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi
              11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi 11 Lite 5G: Toàn
              diện quá!
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
        </div>
      </a>
      <a href="#b" className="item-second">
        <div className="box">
          <div className="image">
            <img src="https://picsum.photos/1000/800" alt="" />
          </div>
          <div className="desc">
            <div className="desc__title">
              Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi
              11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi 11 Lite 5G: Toàn
              diện quá! Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá!
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
        </div>
      </a>
    </div>
  );
};

const DangChuY = ({ title = "demo" }) => {
  return (
    <div className="MainBlog__two col-12">
      <div className="item">
        <div className="item__title">{title}</div>
        <div className="item__typeOne">
          <a href="#c" className="typeOne">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
  );
};

const AdsItem = (props) => {
  return (
    <div className="AdsItem container-fluid">
      <div className="row">
        <div className="col-12 box ">
          <img
            src="https://picsum.photos/600/400
"
            alt=""
          />
        </div>
        <div className="col-12 box ">
          <img
            src="https://picsum.photos/600/400
"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
const AdsItem1 = (props) => {
  return (
    <div className="AdsItem1 container-fluid">
      <div className="row">
        <div className="col-12 box ">
          <img
            src="https://picsum.photos/600/400
"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

const ItemTwo = ({ title = "demo" }) => {
  return (
    <div className="MainBlog__three col-12">
      <div className="item">
        <div className="item__title">{title}</div>
        <div className="item__typeOne">
          <a href="#c" className="typeOne">
            <div className="box">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>
              <div className="desc">
                <div className="desc__title">
                  Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi
                  Mi 11 Lite 5G: Toàn diện quá! Đánh giá Xiaomi Mi 11 Lite 5G:
                  Toàn diện quá!
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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

      <div className="showMore">
        <button className="btn">
          <span>Xem toàn bộ</span>

          <ICON_GO_ANDROID_LINE_24 />
        </button>
      </div>
    </div>
  );
};

export default ContentItem;
