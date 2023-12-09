import React from "react";
import {
  ICON_LOCATION_16,
  ICON_MAIL_16,
  ICON_PHONE_16,
  ICON_video_32,
} from "../../asset/imageJs";
import "./ImageDetailItem.scss";
const ImageDetailItem = () => {
  return (
    <div className="ImageDetailItem container-fluid ">
      <div className="row">
        <div className="box w-100 col-12">
          <div
            className="box__image"
            data-toggle="modal"
            data-target="#ListAnhProduct"
          >
            <img src="https://picsum.photos/600/400" alt="" />
            <div className="total">1/12</div>
          </div>

          <div className="box__list">
            <div className="box__list-item">
              <ICON_video_32 />
            </div>
            <div className="box__list-item active">
              <ICON_video_32 />
            </div>
            <div className="box__list-item ">
              <ICON_video_32 />
            </div>
            <div className="box__list-item ">
              <ICON_video_32 />
            </div>
            <div className="box__list-item ">
              <ICON_video_32 />
            </div>
            <div className="box__list-item ">
              <ICON_video_32 />
            </div>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

const Modal = () => {
  return (
    <div
      className="modal fade"
      id="ListAnhProduct"
      tabIndex="-1"
      aria-labelledby="ListAnhProduct"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">Thông tin sản phẩm</div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="boxModal ">
              <div className="boxModal__list">
                <div className="boxModal__list-item">
                  <ICON_video_32 />
                </div>
                <div className="boxModal__list-item active">
                  <ICON_video_32 />
                </div>
                <div className="boxModal__list-item ">
                  <ICON_video_32 />
                </div>
                <div className="boxModal__list-item ">
                  <ICON_video_32 />
                </div>
                <div className="boxModal__list-item ">
                  <ICON_video_32 />
                </div>
                <div className="boxModal__list-item ">
                  <ICON_video_32 />
                </div>
              </div>
              <div className="boxModal__image">
                <img src="https://picsum.photos/600/400" alt="" />
                <div className="total">1/12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDetailItem;
