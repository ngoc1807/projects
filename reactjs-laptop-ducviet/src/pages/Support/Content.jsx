import React from "react";

import {
  ICON_CARD_24,
  ICON_CART_24,
  ICON_SHIELD_LOCK_24,
  ICON_TRUCK_24,
  ICON_LAPTOP_24,
  ICON_CLIPBOARD_24,
} from "../../asset/imageJs";

function ContentItem(props) {
  return (
    <div className="ContentItem">
      <div className="box">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <div className="category">
              <span>DANH MỤC HỖ TRỢ</span>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">
              <ICON_CARD_24 />
              <span>Hướng dẫn thanh toán</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">
              <ICON_CART_24 />
              <span>Hướng dẫn đặt hàng</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">
              <ICON_TRUCK_24 />
              <span>Phương thức vận chuyển</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3">
              <ICON_SHIELD_LOCK_24 />
              <span>Chính sách đổi trả và bảo hành</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3">
              <ICON_LAPTOP_24 />
              <span>Hướng dẫn mua Laptop</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3">
              <ICON_CLIPBOARD_24 />
              <span>Bảng giá nâng cấp phụ kiện</span>
            </a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane active container" id="home">
            <div className="box">
              <div className="box__title">Giới thiệu công ty</div>
              <div className="box__content">
                Được thành lập từ năm 2007, Công ty TNHH Thương mại và Thông tin
                ĐỨC VIỆT đã vượt qua được những khó khăn ban đầu, từng bước tạo
                được uy tín đối với khách hàng, khẳng định được khả năng cung
                cấp với nhiều loại hình kinh doanh. ĐỨC VIỆT là nhà phân phối
                sản phẩm của các hãng nổi tiếng: HP, IBM - LENOVO, DELL,
                MACBOOK, ASUS, SONY, TOSHIBA … trên toàn quốc. Chúng tôi cam kết
                tập trung mọi cố gắng để cung cấp các giải pháp về sản phẩm,
                thiết bị công nghệ và dịch vụ chăm sóc khách hàng với chất lượng
                nhất, phục vụ hiệu quả nhất và đem lại nhiều thành công nhất cho
                khách hàng. Chúng tôi sẽ luôn đi tiên phong trong công cuộc cách
                mạng hóa cuộc sống của mỗi con người, mỗi doanh nghiệp qua việc
                cung cấp các dịch vụ công nghệ và thông tin chất lượng cao bất
                cứ khi nào, ở bất kỳ đâu. Đức Việt là một đơn vị chuyên cung cấp
                máy tính cũ giá rẻ chất lượng tốt tại Hà Nội nói riêng và trên
                toàn quốc nói chung. Với mẫu mã đa dạng, có cấu hình phù hợp với
                nhu cầu sử dụng khác nhau. Bên cạnh đó với sự đa dạng này mà Đức
                Việt còn nhằm phục vụ tốt nhất nhiều đối tượng khách hàng như:
                nhân viên văn phòng, công ty, game thủ, kinh doanh tiệm net, đồ
                <div className="img"></div>
              </div>
            </div>
          </div>
          <div class="tab-pane " id="menu1">
            <div className="box">
              <div className="box__title">Hoạt động công ty</div>
            </div>
          </div>
          <div class="tab-pane " id="menu2">
            <div className="box">
              <div className="box__title">Tuyển dụng</div>
            </div>
          </div>
          <div class="tab-pane " id="menu3">
            <div className="box">
              <div className="box__title">Liên hệ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentItem;
