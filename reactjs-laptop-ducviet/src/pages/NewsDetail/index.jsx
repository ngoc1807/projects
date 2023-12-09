import React from "react";
import HeaderCustom from "../../components/Header/index";

import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import Content from "./Content";
import { ListBlogsCustom } from "../../components/ListBlogCustom";
import CommentCustom from "../../components/CommentCustom";

function NewsDetailWeb(props) {
  return (
    <>
      <HeaderCustom />
      <section className="NewsDetailWeb">
        <Breadcrumb />
        <Content />
        <div className="CommentBlog">
          <CommentCustom widthCustom="894px" title="BÌNH LUẬN VỀ BÀI VIẾT" />
        </div>
        <ListBlogsCustom
          amount={5}
          type={1}
          showAll={false}
          title="Bài viết liên quan"
        />
      </section>

      <Footer />
    </>
  );
}

export default NewsDetailWeb;
