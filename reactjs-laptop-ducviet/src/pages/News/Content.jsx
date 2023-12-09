import React from "react";
import news1 from "./../../asset/image/home/news1.png";
import {
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_GO_ANDROID_LINE_24,
  ICON_MESSAGE_16,
  ICON_SEARCH_HOME,
  IMAGE_SLIDE_LEFT1,
} from "../../asset/imageJs";

function ContentItem(props) {
  return (
    <div className="ContentItem">
      <MainBlog />
    </div>
  );
}

const MainBlog = (props) => {
  return (
    <div className="MainBlog">
      <div className="MainBlog__title">
        <div className="MainBlog__title-first">
          <a href="#" className="MainBlog__title-link ">
            Tất Cả
          </a>

          <a href="#" className="MainBlog__title-link active">
            Tin khuyến mãi
          </a>

          <a href="#" className="MainBlog__title-link ">
            TIN MỚI NHẤT
          </a>

          <a href="#" className="MainBlog__title-link ">
            TƯ VẤN CHỌN MUA
          </a>

          <a href="#" className="MainBlog__title-link ">
            HƯỚNG DẪN KỸ THUẬT
          </a>
        </div>
        <div className="MainBlog__title-second">
          <form className="MainBlog__search">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm "
            />
            <button className="btn">
              <ICON_SEARCH_HOME />
            </button>
          </form>
        </div>
      </div>

      <div className="MainBlog__one">
        <a href="#a" className="item-first">
          <div className="image">
            <img src="https://picsum.photos/1000/800" alt="" />
          </div>
          <div className="desc">
            <div className="desc__title">
              Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá!
            </div>
            <div className="desc__option">
              <div className="time">
                <ICON_CLOCK_16 />
                <span>12:00, 20/08/2021</span>
              </div>
              <div className="time">
                <ICON_EYE_16 />
                <span>220</span>
              </div>
              <div className="time">
                <ICON_MESSAGE_16 />
                <span>220</span>
              </div>
            </div>
          </div>
        </a>
        <a href="#b" className="item-second">
          <div className="image">
            <img src="https://picsum.photos/1000/800" alt="" />
          </div>
          <div className="desc">
            <div className="desc__title">
              Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá!
            </div>
            <div className="desc__option">
              <div className="time">
                <ICON_CLOCK_16 />
                <span>12:00, 20/08/2021</span>
              </div>
              <div className="time">
                <ICON_EYE_16 />
                <span>220</span>
              </div>
              <div className="time">
                <ICON_MESSAGE_16 />
                <span>220</span>
              </div>
            </div>
          </div>
        </a>
      </div>

      <DangChuY />
      <QuangCao />
      <KhuyenMai />
      <TuVan />
      <HuongDanKyThuat />
    </div>
  );
};

