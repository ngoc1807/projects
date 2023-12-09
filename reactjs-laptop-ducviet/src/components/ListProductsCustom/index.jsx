import React from "react";
import {
  ICON_PHONE_LINE,
  IMAGE_SELLER,
  IMAGE_STATUS_HOT,
  ICON_ARROW_LEFT_16,
  ICON_ARROW_RIGHT_16,
  IMAGE_PARTNER1,
  IMAGE_PARTNER2,
  IMAGE_PARTNER3,
  IMAGE_PARTNER4,
  IMAGE_PARTNER5,
  IMAGE_PARTNER6,
  IMAGE_PARTNER7,
  IMAGE_PARTNER_HOVER1,
  IMAGE_PARTNER_HOVER2,
  IMAGE_PARTNER_HOVER3,
  IMAGE_PARTNER_HOVER4,
  IMAGE_PARTNER_HOVER5,
  IMAGE_PARTNER_HOVER6,
  IMAGE_PARTNER_HOVER7,
  ICON_TRUCK_FILL,
  ICON_SWAP_FILL,
  ICON_BANK_CARD,
  ICON_WHATSAPP_FILL,
  ICON_CLOCK_16,
  ICON_EYE_16,
  ICON_MESSAGE_16,
  ICON_CHECKED_WHITE,
  IMAGE_STATUS_DISCOUNT,
  ICON_APPLE_24,
  ICON_IBM_24,
  ICON_ASUS_24,
  ICON_INTEL_24,
  ICON_DELL_24,
  ICON_HP_24,
  ICON_LENOVO_24,
} from "./../../asset/imageJs/index";

import news1 from "./../../asset/image/home/news1.png";
export const ListProductsCustom = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  const title = props && props.title ? props.title : "";
  const type = props && props.type ? props.type : "";
  // console.log(type);

  switch (type) {
    case 2:
      return (
        <div className="boxProduct">
          <ProductTitleViewed title={title} />
          <ProductContentViewed amount={amount} />
        </div>
      );

    case 3:
      return (
        <div className="boxProduct">
          <ProductTitleViewed title={title} />
          <ProductContentCompare amount={amount} />
        </div>
      );

    case 4:
      return (
        <div className="boxProduct">
          <ProductTitleBlog title={title} />
          <ProductContentBlog amount={amount} />
        </div>
      );

    case 5:
      return (
        <div className="boxProductAdv">
          <ProductTitleAdv title={title} />
          <ProductContentAdv amount={amount} />
        </div>
      );

    case 6:
      return (
        <div className="boxProduct">
          <ProductTitleViewedHome title={title} />
          <ProductContentCompare amount={amount} />
        </div>
      );

    default:
      return (
        <div className="boxProduct">
          <ProductTitle title={title} />
          <ProductContent amount={amount} />
        </div>
      );
  }
};
export const ProductContentBlog = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return (
    <div className="boxProductBlog__content">
      {a.map((i, k) => (
        <a href="s" className="boxProductBlog__content-item" key={k}>
          <div className="box">
            <div className="box__image">
              <img src={news1} alt="" />
            </div>
            <div className="box__title">
              Apple Fitness + bổ sung bài tập cho người đang mang thai và người
              lớn tuổi
            </div>
            <div className="box__summary">
              Được dẫn dắt bởi huấn luyện viên (người sắp làm mẹ) Betina Gozo và
              2 người mẹ trẻ Emily Fayettesssssssssssssssssssssss
            </div>
            <div className="box__option">
              <div className="box__option-time">
                <ICON_CLOCK_16 />
                <span> 12:00, 20/08/2021</span>
              </div>
              <div className="box__option-time">
                <ICON_EYE_16 />
                <span> 220 lượt xem</span>
              </div>
              <div className="box__option-time">
                <ICON_MESSAGE_16 />
                <span>220 bình luận</span>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};
export const ProductTitleBlog = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxProductBlog__title">
      <div className="boxProductBlog__title-left">{title}</div>
      <div className="boxProductBlog__title-right">
        <a href="#" className="boxProductBlog__title-link">
          Tất Cả
        </a>
        <button className="btn btn__left">
          <ICON_ARROW_LEFT_16 />
        </button>
        <button className="btn btn__right">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
};

export const ProductContentCompare = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <div className="boxProductViewed__content">
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">
            <button className="btn">So sánh</button>
          </div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span>
              {" "}
              Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16 Macbook Pro 13
              inch 2020 Quad Core I5 2.0Ghz 16 Macbook Pro 13 inch 2020 Quad
              Core I5 2.0Ghz 16
            </span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">
            <button className="btn">So sánh</button>
          </div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span>
              Macbook Pro 13 inch 2020 Quad Macbook Pro 13 inch 2020 Quad
              Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16
            </span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">
            <button className="btn">So sánh</button>
          </div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">
            <button className="btn">So sánh</button>
          </div>
        </div>
      </a>
    </div>
  );
};

