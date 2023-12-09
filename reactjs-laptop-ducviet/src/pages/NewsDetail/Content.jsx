import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
  ICON_SEARCH_HOME,
  IMAGE_SLIDE_LEFT1,
} from "../../asset/imageJs";
import CommentCustom from "../../components/CommentCustom";

function ContentItem(props) {
  return (
    <div className="ContentItem">
      <MainBlog />
      <RightBlog />
    </div>
  );
}

const MainBlog = (props) => {
  return (
    <>
      <div className="MainBlog">
        <div className="MainBlog__image">
          <img
            src="https://i.pinimg.com/originals/61/e7/8b/61e78b08a8dd18779132812218a9f2a8.jpg"
            alt=""
          />
        </div>
        <div className="MainBlog__header">
          <div className="MainBlog__header-title">
            Apple Fitness + bổ sung bài tập cho người đang mang thai và người
            lớn. Mọi người nên sử dụng
          </div>
          <div className="MainBlog__header-option">
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
        <div className="MainBlog__content">
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like). Where
          does it come from? Contrary to popular belief, Lorem Ipsum is not
          simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </div>
      </div>
    </>
  );
};

const RightBlog = (props) => {
  return (
    <div className="rightBlog">
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
