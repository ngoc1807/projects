import React from "react";
import {
  ICON_XMAR_CIRCLE_24,
  ICON_FUNNEL_24,
  ICON_ARROW_DOWN_16,
  ICON_APPLE_24,
  ICON_LENOVO_24,
  ICON_HP_24,
  ICON_DELL_24,
  ICON_INTEL_24,
  ICON_ASUS_24,
  ICON_IBM_24,
} from "../../asset/imageJs";
import "./ItemFilter.scss";
function ItemFilter(props) {
  return (
    <div className="ItemFilter">
      <div className="box">
        <BoxOne />
        <BoxTwo />
        <BoxThree />
      </div>
    </div>
  );
}

const BoxOne = () => {
  return (
    <div className="BoxOne">
      <div className="BoxOne__label">
        <div class="BoxOne__label-item">
          <button
            type="button"
            class="btn BoxOne__label-item-btn"
            id="btnMenuFilterWeb"
          >
            <ICON_FUNNEL_24 />
            <span className="text"> BỘ LỌC </span>
          </button>
          <div class="menu" id="MenuFilterWeb">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="label">Thương hiệu</div>
                <div className="list">
                  <div className="list-item apple">
                    <ICON_APPLE_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item ibm">
                    <ICON_IBM_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item asus active">
                    <ICON_ASUS_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item intel">
                    <ICON_INTEL_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item dell">
                    <ICON_DELL_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item hp">
                    <ICON_HP_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item lenovo">
                    <ICON_LENOVO_24 />
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
              <div className="menu-content-item">
                <div className="label">Khoảng giá</div>
                <div className="list">
                  <div className="list-item ">
                    Dưới 8 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
              <div className="menu-content-item">
                <div className="label">Màu sắc</div>
                <div className="list">
                  <div className="list-item ">
                    Xanh
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    Đỏ
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    Tím
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item active ">
                    Vàng
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button id="RemoveFilter" className="btn remove ">
                Bỏ bộ lọc
              </button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="BoxOne__content">
        <div class="BoxOne__content-item">
          <button type="button" class="btn  BoxOne__content-item-btn active ">
            <span className="text"> Hãng mavel </span>
            <ICON_ARROW_DOWN_16 />
          </button>
          <div class="menu">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="list">
                  <div className="list-item ">
                    Dưới 8 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button className="btn remove ">Bỏ bộ lọc</button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>

        <div class="BoxOne__content-item">
          <button type="button" class="btn BoxOne__content-item-btn">
            <span className="text"> Giá cuc ki sieu re </span>
            <ICON_ARROW_DOWN_16 />
          </button>
          <div class="menu">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="list">
                  <div className="list-item ">
                    Xanh
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    Đỏ
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    Tím
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button className="btn remove ">Bỏ bộ lọc</button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>

        <div class="BoxOne__content-item">
          <button type="button" class="btn  BoxOne__content-item-btn active ">
            <span className="text"> Hãng con </span>
            <ICON_ARROW_DOWN_16 />
          </button>
          <div class="menu">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="list">
                  <div className="list-item ">
                    Dưới 8 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item active ">
                    8 -12 triệu
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button className="btn remove ">Bỏ bộ lọc</button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>

        <div class="BoxOne__content-item">
          <button type="button" class="btn BoxOne__content-item-btn">
            <span className="text"> Giá cuc ki sieu re </span>
            <ICON_ARROW_DOWN_16 />
          </button>
          <div class="menu">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="list">
                  <div className="list-item ">
                    Xanh
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    Đỏ
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    Tím
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button className="btn remove ">Bỏ bộ lọc</button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>
        <div class="BoxOne__content-item">
          <button type="button" class="btn BoxOne__content-item-btn">
            <span className="text"> Giá cuc ki sieu re </span>
            <ICON_ARROW_DOWN_16 />
          </button>
          <div class="menu">
            <div className="menu-content">
              <div className="menu-content-item">
                <div className="list">
                  <div className="list-item ">
                    Xanh
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                  <div className="list-item">
                    Đỏ
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>

                  <div className="list-item">
                    Tím
                    <span className="icon-active">
                      <ICON_XMAR_CIRCLE_24 />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dropdown-divider"></div>
            <div class="menu-bottom">
              <button className="btn remove ">Bỏ bộ lọc</button>
              <button className="btn result" id="btnMenuFilterWeb">
                Xem kết quả
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const BoxTwo = () => {
  return (
    <div className="BoxTwo">
      <div className="BoxTwo-label">Thương hiệu</div>
      <div className="BoxTwo-content">
        <div className="list">
          <div className="list-item apple">
            <ICON_APPLE_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>

          <div className="list-item ibm">
            <ICON_IBM_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item asus ">
            <ICON_ASUS_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item intel active">
            <ICON_INTEL_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item dell">
            <ICON_DELL_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item hp">
            <ICON_HP_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item lenovo">
            <ICON_LENOVO_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item lenovo">
            <ICON_LENOVO_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item lenovo">
            <ICON_LENOVO_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item lenovo">
            <ICON_LENOVO_24 />
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
const BoxThree = () => {
  return (
    <div className="BoxThree">
      <div className="BoxThree-label">Laptop theo nhu cầu</div>
      <div className="BoxThree-content">
        <div className="list">
          <div className="list-item ">
            Học tập - văn phòng
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>

          <div className="list-item ">
            Đồ họa - kỹ thuật
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item   active">
            Mỏng nhẹ
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item  active">
            Cap cấp - sang trọng
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item ">
            Học sinh - sinh viên
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item ">
            Học sinh - sinh viên
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
          <div className="list-item ">
            Học sinh - sinh viên
            <span className="icon-active">
              <ICON_XMAR_CIRCLE_24 />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemFilter;
