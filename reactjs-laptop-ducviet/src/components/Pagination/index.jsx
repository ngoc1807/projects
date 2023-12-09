import React from "react";
import { ICON_ARROW_LEFT_16, ICON_ARROW_RIGHT_16 } from "../../asset/imageJs";

function PaginationCustom(props) {
  const total = props && props.total ? props.total : false;

  return (
    <div className="PaginationCustom">
      {total ? (
        <div className="PaginationCustom__total">25 / 250 sản phẩm</div>
      ) : (
        ""
      )}

      <div className="PaginationCustom__list">
        <button className="btn btn-prev" disabled>
          <ICON_ARROW_LEFT_16 />
        </button>

        <button className="btn active">1</button>

        <button className="btn">2</button>

        <button className="btn">3</button>

        <button className="btn">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
}

export default PaginationCustom;
