import React from "react";

import ListProductsChangeBG from "../../components/ListProductsChangeBG";
const BestsellerHome = (props) => {
  return (
    <div className="BestsellerHome">
      <ListProductsChangeBG amount={5} title="Sản phẩm bán chạy" />
    </div>
  );
};

export default BestsellerHome;
