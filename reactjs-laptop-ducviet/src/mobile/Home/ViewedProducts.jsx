import React from "react";

function ViewedProducts(props) {
  return (
    <div className="ViewedProductsItem container-fluid">
      <div className="row">
        <Viewed title="Sản phẩm đã xem " />
      </div>
    </div>
  );
}

const Viewed = ({ title } = {}) => {
  let a = [];
  for (let i = 0; i < 3; i++) {
    a.push({ id: i });
  }
  return (
    <div className="Viewed col-12 w-100">
      <div className="Viewed__title">
        <span>{title}</span>
      </div>
      <div className="Viewed__list">
        {a.map((i, k) => (
          <div href="#" className="Viewed__list-item" key={k}>
            <div className="image">
              <img src="https://picsum.photos/600/400" alt="" />
            </div>
            <div className="desc">
              <a href="/">
                <div className="desc__title">
                  <span>Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
                </div>
              </a>
              <div className="price">
                <div className="price_left">
                  <div className="price_new">
                    <span>22.000.000đ</span>
                  </div>
                  <div className="price_old">
                    <span>30.000.000đ</span>
                  </div>
                </div>
                <div className="price_right">
                  <span>-20%</span>
                </div>
              </div>
              <div className="compare">
                <button className="btn">So sánh</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewedProducts;
