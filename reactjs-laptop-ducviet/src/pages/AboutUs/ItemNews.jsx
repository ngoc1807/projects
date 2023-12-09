import React from "react";
import { ListBlogsCustom } from "../../components/ListBlogCustom";
function ItemNews(props) {
  return (
    <div className="ItemNews">
      <ListBlogsCustom amount={5} type={1} title="Tin Tức" />
    </div>
  );
}

export default ItemNews;
