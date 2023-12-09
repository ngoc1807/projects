import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";

// import "./style/main.scss";

import "./app.scss";

import CartScreen from "./Web/cart/index";

// import OrderCartScreen from "./Web/Order/Order";
// import CompareProductWeb from "./Web/compareProduct/CompareProductWeb";
import CompareProductMobile from "./mobile/compareProduct/CompareProduct";
import CartWeb from "./pages/cart";
// import DetailProduct from "./pages/DetailProduct";
// import ListComponent from "./Web/components/index";
import Home from "./Web/home/home";

// import listProductWeb from "./pages/ListProducts/index";
// import OrderSuccessWeb from "./pages/OrderSuccess";
// import CartEmptyWeb from "./pages/CartEmpty";
// import Home from "./pages/Home/index"
// import AboutUsWeb from "./pages/AboutUs";
// import SupportWeb from "./pages/Support";
// import NewsListWeb from "./pages/NewsList";
// import NewsDetailWeb from "./pages/NewsDetail";
// import NewsWeb from "./pages/News";
import InstallmentWeb from "./Web/Installment/installment";

import HomeMobile from "./mobile/Home";
import InstallmentMobile from "./mobile/installment/installment";
// import DetailProductMobile from "./mobile/DetailProduct";
// import ListProductMobile from "./mobile/ListProduct";
import CartMobile from "./mobile/Cart";
// import CartEmptyMobile from "./mobile/CartEmpty";
import OrderMobile from "./mobile/Order";
// import OrderVoucherMobile from "./mobile/OrderVoucher";

import OrderSuccessMobile from "./mobile/OrderSuccess";
// import NewsMobile from "./mobile/News";
// import NewsListMobile from "./mobile/NewsList";
// import NewsDetailMobile from "./mobile/NewsDetail";
// import AccountMobile from "./mobile/Account";
// import IntroduceMobile from "./mobile/Introduce";
// import InfoContactMobile from "./mobile/InfoContact";
// import InfoPayMobile from "./mobile/InfoPay";
// import ContactSocialNetWorkMobile from "./mobile/ContactSocialNetWork";
// import AddressSystemStoreMobile from "./mobile/AddressSystemStore";

