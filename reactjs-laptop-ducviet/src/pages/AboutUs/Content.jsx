import React from "react";
import PropTypes from "prop-types";
import {
  ICON_BOOK_OPENED_24,
  ICON_CASE_24,
  ICON_PHONE_24,
  ICON_PLUS_CIRCLE_24,
} from "../../asset/imageJs";

ContentItem.propTypes = {};

function ContentItem(props) {
  return (
    <div className="ContentItem">
      <div className="box">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">
              <ICON_BOOK_OPENED_24 />
              <span>Giới thiệu công ty</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">
              <ICON_CASE_24 />
              <span>Hoạt động công ty</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2">
              <ICON_PLUS_CIRCLE_24 />
              <span>Tuyển dụng</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3">
              <ICON_PHONE_24 />
              <span>Liên hệ</span>
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
                họa, sinh viên… Và giá cả của mỗi sản phẩm máy tính cũ này có
                giá cạnh tranh nhất thị trường kèm theo chế độ bảo hành tốt nhất
                dành cho mọi khách hàng đến mua laptop tại Đức Việt. Lĩnh vực
                kinh doanh - Cung cấp máy tính xách tay chất lượng cao các hãng
                nổi tiếng. - Cung cấp thiết bị phần cứng, linh phụ kiện máy
                tính. - Dịch vụ nâng cấp, thay thế, sửa chữa máy tính. Phương
                châm kinh doanh của LAPTOP ĐỨC VIỆT Là một trong những công ty
                tiên phong trong lĩnh vực cung cấp sản phẩm máy tính xách tay
                nhập khẩu cũ mới, chúng tôi ý thức rằng: “Khách hàng là nền tảng
                của thành công – Lợi ích đích thực phải được kết hợp hài hòa từ
                lợi ích của khách hàng, của công ty, của mỗi nhân viên và của
                cộng đồng”. Chính vì vậy tập thể ban lãnh đạo và nhân viên của
                ĐỨC VIỆT quyết tâm sẽ hoạt động với phương châm: lợi ích của
                khách hàng là trên hết, lợi ích của người lao động được quan
                tâm, đóng góp có hiệu quả vào sự phát triển của cộng đồng: h đối
                với ngân sách Nhà nước, luôn quan tâm chăm lo đến công tác xã
                hội, từ thiện để chia sẻ khó khăn của cộng đồng. Chính sách kinh
                doanh của LAPTOP ĐỨC VIỆT:
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
