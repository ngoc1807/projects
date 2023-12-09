import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_GO_ANDROID_LINE_24,
  ICON_MESSAGE_16,
  ICON_SEARCH_HOME,
  IMAGE_SLIDE_LEFT1,
} from "../../asset/imageJs";
import PaginationCustom from "../../components/Pagination";

function ContentItem(props) {
  return (
    <div className="ContentItem">
      <MainBlog />
      <RightBlog />
    </div>
  );
}

const MainBlog = (props) => {
  // const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < 6; i++) {
    a.push({ id: i });
  }

  return (
    <div className="MainBlog">
      <div className="MainBlog__title">
        <div className="MainBlog__title-first">
          <a href="#" className="MainBlog__title-link ">
            Tất Cả
          </a>

          <a href="#" className="MainBlog__title-link active">
            Tin khuyến mãi
          </a>

          <a href="#" className="MainBlog__title-link ">
            TIN MỚI NHẤT
          </a>

          <a href="#" className="MainBlog__title-link ">
            TƯ VẤN CHỌN MUA
          </a>

          <a href="#" className="MainBlog__title-link ">
            HƯỚNG DẪN KỸ THUẬT
          </a>
        </div>
        <div className="MainBlog__title-second">Tin Tức</div>
      </div>
      <div className="MainBlog__content">
        <div className="MainBlog__content-box">
          <div className="box__content">
            {a.map((i, k) => (
              <a href="s" className="item" key={k}>
                <div className="box">
                  <div className="box__image">
                    <img src={news1} alt="" />
                  </div>
                  <div className="box__desc">
                    <div className="box__desc-title">
                      Apple Fitness + bổ sung bài tập cho người đang mang thai
                      và người lớn. Mọi người nên sử dụng
                    </div>
                    <div className="box__desc-summary">
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ Được dẫn dắt bởi huấn luyện viên (người
                      sắp làm mẹ) Betina Gozo và 2 người mẹĐược dẫn dắt bởi huấn
                      luyện viên (người sắp làm mẹ) Betina Gozo và 2 người mẹ
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ
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
            ))}
          </div>
        </div>
      </div>

      <div className="MainBlog__underline"></div>

      <div className="MainBlog__pagination ">
        <PaginationCustom total={false} />
      </div>
    </div>
  );
};

const RightBlog = (props) => {
  return (
    <div className="rightBlog">
      <form className="rightBlog__search">
        <input type="text" className="form-control" placeholder="Tìm kiếm " />
        <button className="btn">
          <ICON_SEARCH_HOME />
        </button>
      </form>

      <div className="rightBlog__list">
        <div className="title">Bài viết nổi bật</div>

        <ul className="list">
          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">
              textsssssssssssssssssssssssssssssssssssssssssssss
            </div>
          </li>

          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>
          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>

          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>

          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>
          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>
          <li className="list__item">
            <div className="list__item-image">
              <img src={IMAGE_SLIDE_LEFT1} alt="" />
            </div>
            <div className="list__item-text">textsssssssssssssssssssssssss</div>
          </li>
        </ul>
      </div>

      <div className="rightBlog__image">
        <img src={IMAGE_SLIDE_LEFT1} alt="" />
        <img src={IMAGE_SLIDE_LEFT1} alt="" />
      </div>
    </div>
  );
};

export default ContentItem;
