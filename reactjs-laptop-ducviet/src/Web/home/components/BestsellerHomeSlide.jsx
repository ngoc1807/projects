import React from "react";

import ListProductsChangeBGSlide from "../../components/ListProductsChangeBGSlide";
const BestsellerHomeSlide = (props) => {
  return (
    <div className="BestsellerHomeSlide">
      <ListProductsChangeBGSlide amount={5} title="Sản phẩm bán chạy" />
    </div>
  );
};

export default BestsellerHomeSlide;
