import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_RIGHT_24,
  ICON_GOOGLE_16,
  ICON_YOUTUBE_16,
  ICON_NEWSPAPER_16,
  ICON_FACEBOOK_16,
} from "../../asset/imageJs";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <BoxOne />
      </div>
    </div>
  );
}

const BoxOne = (props) => {
  return (
    <div className="BoxOne col-12">
      <div className="BoxOne__list">
        <a className="item">
          <div className="icon-first">
            <ICON_NEWSPAPER_16 />
          </div>
          <div className="text">Cộng đồng</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
        <a className="item">
          <div className="icon-first ">
            <ICON_FACEBOOK_16 />
          </div>
          <div className="text">Facebook</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="icon-first ">
            <ICON_YOUTUBE_16 />
          </div>
          <div className="text">Youtube</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>

        <a className="item">
          <div className="icon-first ">
            <ICON_GOOGLE_16 />
          </div>
          <div className="text">Gmail</div>
          <div className="icon-two">
            <ICON_RIGHT_24 />
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContentItem;
