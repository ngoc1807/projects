import React from "react";

import "./Content.scss";

function ContentProduct(props) {
  return (
    <div className="configContentProducts container-fluid">
      <div className="row">
        <div className=" BannerProducts col-12">
          <div
            id="BannerProducts"
            className="carousel slide"
            data-ride="carousel"
          >
            <ul className="carousel-indicators">
              <li
                data-target="#BannerProducts"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#BannerProducts" data-slide-to="1"></li>
              <li data-target="#BannerProducts" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt="Los Angeles"
                />
                <div className="carousel-caption">
                  <h3>Los Angeles</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.w3schools.com/bootstrap4/ny.jpg"
                  alt="Chicago"
                />
                <div className="carousel-caption">
                  <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.w3schools.com/bootstrap4/ny.jpg"
                  alt="New York"
                />
                <div className="carousel-caption">
                  <h3>New York</h3>
                  <p>We love the Big Apple!</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#BannerProducts"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a
              className="carousel-control-next"
              href="#BannerProducts"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>
        </div>
        {/*  */}
        <div className="adsBannerProducts col-12">
          <div className="box row">
            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/1_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/2_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
               http://demo.posthemes.com/pos_sagitta17/img/cms/3_1.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="HighlightProducts col-12">
          <div className="title">
            <p>Sản phẩm nổi bật</p>
          </div>
          <div className="list row">
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
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
                <div className="price">
                  <div className="name">
                    <a href="/ ">Abc dress</a>
                  </div>{" "}
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
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
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
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
                <div className="price">
                  <div className="name">
                    <a href="/ ">Abc dress</a>
                  </div>{" "}
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
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
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
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
                <div className="price">
                  <div className="name">
                    <a href="/ ">Abc dress</a>
                  </div>{" "}
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
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
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
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
                <div className="price">
                  <div className="name">
                    <a href="/ ">Abc dress</a>
                  </div>{" "}
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
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
        {/*  */}
        <div className="adsBannerProducts col-12">
          <div className="box row">
            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/1_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/2_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
               http://demo.posthemes.com/pos_sagitta17/img/cms/3_1.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="NewProducts col-12">
          <div className="title">
            <p>Sản phẩm mới</p>
          </div>
          <div className="list row">
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="box col-lg-4 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/32-home_default/printed-summer-dress.jpg"
                  alt=""
                />
                <a href="/"> </a>
              </div>
              <div className="descBox">
                <div className="name">
                  <a href="/"> Adobe Dress</a>
                </div>

                <div className="price">
                  <div className="newPrice">$100</div>
                  <div className="oldPrice">$399</div>
                </div>

                <div className="rating">
                  <i className="fas fa-star active"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="addCart">
                  <a href="/">
                    <i className="fas fa-plus"></i> Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="adsBannerProducts col-12">
          <div className="box row">
            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/1_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
                http://demo.posthemes.com/pos_sagitta17/img/cms/2_1.jpg"
                  alt=""
                />
              </a>
            </div>

            <div className="adsBanner-item col-lg-4 co-md-12">
              <a href="/">
                <img
                  src="
               http://demo.posthemes.com/pos_sagitta17/img/cms/3_1.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <div className="RecentlyProducts col-12">
          <div className="title">
            <p>Sản phẩm gần đây</p>
          </div>
          <div className="list row">
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>

            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>

            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <a href="/"> </a>
                <div className="price">
                  <div className="sale-font">-5%</div>
                  <div className="price-back">$100</div>
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
              </div>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

export default ContentProduct;