export const ProductTitleViewed = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxProductViewed__title">
      <div className="boxProductViewed__title-left">{title}</div>
      <div className="boxProductViewed__title-right">
        <button className="btn btn__left">
          <ICON_ARROW_LEFT_16 />
        </button>
        <button className="btn btn__right">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
};
export const ProductTitleViewedHome = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxProductViewedHome__title">
      <div className="boxProductViewedHome__title-left">
        <div className="one">
          <div className="text">{title}</div>
          <div className="two"></div>
          <div className="dot"></div>
        </div>

        <div className="three"></div>
      </div>
      <div className="boxProductViewedHome__title-right">
        <a href="" className="showMore">
          Xem thêm
        </a>
        <button className="btn btn__left">
          <ICON_ARROW_LEFT_16 />
        </button>
        <button className="btn btn__right">
          <ICON_ARROW_RIGHT_16 />
        </button>
      </div>
    </div>
  );
};

export const ProductContentViewed = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <div className="boxProductViewed__content">
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">30.000.000đ</div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">30.000.000đ</div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">30.000.000đ</div>
        </div>
      </a>
      <a href="s" className="boxProductViewed__content-item">
        <div className="image">
          <img src={IMAGE_SELLER} alt="" />
        </div>
        <div className="desc">
          <div className="title">
            <span> Macbook Pro 13 inch 2020 Quad Core I5 2.0Ghz 16</span>
          </div>

          <div className="price-new">22.000.000đ</div>
          <div className="price-old">30.000.000đ</div>
        </div>
      </a>

      <div className="boxProductViewed__content-partner w-100">
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER1} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER1} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER2} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER2} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER3} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER3} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER4} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER4} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER5} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER5} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER6} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER6} alt="" />
        </a>
        <a href="#" className="item">
          <img className="first" src={IMAGE_PARTNER7} alt="" />
          <img className="second" src={IMAGE_PARTNER_HOVER7} alt="" />
        </a>
      </div>

      <div className="boxProductViewed__content-introduce w-100">
        <div className="item">
          <div className="item__image">
            <ICON_TRUCK_FILL />
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Chính sách giao hàng</div>
            <div className="item__desc-text">
              Nhận hàng và thanh toán tại nhà
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <ICON_SWAP_FILL />
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Đổi trả dễ dàng</div>
            <div className="item__desc-text">Dùng thử trong vòng 3 ngày</div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <ICON_BANK_CARD />
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Thanh toán tiện lợi</div>
            <div className="item__desc-text">
              Trả tiền mặt, trả góp, chuyển khoản
            </div>
          </div>
        </div>
        <div className="item">
          <div className="item__image">
            <ICON_WHATSAPP_FILL />
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Hỗ trợ nhiệt tình</div>
            <div className="item__desc-text">Tư vấn, giải đáp mọi thắc mắc</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductTitle = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxProduct__title">
      <div className="boxProduct__title-left">
        <div className="one">
          <div className="text">{title}</div>
          <div className="two"></div>
          <div className="dot"></div>
        </div>

        <div className="three">SALE TUU TRUONG</div>
      </div>
      <div className="boxProduct__title-right">
        <div className="one">
          <ul>
            <li>
              <a href="">
                <ICON_APPLE_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_IBM_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_ASUS_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_INTEL_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_DELL_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_HP_24 />
              </a>
            </li>
            <li>
              <a href="">
                <ICON_LENOVO_24 />
              </a>
            </li>
          </ul>
        </div>
        <div className="two">
          <ul>
            <li className="active">
              <a>Mức giá</a>
            </li>
            <li>
              <a href="">10 triệu - 15 triệu</a>
            </li>
            <li>
              <a href="">10 triệu - 15 triệu</a>
            </li>
            <li>
              <a href="">15 triệu - 25 triệu</a>
            </li>
            <li>
              <a href="">Trên 25 triệu</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ProductContent = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <>
      <div className="boxProduct__content">
        <ProductItem amount={amount} />
      </div>
      <div className="boxProduct__showMore">
        <button className="btn">Xem thêm</button>
      </div>
    </>
  );
};

