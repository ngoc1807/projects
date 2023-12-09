import React from "react";
import { ICON_CLOSE_24 } from "../../asset/imageJs";

function ModalLogin(props) {
  return (
    <div
      className="modal fade"
      id="ModalLogin"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="ModalLoginTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title" id="exampleModalLongTitle">
              Đăng nhập
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <ICON_CLOSE_24 />
            </button>
          </div>
          <div className="modal-body">...</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalLogin;
