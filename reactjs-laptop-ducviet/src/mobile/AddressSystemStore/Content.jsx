import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_LOCATION_16,
  ICON_PHONE_16,
  ICON_MAIL_16,
  ICON_DISCOVER_16,
} from "../../asset/imageJs";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <BoxOne />
        <BoxTwo />
      </div>
    </div>
  );
}

const BoxOne = (props) => {
  return (
    <div className="BoxOne col-12">
      <div className="BoxOne__title">
        <span>Cơ sở 1: Xã Đàn, Đống Đa, HN</span>
      </div>

      <div className="BoxOne__list">
        <a className="item">
          <div className="icon-first">
            <ICON_LOCATION_16 />
          </div>
          <div className="text">Số 233 Xã Đàn – Đống Đa – Hà Nội </div>
        </a>
        <a className="item">
          <div className="icon-first ">
            <ICON_PHONE_16 />
          </div>
          <div className="text">024.6275.4433</div>
        </a>

        <a className="item">
          <div className="icon-first ">
            <ICON_MAIL_16 />
          </div>
          <div className="text">contact@ducvietco.com</div>
        </a>

        <a className="item2">
          <div className="icon-first ">
            <ICON_DISCOVER_16 />
          </div>
          <div className="text">Xem đường đi</div>
        </a>
      </div>
    </div>
  );
};

const BoxTwo = (props) => {
  return (
    <div className="BoxTwo col-12">
      <div className="BoxTwo__title">
        <span>Cơ sở 2: Lê Thanh Nghị, HBT, HN</span>
      </div>

      <div className="BoxTwo__list">
        <a className="item">
          <div className="icon-first">
            <ICON_LOCATION_16 />
          </div>
          <div className="text">
            Số 93 Lê Thanh Nghị - Hai Bà Trưng – Hà Nội{" "}
          </div>
        </a>
        <a className="item">
          <div className="icon-first ">
            <ICON_PHONE_16 />
          </div>
          <div className="text">024.3628.5957</div>
        </a>

        <a className="item">
          <div className="icon-first ">
            <ICON_MAIL_16 />
          </div>
          <div className="text">contact@ducvietco.com</div>
        </a>

        <a className="item2">
          <div className="icon-first ">
            <ICON_DISCOVER_16 />
          </div>
          <div className="text">Xem đường đi</div>
        </a>
      </div>
    </div>
  );
};
export default ContentItem;
