import React, { useState } from "react";
import { Button, Progress } from "antd";
import Modal from "antd/lib/modal/Modal";

import "./Review.scss";
function Review(props) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="configReview container-fluid">
      <div className="row">
        <div className="col-12 evaluate">
          <div className="title">
            <p>Đánh giá sản phẩm</p>
          </div>

          <div className="box">
            <div className="box-left">
              <div className="count">4</div>
              <div className="rating">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="comment">358 nhận xét</div>
            </div>

            <div className="box-right">
              <div className="ratingFive">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <Progress
                  percent={70}
                  showInfo={false}
                  className="processBar"
                />
                <div className="count"> 256</div>
              </div>
              <div className="ratingFour">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <Progress
                  percent={40}
                  showInfo={false}
                  className="processBar"
                />
                <div className="count"> 256</div>
              </div>
              <div className="ratingThere">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <Progress
                  percent={30}
                  showInfo={false}
                  className="processBar"
                />
                <div className="count"> 256</div>
              </div>
              <div className="ratingTwo">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <Progress
                  percent={20}
                  showInfo={false}
                  className="processBar"
                />
                <div className="count"> 256</div>
              </div>

              <div className="ratingOne">
                <i className="fas fa-star active"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <Progress
                  percent={10}
                  showInfo={false}
                  className="processBar"
                />
                <div className="count"> 256</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 Commented">
          <div className="title">
            <p>Nhận xét khách hàng</p>
          </div>

          <div className="boxParentComment">
            <div className="boxTitle">
              <div className="userImg">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="user">
                <div className="name">Hồ Thanh Hùng</div>

                <div className="time">Nhận xét vào 22 tháng 09, 2019</div>
              </div>
            </div>

            <div className="rating">
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="boxContent">
              <p>Cực kì hài lòng</p>
              <div className="text">
                Sản phẩm chất lượng và đẹp, ưng nhất là dịch vụ của shop quá
                tốt, mình mua size hơi nhỏ nên đổi trong vòng 2 ngày có người
                mang áo mới tới lấy cái cũ về không cần phải đi đâu, sẽ ủng hộ
                shop tiếp. Chúc shop ngày càng phát triển.
              </div>
            </div>
            <div className="boxImg">
              <div className="boxImg-item">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/28-home_default/printed-summer-dress.jpg"
                  alt=""
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className="boxImg-item">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/28-home_default/printed-summer-dress.jpg"
                  alt=""
                  onClick={() => setVisible(true)}
                />
              </div>
            </div>
            <div className="boxFunc">
              <Button>
                <i className="far fa-heart"></i>
                Hữu ích (3)
              </Button>
              <Button>Gửi trả lời</Button>
            </div>
          </div>
          <div className="boxParentComment">
            <div className="boxTitle">
              <div className="userImg">
                <img
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
              </div>
              <div className="user">
                <div className="name">Hồ Thanh Hùng</div>

                <div className="time">Nhận xét vào 22 tháng 09, 2019</div>
              </div>
            </div>

            <div className="rating">
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star active"></i>
              <i className="fas fa-star"></i>
            </div>
            <div className="boxContent">
              <p>Cực kì hài lòng</p>
              <div className="text">
                Sản phẩm chất lượng và đẹp, ưng nhất là dịch vụ của shop quá
                tốt, mình mua size hơi nhỏ nên đổi trong vòng 2 ngày có người
                mang áo mới tới lấy cái cũ về không cần phải đi đâu, sẽ ủng hộ
                shop tiếp. Chúc shop ngày càng phát triển.
              </div>
            </div>
            <div className="boxImg">
              <div className="boxImg-item">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  onClick={() => setVisible(true)}
                />
              </div>
              <div className="boxImg-item">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  onClick={() => setVisible(true)}
                />
              </div>
            </div>
            <div className="boxFunc">
              <Button>
                <i className="far fa-heart"></i>
                Hữu ích (3)
              </Button>
              <Button>Gửi trả lời</Button>
            </div>

            <div className="boxChildComment">
              <div className="boxText"> Size gì vậy</div>
              <div className="boxUser">
                <div className="img">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
                <div className="name">Đoàn Phương Hiếu</div>
                <div className="time">18 tháng 09, 2020</div>
              </div>
              <div className="boxLink">
                <a href="/">Xem thêm 1 câu trả lời</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 sameCateProduct">
          <div className="title col-12">
            <p>Sản phẩm tương tự</p>
          </div>
          <div className="box">
            <div className="box-item">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>

                <div className="sale">
                  <span>-5%</span>
                </div>

                <div
                  className="addCart"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Thêm vào giỏ hàng"
                >
                  <a href="google.com">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="descBox">
                <div className="name">adobe dress</div>
                <div className="descPrice">
                  <div className="price">
                    <div className="newPrice">$100</div>
                    <div className="oldPrice">$259.9</div>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>

                <div className="sale">
                  <span>-5%</span>
                </div>

                <div
                  className="addCart"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Thêm vào giỏ hàng"
                >
                  <a href="google.com">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="descBox">
                <div className="name">adobe dress</div>
                <div className="descPrice">
                  <div className="price">
                    <div className="newPrice">$100</div>
                    <div className="oldPrice">$259.9</div>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>

                <div className="sale">
                  <span>-5%</span>
                </div>

                <div
                  className="addCart"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Thêm vào giỏ hàng"
                >
                  <a href="google.com">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="descBox">
                <div className="name">adobe dress</div>
                <div className="descPrice">
                  <div className="price">
                    <div className="newPrice">$100</div>
                    <div className="oldPrice">$259.9</div>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-item">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/24-home_default/printed-chiffon-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>

                <div className="sale">
                  <span>-5%</span>
                </div>

                <div
                  className="addCart"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Thêm vào giỏ hàng"
                >
                  <a href="google.com">
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </div>
              </div>
              <div className="descBox">
                <div className="name">adobe dress</div>
                <div className="descPrice">
                  <div className="price">
                    <div className="newPrice">$100</div>
                    <div className="oldPrice">$259.9</div>
                  </div>

                  <div className="rating">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        className="detailCommentProductModal"
        title="Modal lol width"
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
  );
}

export default Review;