// import Insurance from "./mobile/Insurance/Insurance";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* OrderCartScreen */}
          <Route path="/CartScreen" component={CartScreen} />
          <Route path="/InstallmentWeb" component={InstallmentWeb} />

          {/* <Route path="/ListComponentWeb" component={ListComponent} /> */}
          <Route path="/HomeWeb" component={Home} />
          {/* <Route path="/CompareProductWeb" component={CompareProductWeb} /> */}
          {/* <Route path="/detailProductWeb" component={DetailProduct} /> */}
          {/* <Route path="/listProductWeb" component={listProductWeb} /> */}
          {/* <Route path="/CartWeb" component={CartWeb} />
          <Route path="/OrderSuccessWeb" component={OrderSuccessWeb} />
          <Route path="/CartEmptyWeb" component={CartEmptyWeb} />
          <Route path="/AboutUsWeb" component={AboutUsWeb} />
          <Route path="/SupportWeb" component={SupportWeb} />
          <Route path="/NewsListWeb" component={NewsListWeb} />
          <Route path="/NewsDetailWeb" component={NewsDetailWeb} />
          <Route path="/NewsWeb" component={NewsWeb} /> */}
          {/*  */}
          {/*  */}
          <Route path="/HomeMobile" component={HomeMobile} />
          <Route path="/InstallmentMobile" component={InstallmentMobile} />
          <Route
            path="/CompareProductMobile"
            component={CompareProductMobile}
          />
          {/* <Route path="/DetailProductMobile" component={DetailProductMobile} /> */}
          {/* <Route path="/ListProductMobile" component={ListProductMobile} /> */}
          <Route path="/CartMobile" component={CartMobile} />
          <Route path="/OrderSuccessMobile" component={OrderSuccessMobile} />
          <Route path="/OrderMobile" component={OrderMobile} />
          {/* 
          <Route path="/CartEmptyMobile" component={CartEmptyMobile} />
          <Route path="/OrderMobile" component={OrderMobile} />
          <Route path="/OrderVoucherMobile" component={OrderVoucherMobile} />


          <Route path="/NewsMobile" component={NewsMobile} />
          <Route path="/NewsListMobile" component={NewsListMobile} />
          <Route path="/NewsDetailMobile" component={NewsDetailMobile} />
          <Route path="/AccountMobile" component={AccountMobile} />
          <Route path="/IntroduceMobile" component={IntroduceMobile} />
          <Route path="/InfoContactMobile" component={InfoContactMobile} />
          <Route path="/InfoPayMobile" component={InfoPayMobile} />
          <Route
            path="/ContactSocialNetWorkMobile"
            component={ContactSocialNetWorkMobile}
          />

          <Route
            path="/AddressSystemStoreMobile"
            component={AddressSystemStoreMobile}
          /> */}
          {/* <Route path="/Insurance" component={Insurance} /> */}
          {/*  */}
          <div className="d-flex justify-content-around pt-5">
            <ul className="text-center">
              <li>
                <a href="/CartScreen"> CartScreen </a>
              </li>

              <li>
                <a href="/InstallmentWeb">InstallmentWeb </a>
              </li>
              {/* <li>
                <Link to="/CompareProductWeb"> CompareProductWeb </Link>
              </li> */}
              <li>
                <a href="/HomeWeb"> HomeWeb </a>
              </li>

              {/* <li>
                <Link to="/detailProductWeb"> detailProductWeb </Link>
              </li> */}
              {/* <li>
                <Link to="/listProductWeb"> listProductWeb </Link>
              </li> */}
              {/* <li>
                <Link to="/CartWeb"> CartWeb </Link>
              </li>
              <li>
                <Link to="/OrderSuccessWeb"> OrderSuccessWeb </Link>
              </li>
              <li>
                <Link to="/CartEmptyWeb"> CartEmptyWeb </Link>
              </li>
              <li>
                <Link to="/AboutUsWeb"> AboutUsWeb </Link>
              </li>

              <li>
                <Link to="/SupportWeb"> SupportWeb </Link>
              </li>

              <li>
                <Link to="/NewsListWeb"> NewsListWeb </Link>
              </li>
              <li>
                <Link to="/NewsWeb"> NewsWeb </Link>
              </li>
              <li>
                <Link to="/NewsDetailWeb"> NewsDetailWeb </Link>
              </li> */}
            </ul>

            <ul className="text-center">
              <li>
                <a href="/CompareProductMobile"> CompareProductMobile </a>
              </li>
              <li>
                <a href="/InstallmentMobile">InstallmentMobile </a>
              </li>
              <li>
                <a href="/HomeMobile"> HomeMobile</a>
              </li>
              {/* <li>
                <a href="/DetailProductMobile"> DetailProductMobile</a>
              </li> */}
              {/* <li>
                <a href="/ListProductMobile"> ListProductMobile</a>
              </li>
              <li>
                <a href="/Insurance"> Insurance</a>
              </li> */}
              <li>
                <a href="/CartMobile"> CartMobile</a>
              </li>
              <li>
                <a href="/OrderSuccessMobile"> OrderSuccessMobile</a>
              </li>
              <li>
                <a href="/OrderMobile"> OrderMobile</a>
              </li>
              {/* <li>
                <Link to="/CartEmptyMobile"> CartEmptyMobile</Link>
              </li>{" "}
              <li>
                <Link to="/OrderMobile"> OrderMobile</Link>
              </li>
              <li>
                <Link to="/OrderVoucherMobile"> OrderVoucherMobile</Link>
              </li>
            
              <li>
                <Link to="/NewsMobile"> NewsMobile</Link>
              </li>
              <li>
                <Link to="/NewsListMobile"> NewsListMobile</Link>
              </li>
              <li>
                <Link to="/NewsDetailMobile"> NewsDetailMobile</Link>
              </li>
              <li>
                <Link to="/AccountMobile"> AccountMobile</Link>
              </li>
              <li>
                <Link to="/IntroduceMobile"> IntroduceMobile</Link>
              </li>
              <li>
                <Link to="/InfoContactMobile"> InfoContactMobile</Link>
              </li>
              <li>
                <Link to="/InfoPayMobile"> InfoPayMobile</Link>
              </li>
              <li>
                <Link to="/ContactSocialNetWorkMobile">
                  {" "}
                  ContactSocialNetWorkMobile
                </Link>
              </li>
              <li>
                <Link to="/AddressSystemStoreMobile">
                  {" "}
                  AddressSystemStoreMobile
                </Link>
              </li>  */}
            </ul>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
