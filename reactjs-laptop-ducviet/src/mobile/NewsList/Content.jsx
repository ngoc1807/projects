import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
  ICON_SEARCH_HOME,
  IMAGE_SLIDE_LEFT1,
} from "../../asset/imageJs";
import PaginationCustom from "../../components/Pagination";
import { ItemBlogCustom } from "../components/ItemBlogCustom";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <MainBlog />

        <div className="AdsImage col-12 ">
          <img src="https://picsum.photos/600/400" alt="" />
        </div>

        <ItemBlogCustom title="Bài viết nổi bật" comment={false} />
      </div>
    </div>
  );
}

const MainBlog = (props) => {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }

  return (
    <div className="MainBlog col-12">
      {a.map((i, k) => (
        <a href="#" className="items" key={k}>
          <div className="box">
            <div className="box__image">
              <img
                src="https://picsum.photos/600/400
"
                alt=""
              />
            </div>
            <div className="box__desc">
              <div className="box__desc-title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
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

      <div className="MainBlog__pagination ">
        <PaginationCustom total={false} />
      </div>
    </div>
  );
};

export default ContentItem;
