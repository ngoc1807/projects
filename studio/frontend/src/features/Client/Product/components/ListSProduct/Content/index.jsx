import ClientPagination from "components/Pagination";
import React from "react";
import "./Content.scss";
import Search from "components/Search";
import SortProducts from "components/SortProducts";
import { Link, useRouteMatch } from "react-router-dom";

function Content(props) {
  const match = useRouteMatch();
  return (
    <div className="configContent">
      <div className="row">
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

        <div className="filter col-12">
          <div className="row">
            <div className="col-lg-7 col-md-12 search">
              <Search />
            </div>
            <div className="col-lg-5 col-md-12 sort">
              <SortProducts />
            </div>
          </div>
        </div>

        <div className="list col-12">
          <div className="title">
            <p>Danh sách sản phẩm (6000 Kết quả)</p>
          </div>
          <div className="list row">
            <div className="box col-lg-3 col-sm-12">
              <div className="imgBox">
                <img
                  src="http://demo.posthemes.com/pos_sagitta17/modules/posslideshows/images/sample-1.jpg"
                  alt=""
                />
                <Link to={`${match.url}/1`}></Link>
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

        <ClientPagination />
      </div>
    </div>
  );
}

export default Content;
