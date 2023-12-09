import React from "react";

const CriterionHome = () => {
  return (
    <div className="CriterionHome">
      <div className="box">
        <div className="item one">
          <div className="item__image">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34 16H40L46 24.112V36H41.93C41.6922 37.6686 40.8604 39.1954 39.5874 40.2999C38.3143 41.4044 36.6854 42.0125 35 42.0125C33.3146 42.0125 31.6857 41.4044 30.4126 40.2999C29.1396 39.1954 28.3078 37.6686 28.07 36H17.93C17.6922 37.6686 16.8604 39.1954 15.5874 40.2999C14.3143 41.4044 12.6854 42.0125 11 42.0125C9.31456 42.0125 7.68571 41.4044 6.41264 40.2999C5.13957 39.1954 4.30776 37.6686 4.07 36H2V12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10H32C32.5304 10 33.0391 10.2107 33.4142 10.5858C33.7893 10.9609 34 11.4696 34 12V16ZM34 20V26H42V25.43L37.984 20H34Z"
                fill="#E62E24"
              ></path>
            </svg>
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Chính sách giao hàng</div>
            <div className="item__desc-text">
              Nhận hàng và thanh toán tại nhà
            </div>
          </div>
        </div>
        <div className="item two">
          <div className="item__image">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 44C12.954 44 4 35.046 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44ZM14 18H18V26H22V18H26L20 11L14 18ZM34 30H30V22H26V30H22L28 37L34 30Z"
                fill="#E62E24"
              ></path>
            </svg>
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Đổi trả dễ dàng</div>
            <div className="item__desc-text">Dùng thử trong vòng 3 ngày</div>
          </div>
        </div>
        <div className="item one">
          <div className="item__image">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 20V40C44 40.5304 43.7893 41.0391 43.4142 41.4142C43.0391 41.7893 42.5304 42 42 42H6C5.46957 42 4.96086 41.7893 4.58579 41.4142C4.21071 41.0391 4 40.5304 4 40V20H44ZM44 16H4V8C4 7.46957 4.21071 6.96086 4.58579 6.58579C4.96086 6.21071 5.46957 6 6 6H42C42.5304 6 43.0391 6.21071 43.4142 6.58579C43.7893 6.96086 44 7.46957 44 8V16ZM30 32V36H38V32H30Z"
                fill="#E62E24"
              ></path>
            </svg>
          </div>
          <div className="item__desc">
            <div className="item__desc-title">Thanh toán tiện lợi</div>
            <div className="item__desc-text">
              Trả tiền mặt, trả góp, chuyển khoản
            </div>
          </div>
        </div>
        <div className="item two">
          <div className="item__image">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.008 44L6.712 34.064C4.93027 31.0097 3.99419 27.536 4 24C4 12.954 12.954 4 24 4C35.046 4 44 12.954 44 24C44 35.046 35.046 44 24 44C20.4655 44.0057 16.9933 43.0703 13.94 41.29L4.008 44ZM16.782 14.616C16.5237 14.632 16.2713 14.7001 16.04 14.816C15.823 14.9389 15.625 15.0924 15.452 15.272C15.212 15.498 15.076 15.694 14.93 15.884C14.1908 16.846 13.7932 18.0268 13.8 19.24C13.804 20.22 14.06 21.174 14.46 22.066C15.278 23.87 16.624 25.78 18.402 27.55C18.83 27.976 19.248 28.404 19.698 28.802C21.9048 30.7449 24.5345 32.1461 27.378 32.894L28.516 33.068C28.886 33.088 29.256 33.06 29.628 33.042C30.2105 33.0119 30.7792 32.8542 31.294 32.58C31.626 32.404 31.782 32.316 32.06 32.14C32.06 32.14 32.146 32.084 32.31 31.96C32.58 31.76 32.746 31.618 32.97 31.384C33.136 31.212 33.28 31.01 33.39 30.78C33.546 30.454 33.702 29.832 33.766 29.314C33.814 28.918 33.8 28.702 33.794 28.568C33.786 28.354 33.608 28.132 33.414 28.038L32.25 27.516C32.25 27.516 30.51 26.758 29.448 26.274C29.336 26.2252 29.216 26.1974 29.094 26.192C28.9572 26.1779 28.8189 26.1933 28.6885 26.2372C28.5581 26.281 28.4386 26.3522 28.338 26.446V26.442C28.328 26.442 28.194 26.556 26.748 28.308C26.665 28.4195 26.5507 28.5038 26.4196 28.5501C26.2885 28.5964 26.1466 28.6026 26.012 28.568C25.8817 28.5332 25.754 28.489 25.63 28.436C25.382 28.332 25.296 28.292 25.126 28.218L25.116 28.214C23.9718 27.7145 22.9124 27.0397 21.976 26.214C21.724 25.994 21.49 25.754 21.25 25.522C20.4632 24.7685 19.7774 23.916 19.21 22.986L19.092 22.796C19.0072 22.6683 18.9387 22.5306 18.888 22.386C18.812 22.092 19.01 21.856 19.01 21.856C19.01 21.856 19.496 21.324 19.722 21.036C19.9102 20.7966 20.0857 20.5476 20.248 20.29C20.484 19.91 20.558 19.52 20.434 19.218C19.874 17.85 19.294 16.488 18.698 15.136C18.58 14.868 18.23 14.676 17.912 14.638C17.804 14.626 17.696 14.614 17.588 14.606C17.3194 14.5927 17.0503 14.5953 16.782 14.614V14.616Z"
                fill="#E62E24"
              ></path>
            </svg>
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

export default CriterionHome;
