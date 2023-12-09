import React from "react";

import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
} from "../../asset/imageJs";
import CommentCustom from "../components/Comment";
import { ItemBlogCustom } from "../components/ItemBlogCustom";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <MainBlog />
      </div>
    </div>
  );
}

const MainBlog = (props) => {
  return (
    <>
      <div className="MainBlog col-12">
        <div className="MainBlog__title">NGÂN HÀNG VIETCOMBANK</div>
        <div className="MainBlog__list">
          <ul className="items">
            <li className="item">
              Chủ tài khoản: Công ty TNHH Thương Mại và Thông Tin Đức Việt
            </li>
            <li className="item">Số tài khoản: 0491001906241</li>

            <li className="item">Chi nhánh: VCB Thăng Long</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