const DangChuY = (props) => {
  return (
    <div
      className="MainBlog__two
    "
    >
      <div className="remarkable">
        <div className="remarkable__title">Đáng chú ý</div>
        <div className="remarkable__content">
          <a href="#c" className="typeOne">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>

          <div className="typeTwo">
            <a href="#d" className="typeTwo__item">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
                  <div className="time">
                    <ICON_CLOCK_16 />
                    <span>12:00, 20/08/2021</span>
                  </div>
                  <div className="time">
                    <ICON_EYE_16 />
                    <span>220</span>
                  </div>
                  <div className="time">
                    <ICON_MESSAGE_16 />
                    <span>220</span>
                  </div>
                </div>
              </div>
            </a>
            <a href="#d" className="typeTwo__item">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
                  <div className="time">
                    <ICON_CLOCK_16 />
                    <span>12:00, 20/08/2021</span>
                  </div>
                  <div className="time">
                    <ICON_EYE_16 />
                    <span>220</span>
                  </div>
                  <div className="time">
                    <ICON_MESSAGE_16 />
                    <span>220</span>
                  </div>
                </div>
              </div>
            </a>

            <a href="#d" className="typeTwo__item">
              <div className="image">
                <img src="https://picsum.photos/1000/800" alt="" />
              </div>

              <div className="desc">
                <div className="desc__title">
                  Apple Fitness + bổ sung bài tập cho người đang mang thai và
                  người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài
                  tập cho người đang mang thai và người lớn. Mọi người nên sử
                  dụng
                </div>
                <div className="desc__option">
                  <div className="time">
                    <ICON_CLOCK_16 />
                    <span>12:00, 20/08/2021</span>
                  </div>
                  <div className="time">
                    <ICON_EYE_16 />
                    <span>220</span>
                  </div>
                  <div className="time">
                    <ICON_MESSAGE_16 />
                    <span>220</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="trend">
        <div className="trend__title">Xu hướng</div>

        <div className="trend__list">
          <a href="#d" className="trend__list-item">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>

          <a href="#d" className="trend__list-item">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>

          <a href="#d" className="trend__list-item">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const QuangCao = (props) => {
  return (
    <div
      className="MainBlog__ads
    "
    >
      <div className="box">
        <a className="box__item">
          <img src={IMAGE_SLIDE_LEFT1} alt="" />
        </a>

        <a className="box__item">
          <img src={IMAGE_SLIDE_LEFT1} alt="" />
        </a>
      </div>
    </div>
  );
};

const KhuyenMai = (props) => {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }

  return (
    <div className="MainBlog__there">
      <div className="sale">
        <div className="sale__title">TIN KHUYẾN MẠI</div>
        <div className="sale__content">
          {a.map((i, k) => (
            <a href="s" className="item" key={k}>
              <div className="box">
                <div className="box__image">
                  <img src={news1} alt="" />
                </div>
                <div className="box__desc">
                  <div className="box__desc-title">
                    Apple Fitness + bổ sung bài tập cho người đang mang thai và
                    người lớn. Mọi người nên sử dụng
                  </div>
                  <div className="box__desc-summary">
                    Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                    Gozo và 2 người mẹ Được dẫn dắt bởi huấn luyện viên (người
                    sắp làm mẹ) Betina Gozo và 2 người mẹĐược dẫn dắt bởi huấn
                    luyện viên (người sắp làm mẹ) Betina Gozo và 2 người mẹ Được
                    dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina Gozo
                    và 2 người mẹ
                  </div>
                  <div className="box__desc-option">
                    <div className="time">
                      <ICON_CLOCK_16 />
                      <span>12:00, 20/08/2021</span>
                    </div>
                    <div className="time">
                      <ICON_EYE_16 />
                      <span>220</span>
                    </div>
                    <div className="time">
                      <ICON_MESSAGE_16 />
                      <span>220</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="sale__btn">
          <button className="btn">
            <span> Xem toàn bộ </span> <ICON_GO_ANDROID_LINE_24 />
          </button>
        </div>
      </div>

      <div className="latestNews">
        <div className="latestNews__title">TIN MỚI NHẤT</div>
        <div className="latestNews__typeOne">
          <a href="#c" className="typeOne">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="latestNews__typeTwo">
          <a href="#d" className="typeTwo">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>
          <a href="#d" className="typeTwo">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>

          <a href="#d" className="typeTwo">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>

            <div className="desc">
              <div className="desc__title">
                Apple Fitness + bổ sung bài tập cho người đang mang thai và
                người lớn. Mọi người nên sử dụng Apple Fitness + bổ sung bài tập
                cho người đang mang thai và người lớn. Mọi người nên sử dụng
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const TuVan = (props) => {
  let a = [];
  for (let i = 0; i < 3; i++) {
    a.push({ id: i });
  }

  return (
    <div className="MainBlog__four">
      <div className="advisory">
        <div className="advisory__title">Tư vấn chọn mua</div>

        <div className="advisory__content">
          <a href="#a" className="item-first">
            <div className="image">
              <img src="https://picsum.photos/1000/800" alt="" />
            </div>
            <div className="desc">
              <div className="desc__title">
                Đánh giá Xiaomi Mi 11 Lite 5G: Toàn diện quá!
              </div>
              <div className="desc__option">
                <div className="time">
                  <ICON_CLOCK_16 />
                  <span>12:00, 20/08/2021</span>
                </div>
                <div className="time">
                  <ICON_EYE_16 />
                  <span>220</span>
                </div>
                <div className="time">
                  <ICON_MESSAGE_16 />
                  <span>220</span>
                </div>
              </div>
            </div>
          </a>

          <div className="item-second">
            {a.map((i, k) => (
              <a href="s" className="item" key={k}>
                <div className="box">
                  <div className="box__image">
                    <img src={news1} alt="" />
                  </div>
                  <div className="box__desc">
                    <div className="box__desc-title">
                      Apple Fitness + bổ sung bài tập cho người đang mang thai
                      và người lớn. Mọi người nên sử dụng
                    </div>
                    <div className="box__desc-summary">
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ Được dẫn dắt bởi huấn luyện viên (người
                      sắp làm mẹ) Betina Gozo và 2 người mẹĐược dẫn dắt bởi huấn
                      luyện viên (người sắp làm mẹ) Betina Gozo và 2 người mẹ
                      Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                      Gozo và 2 người mẹ
                    </div>
                    <div className="box__desc-option">
                      <div className="time">
                        <ICON_CLOCK_16 />
                        <span>12:00, 20/08/2021</span>
                      </div>
                      <div className="time">
                        <ICON_EYE_16 />
                        <span>220</span>
                      </div>
                      <div className="time">
                        <ICON_MESSAGE_16 />
                        <span>220</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}

            <div className="second__btn">
              <button className="btn">
                <span> Xem toàn bộ </span> <ICON_GO_ANDROID_LINE_24 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HuongDanKyThuat = (props) => {
  let a = [];
  for (let i = 0; i < 5; i++) {
    a.push({ id: i });
  }
  return (
    <div className="MainBlog__five">
      <div className="guid">
        <div className="guid__title">TIN KHUYẾN MẠI</div>
        <div className="guid__content">
          {a.map((i, k) => (
            <a href="s" className="item" key={k}>
              <div className="box">
                <div className="box__image">
                  <img src={news1} alt="" />
                </div>
                <div className="box__desc">
                  <div className="box__desc-title">
                    Apple Fitness + bổ sung bài tập cho người đang mang thai và
                    người lớn. Mọi người nên sử dụng
                  </div>
                  <div className="box__desc-summary">
                    Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina
                    Gozo và 2 người mẹ Được dẫn dắt bởi huấn luyện viên (người
                    sắp làm mẹ) Betina Gozo và 2 người mẹĐược dẫn dắt bởi huấn
                    luyện viên (người sắp làm mẹ) Betina Gozo và 2 người mẹ Được
                    dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina Gozo
                    và 2 người mẹ
                  </div>
                  <div className="box__desc-option">
                    <div className="time">
                      <ICON_CLOCK_16 />
                      <span>12:00, 20/08/2021</span>
                    </div>
                    <div className="time">
                      <ICON_EYE_16 />
                      <span>220</span>
                    </div>
                    <div className="time">
                      <ICON_MESSAGE_16 />
                      <span>220</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="guid__btn">
          <button className="btn">
            <span> Xem toàn bộ </span> <ICON_GO_ANDROID_LINE_24 />
          </button>
        </div>
      </div>

      <div className="ads">
        <div className="ads__item">
          <img src="https://picsum.photos/1000/800" alt="" />
        </div>
        <div className="ads__item">
          <img src="https://picsum.photos/1000/800" alt="" />
        </div>
        <div className="ads__item">
          <img src="https://picsum.photos/1000/800" alt="" />
        </div>
        <div className="ads__item">
          <img src="https://picsum.photos/1000/800" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
