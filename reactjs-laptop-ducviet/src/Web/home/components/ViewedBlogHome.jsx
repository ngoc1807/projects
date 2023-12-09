import React from "react";

import ListBlogViewed from "../../components/ListBlogViewed";

const ViewedProductsHome = (props) => {
  return (
    <div className="ViewedBlogHome">
      <ListBlogViewed amount={5} showAll={true} title="Tin tức" />
    </div>
  );
};

export default ViewedProductsHome;
