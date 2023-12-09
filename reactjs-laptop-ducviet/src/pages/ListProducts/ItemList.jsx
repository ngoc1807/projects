import React from "react";

import { ICON_XMAR_CIRCLE_24 } from "../../asset/imageJs";
import { ProductContent } from "../../components/ListProductsCustom";
import PaginationCustom from "../../components/Pagination";

function ItemList(props) {
  return (
    <div className="ItemList">
      <div className="title">
        <div className="title__left">
          <span>Sắp xếp theo</span>
        </div>
        <div className="title__right">
          <ul>
            <li>
              Mới nhất
              <span>
                <ICON_XMAR_CIRCLE_24 />
              </span>
            </li>
            <li>
              Giá tăng dần
              <span>
                <ICON_XMAR_CIRCLE_24 />
              </span>
            </li>
            <li className="active">
              Giá giảm dần
              <span>
                <ICON_XMAR_CIRCLE_24 />
              </span>
            </li>

            <li>
              Bán chạy
              <span>
                <ICON_XMAR_CIRCLE_24 />
              </span>
            </li>
            <li>
              Tên A-Z
              <span>
                <ICON_XMAR_CIRCLE_24 />
              </span>
            </li>
          </ul>
          <form className="form-search">
            <input
              type="number"
              className="form-control"
              placeholder="Giá tối thiểu"
            />

            <div>-</div>

            <input
              type="number"
              className="form-control"
              placeholder="Giá tối đa"
            />

            <button className="btn d-none ">Tìm</button>
          </form>
        </div>
      </div>

      <div className="underlined"></div>

      <div className="content">
        <ProductContent amount={20} />
      </div>
      <div className="underlined"></div>
      <PaginationCustom />
    </div>
  );
}

export default ItemList;
