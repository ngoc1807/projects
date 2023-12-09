import React from "react";

function ContentItem(props) {
  return (
    <div className="ContentItem container-fluid">
      <div className="row">
        <MainBlog />
      </div>
    </div>
  );
}

const MainBlog = (props) => {
  return (
    <>
      <div className="MainBlog col-12">
        <div className="MainBlog__title">
          CÔNG TY TNHH THƯƠNG MẠI VÀ THÔNG TIN ĐỨC VIỆT
        </div>
        <div className="MainBlog__list">
          <div className="item">Tel: 024.62754433</div>
          <div className="item">Hotline: 0985736068</div>
          <div className="item">Email: contact@ducvietco.com</div>
          <div className="item">Thời gian làm việc: 8:30 - 20:00</div>
          <div className="item">MST: 0103956333</div>
          <div className="item">Ngày cấp: 10/06/2009</div>
          <div className="item">
            Nơi cấp: Phòng đăng ký kinh doanh - Sở kế hoạch và đầu tư Thành phố
            Hà Nội
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