export const ProductItem = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return a.map((i, k) => (
    <a
      href="/"
      className={`boxProduct__content-item ${(k + 1) % 5 ? "" : "no_left"}`}
      key={k}
    >
      <div className="image">
        <div className="image__status">
          <img src={IMAGE_STATUS_HOT} alt="" />
        </div>
        {/* <div className="image__status2">
          <img src={IMAGE_STATUS_DISCOUNT} alt="" />
        </div> */}
        <img src={IMAGE_SELLER} alt="" className="main" />
      </div>
      <div className="desc">
        <div className="desc__code">
          <div className="adv">
            <div className="left">%</div>
            <div className="right">SALE sinh nhật</div>
          </div>
        </div>
        <div className="desc__title">
          <span>
            Macbook Pro 13 inch 2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13 inch
            2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13 inch 2020 Quad Core I7
            2.0Ghz 16
          </span>
        </div>
        <div className="desc__info">
          <div className="info__left">
            <div className="price-new">22.000.000đ</div>
            <div className="price-old">30.000.000đ</div>
          </div>
          <div className="info__right">
            <span>Giảm 20%</span>
          </div>
        </div>

        <div className="present">
          <div>Quà tặng +800.000đ</div>
        </div>
      </div>
    </a>
  ));
};

export const ProductTitleAdv = (props) => {
  const title = props && props.title ? props.title : "";
  return (
    <div className="boxProductAdv__title">
      <div className="boxProductAdv__title-left">{title}</div>
      <div className="boxProductAdv__title-right">
        <ul>
          <li>
            <a href="">LAPTOP</a>
          </li>
          <li>
            <a href="">MÁY TÍNH</a>
          </li>
          <li>
            <a href="">LINH KIỆN</a>
          </li>
          <li>
            <a href="">THIẾT BỊ MẠNG</a>
          </li>
          <li className="active">
            <a href="">TẤT CẢ</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export const ProductContentAdv = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  return (
    <div className="boxProductAdv__content">
      <ProductItemAdv amount={amount} />
    </div>
  );
};

export const ProductItemAdv = (props) => {
  const amount = props && props.amount ? props.amount : 1;

  let a = [];
  for (let i = 0; i < amount; i++) {
    a.push({ id: i });
  }

  return a.map((i, k) => (
    <a
      href="/"
      className={`boxProductAdv__content-item ${(k + 1) % 5 ? "" : "no_left"}`}
      key={k}
    >
      <div className="image">
        <div className="image__status">
          <img src={IMAGE_STATUS_HOT} alt="" />
        </div>
        <div className="image__status2">
          <img src={IMAGE_STATUS_DISCOUNT} alt="" />
        </div>
        <img src={IMAGE_SELLER} alt="" className="main" />
      </div>
      <div className="desc">
        <div className="desc__code">
          <div className="adv">
            <div className="left">%</div>
            <div className="right">SALE sinh nhật</div>
          </div>
        </div>
        <div className="desc__title">
          <span>
            Macbook Pro 13 inch 2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13 inch
            2020 Quad Core I7 2.0Ghz 16 Macbook Pro 13 inch 2020 Quad Core I7
            2.0Ghz 16
          </span>
        </div>
        <div className="desc__info">
          <div className="info__left">
            <div className="price-new">22.000.000đ</div>
            <div className="price-old">30.000.000đ</div>
          </div>
          <div className="info__right">
            <span>Giảm 20%</span>
          </div>
        </div>

        <div className="present">
          <div>Quà tặng +800.000đ</div>
        </div>
      </div>
    </a>
  ));
};
