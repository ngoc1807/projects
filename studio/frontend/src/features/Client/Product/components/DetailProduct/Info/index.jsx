import React, { useState } from "react";

import "./Info.scss";

import { Button, InputNumber, Modal } from "antd";
import { Select } from "antd";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const { Option } = Select;
function Info(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="configInfo container-fluid">
      <div className="row">
        <div className="col-12 box">
          <div className="imgBox">
            <div className="imgBox-main">
              <img
                src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                alt=""
                onClick={() => setVisible(true)}
              />
              <Modal
                className="detailProductModal"
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                // width={1000}
              >
                <div className="row">
                  <div className="col-9 imgModal">
                    <img
                      src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                      alt=""
                    />
                  </div>

                  <div className="col-3 listImgModal">
                    <div className="listImgModal-item selected">
                      <img
                        src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                        alt=""
                      />
                    </div>
                    <div className="listImgModal-item">
                      <img
                        src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                        alt=""
                      />
                    </div>
                    <div className="listImgModal-item">
                      <img
                        src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                        alt=""
                      />
                    </div>
                    <div className="listImgModal-item">
                      <img
                        src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                        alt=""
                      />
                    </div>
                    <div className="listImgModal-item">
                      <img
                        src="https://morilee-dev.s3.amazonaws.com/wp-content/uploads/2020/04/16144745/2173-0145-560x800.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </Modal>
            </div>

            <div className="imgBox-list">
              <OwlCarousel
                loop={true}
                margin={10}
                nav={false}
                dotsSpeed={800}
                dragEndSpeed={800}
                items={3}
                className="owl-carousel owl-theme"
              >
                <div className="imgBox-item">
                  <img
                    className="selected"
                    src="http://demo.posthemes.com/pos_sagitta17/28-medium_default/printed-summer-dress.jpg"
                    alt=""
                  />
                </div>

                <div className="imgBox-item">
                  <img
                    src="http://demo.posthemes.com/pos_sagitta17/29-medium_default/printed-summer-dress.jpg"
                    alt=""
                  />
                </div>
                <div className="imgBox-item">
                  <img
                    src="http://demo.posthemes.com/pos_sagitta17/31-large_default/printed-summer-dress.jpg"
                    alt=""
                  />
                </div>
                <div className="imgBox-item">
                  <img
                    src="http://demo.posthemes.com/pos_sagitta17/30-large_default/printed-summer-dress.jpg"
                    alt=""
                  />
                </div>
              </OwlCarousel>
            </div>
          </div>
          {/*  */}
          <div className="descBox">
            <div className="descBox-title">PRINTED SUMMER DRESS</div>
            <div className="descBox-review">
              <div className="rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="countRating"> 4 Đánh giá </div>

              <div className="sold"> 10 Đã bán </div>
              <div className="rent"> 100 Đã thuê </div>
            </div>
            <div className="descBox-price">
              <div className="oldPrice">$123</div>
              <div className="newPrice">$100</div>

              <div className="sale"> Giảm 36% </div>
            </div>
            <div className="descBox-desc">
              Áo khoác nam cách nhiệt GOKING, ngoài vải dù ấm áp, cản gió hiệu
              quả, bên trong có lớp cách nhiệt chống lạnh chống nóng tốt
            </div>
            <div className="descBox-size">
              <div className="title">Kích cỡ</div>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                // onChange={handleChange}
              >
                <Option value="jack">S</Option>
                <Option value="lucy">M</Option>
                <Option value="disabled" disabled>
                  L
                </Option>
                <Option value="XL">XL</Option>
              </Select>
            </div>
            <div className="descBox-color">
              <div className="title">Màu sắc</div>
              <div className="list-color">
                <Button>Red</Button>
                <Button>Black</Button>

                <Button>White</Button>

                <Button>Green</Button>
                <Button>Blue</Button>
              </div>
            </div>

            <div className="descBox-quantity">
              <div className="title">Số lượng</div>
              <div>
                <div>
                  <InputNumber
                    min={1}
                    max={10}
                    defaultValue={3}
                    // onChange={onChange}
                  />
                </div>
                <div className="descBox-inStock"> 4 sản phẩm trong studio</div>
              </div>
            </div>

            <div className="descBox-func">
              <button className="btn  btn-outline  addCart">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
