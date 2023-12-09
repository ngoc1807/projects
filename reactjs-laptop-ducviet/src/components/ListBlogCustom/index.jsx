import React from "react";
import {
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
} from "./../../asset/imageJs/index";

import news1 from "./../../asset/image/home/news1.png";
export const ListBlogsCustom = (props) => {
  const showAll = props && props.showAll ? props.showAll : false;
  const amount = props && props.amount ? props.amount : 1;

  const title = props && props.title ? props.title : "";
  const type = props && props.type ? props.type : "";
  // console.log(type);

  switch (type) {
    case 1:
      return (
        <div className="boxBlog">
          <BlogTitleSummary title={title} showAll={showAll} />
          <BlogContentAll amount={amount} />
        </div>
      );

    case 2:
      return (
        <div className="boxBlog">
          <BlogTitleSummaryHome title={title} showAll={showAll} />
          <BlogContentAllHome amount={amount} />
        </div>
      );
    default:
      return (
        <div className="boxBlog">
          <BlogTitleAll title={title} />
          <BlogContentAll amount={amount} />
        </div>
      );
  }
};

export const BlogContentAll = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return (
    <div className="boxSummaryBlog__content">
      {a.map((i, k) => (
        <a href="s" className="boxSummaryBlog__content-item" key={k}>
          <div className="box">
            <div className="box__image">
              <img src={news1} alt="" />
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
export const BlogTitleSummary = (props) => {
  const title = props && props.title ? props.title : "";
  const showAll = props && props.showAll ? props.showAll : false;

  return (
    <div className="boxBlogSummary__title">
      <div className="boxBlogSummary__title-left">{title}</div>
      <div className="boxBlogSummary__title-right">
        {showAll ? (
          <a href="#" className="boxBlogSummary__title-link active">
            Tất Cả
          </a>
        ) : (
          ""
        )}
        {/* 
        <a href="#" className="boxBlogSummary__title-link ">
          Tin khuyến mãi
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          TIN MỚI NHẤT
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          TƯ VẤN CHỌN MUA
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          HƯỚNG DẪN KỸ THUẬT
        </a> */}
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

export const BlogTitleAll = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxBlogAll__title">
      <div className="boxBlogAll__title-left">{title}</div>
      <div className="boxBlogAll__title-right">
        <a href="#" className="boxBlogAll__title-link">
          Tất Cả
        </a>

        <a href="#">Tin khuyến mãi</a>

        <a href="#">TIN MỚI NHẤT</a>

        <a href="#">TƯ VẤN CHỌN MUA</a>

        <a href="#">HƯỚNG DẪN KỸ THUẬT</a>

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

export const BlogContentAllHome = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return (
    <div className="boxSummaryBlog__content">
      {a.map((i, k) => (
        <a href="s" className="boxSummaryBlog__content-item" key={k}>
          <div className="box">
            <div className="box__image">
              <img src={news1} alt="" />
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
export const BlogTitleSummaryHome = (props) => {
  const title = props && props.title ? props.title : "";
  const showAll = props && props.showAll ? props.showAll : false;

  return (
    <div className="boxBlogSummary__title">
      <div className="boxBlogSummary__title-left">{title}</div>
      <div className="boxBlogSummary__title-right">
        {showAll ? (
          <a href="#" className="boxBlogSummary__title-link active">
            Tất Cả
          </a>
        ) : (
          ""
        )}
        {/* 
        <a href="#" className="boxBlogSummary__title-link ">
          Tin khuyến mãi
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          TIN MỚI NHẤT
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          TƯ VẤN CHỌN MUA
        </a>

        <a href="#" className="boxBlogSummary__title-link ">
          HƯỚNG DẪN KỸ THUẬT
        </a> */}
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
