import React from "react";
import "./ListBlogViewed.scss";

import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
} from "./../../asset/imageJs/index";
const ListBlogViewed = (props) => {
  const amount = props && props.amount ? props.amount : 5;

  const title = props && props.title ? props.title : "hello";
  const type = props && props.type ? props.type : "";
  return (
    <div className="ListBlogViewed">
      <BlogTitleSummaryHome title={title} />
      <BlogContentAllHome amount={amount} />
    </div>
  );
};

const BlogContentAllHome = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return (
    <div className="ListBlogViewed__content">
      {a.map((i, k) => (
        <a href="s" className="ListBlogViewed__content-item" key={k}>
          <div className="box">
            <div className="box__image">
              <img src="https://picsum.photos/200/300" alt="" />
            </div>
            <div className="box__title">
              Apple Fitness + bổ sung bài tập cho người đang mang thai và người
              lớn tuổi
            </div>
            <div className="box__summary">
              Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina Gozo và
              2 người mẹ trẻ Emily Fayettesssssssssssssssssssssss
            </div>
            <div className="box__option">
              <div className="box__option-time">
                <ICON_CLOCK_16 />
                <span> 12:00, 20/08/2021</span>
              </div>
              <div className="box__option-time">
                <ICON_EYE_16 />
                <span> 220 lượt xem</span>
              </div>
              <div className="box__option-time">
                <ICON_MESSAGE_16 />
                <span>220 bình luận</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
const BlogTitleSummaryHome = (props) => {
  const title = props && props.title ? props.title : "";

  return (
    <div className="ListBlogViewed__title">
      <div className="ListBlogViewed__title-left">{title}</div>
      <div className="ListBlogViewed__title-right">
        <a href="#" className="ListBlogViewed__title-link active">
          Xem thêm
        </a>

        <button className="btn btn__left">
          <ICON_ARROW_LEFT_16 />
        </button>
        <button className="btn btn__right">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
};

export default ListBlogViewed;
