import React from "react";
import {
  ICON_CHECKED_16,
  IMAGE_STATUS_HOT,
  ICON_ARROW_DOWN_DOUBLE_24,
  ICON_COMBINED_SHAPE_24,
  ICON_FUNNEL_24,
  ICON_CLOSE_24,
  ICON_XMAR_CIRCLE_24,
} from "../../asset/imageJs";
import "./ListItem.scss";
function ListItem(props) {
  return (
    <div className="ListItem container-fluid">
      <div className="row">
        <BoxOne title="Sản phẩm bán chạy" />
        <BoxTwo />
      </div>
    </div>
  );
}

const BoxOne = ({ title } = {}) => {
  let a = [];
  for (let i = 0; i < 10; i++) {
    a.push({ id: i });
  }

  return (
    <div className=" w-100 col-12 boxOne">
      <div className="boxOne__filter">
        <SortItem />
        <FilterItem />
      </div>

      <div className="boxOne__list w-100">
        {a.map((i, k) => (
          <a href="#" className="boxOne__list-item" key={k}>
            <div className="image">
              <img src="https://picsum.photos/400/400" alt="" />
              <div className="image__status">
                <img src={IMAGE_STATUS_HOT} alt="" />
              </div>
            </div>

            <div className="desc">
              <div className="desc__code">
                <span>Mã: 182783</span>
              </div>
              <div className="desc__title">
                <span>Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
              </div>
              <div className="desc__priceNew">
                <span>22.000.000đ</span>
              </div>
              <div className="desc__priceOld">
                <span>30.000.000đ</span>
              </div>
              <div className="desc__status">
                <ICON_CHECKED_16 />
                <span> Còn hàng</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
const BoxTwo = (props) => {
  return (
    <div className="col-12  boxTwo w-100">
      <button className="btn w-100 d-flex justify-content-center">
        <ICON_ARROW_DOWN_DOUBLE_24 />

        <span>Xem thêm</span>
      </button>
    </div>
  );
};

const FilterItem = (props) => {
  return (
    <div className="boxOne__filter-item FilterItem">
      <label className="btn btn__toggle" htmlFor="filterListProductMobile">
        <ICON_FUNNEL_24 />
        <div className="text">Bộ lọc</div>
        <div className="count">3</div>
      </label>

      <input type="checkbox" id="filterListProductMobile" />
      <div className="items">
        <ul className="list">
          <li className="list__item first">
            Bộ lọc
            <div className="left__close">
              <label htmlFor="filterListProductMobile">
                <ICON_CLOSE_24 />
              </label>
            </div>
          </li>

          <div className="list__content">
            <div className="list__content-item">
              <div className="name">
                <span>Lọc theo nhu cầu</span>
              </div>

              <div className="list-image">
                <div className="item ">
                  <img src="https://picsum.photos/600/400" alt="" />

                  <div className="text">
                    <span className="">Gaming đồ họa</span>
                  </div>
                </div>
                <div className="item ">
                  <img src="https://picsum.photos/600/400" alt="" />

                  <div className="text">
                    <span className="">Gaming đồ họa</span>
                  </div>
                </div>
                <div className="item active ">
                  <img src="https://picsum.photos/600/400" alt="" />

                  <div className="text">
                    <span className="">Gaming đồ họa</span>
                  </div>
                </div>
                <div className="item ">
                  <img src="https://picsum.photos/600/400" alt="" />

                  <div className="text">
                    <span className="">Gaming đồ họa</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="list__content-item">
              <div className="name">
                <span>Thương hiệu</span>
              </div>

              <div className="list">
                <ul className="list2">
                  <li className="list2-item">
                    <button className="btn ">
                      <span>Sam</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item active">
                    <button className="btn ">
                      <span>Sam</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item">
                    <button className="btn ">
                      <span>Sam</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/*  */}
            <div className="list__content-item">
              <div className="name">
                <span>Màu sắc</span>
              </div>
              <div className="list">
                <ul className="list2">
                  <li className="list2-item">
                    <button className="btn ">
                      <span>Đỏ</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item">
                    <button className="btn active ">
                      <span>Đỏ</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item">
                    <button className="btn ">
                      <span>Đỏ</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="list__content-item">
              <div className="name">
                <span>Khoảng giá</span>
              </div>

              <div className="list">
                <ul className="list2">
                  <li className="list2-item">
                    <button className="btn ">
                      <span>Dưới 8 triệu</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item">
                    <button className="btn  ">
                      <span>8 - 12 triệu</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                  <li className="list2-item">
                    <button className="btn active ">
                      <span>20 - 14 triệu</span>
                      <ICON_XMAR_CIRCLE_24 />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="list__footer">
            <button className="apply btn">
              <span> Áp dụng </span>
            </button>
            <button className="delete  btn">
              <span>Xóa bộ lọc</span>
            </button>
          </div>
        </ul>

        <label
          className="items__mark"
          htmlFor="filterListProductMobile"
        ></label>
      </div>
    </div>
  );
};

const SortItem = (props) => {
  return (
    <div className="boxOne__filter-item SortItem">
      <label className="btn btn__toggle" htmlFor="sortListProductMobile">
        <ICON_COMBINED_SHAPE_24 />
        <div className="text">Sắp xếp</div>
      </label>

      <input type="checkbox" id="sortListProductMobile" />
      <div className="items">
        <ul className="list">
          <li className="first">
            Sắp xếp theo
            <div className="left__close">
              <label htmlFor="sortListProductMobile">
                <ICON_CLOSE_24 />
              </label>
            </div>
          </li>

          <li className="list__item ">
            <button className="list__item-btn active btn">
              <span>Mới nhất</span>
            </button>
          </li>
          <li className="list__item">
            <button className="list__item-btn btn">
              <span>Giá tăng dần</span>
            </button>
          </li>

          <li className="list__item">
            <button className="list__item-btn btn">
              <span>Giá giảm dần</span>
            </button>
          </li>

          <li className="list__item">
            <button className="list__item-btn btn">
              <span>Lượt mua</span>
            </button>
          </li>

          <li className="list__item">
            <button className="list__item-btn btn">
              <span>Tên A - Z</span>
            </button>
          </li>
          <li className="list__item-price">
            <input
              type="text"
              className="form-control"
              placeholder="Giá tối thiểu"
            />
            <div>-</div>
            <input
              type="text"
              className="form-control"
              placeholder="Giá tối đa"
            />
          </li>

          <li className="list__item-footer">
            <button className="apply btn">
              <span> Áp dụng </span>
            </button>
            <button className="delete  btn">
              <span>Xóa bộ lọc</span>
            </button>
          </li>
        </ul>
        <label className="items__mark" htmlFor="sortListProductMobile"></label>
      </div>
    </div>
  );
};

export default ListItem;
