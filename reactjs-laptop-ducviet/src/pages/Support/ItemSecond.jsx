import React from "react";
import { IMAGE_SLIDE_LEFT1 } from "../../asset/imageJs";

function ItemSecondHome(props) {
  return (
    <div className="ItemSecond">
      <div className="box">
        <a className="box__item">
          <img src={IMAGE_SLIDE_LEFT1} alt="" />
        </a>

        <a className="box__item">
          <img
            src="https://docsach247.com/wp-content/uploads/2020/08/One-Piece-t%E1%BA%ADp-cu%E1%BB%91i-Luffy-tr%E1%BB%9F-th%C3%A0nh-vua-h%E1%BA%A3i-t%E1%BA%B7c-600x360.jpg"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

export default ItemSecondHome;
