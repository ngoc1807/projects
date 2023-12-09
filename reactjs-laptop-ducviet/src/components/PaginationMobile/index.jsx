import React from "react";
import { ICON_ARROW_LEFT_16, ICON_ARROW_RIGHT_16 } from "../../asset/imageJs";
import "./pagination.scss";
function PaginationMobile(props) {
  const total = props && props.total ? props.total : false;

  return (
    <div className="PaginationMobile">
      <div className="PaginationMobile__list">
        <button className="btn btn-prev">
          <ICON_ARROW_LEFT_16 />
        </button>

        <button className="btn active">1</button>

        <button className="btn">2</button>
        <div className="btn etc">...</div>
        <button className="btn">3</button>

        <button className="btn">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
}

export default PaginationMobile;
