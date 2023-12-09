import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ListProductsPage from "./pages/ListProductsPage";
import HomeProducts from "./pages/ProductsPage";
import DetailProductPage from "./pages/DetailProductPage";
import NotFound from "components/Notfound";

ProductsPage.propTypes = {};

function ProductsPage(props) {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={match.url} component={HomeProducts} />
      <Route
        exact
        path={`${match.url}/listproducts/:menuSelected`}
        component={ListProductsPage}
      />
      <Route
        exact
        path={`${match.url}/listproducts/:menuSelected/:id`}
        component={DetailProductPage}
      />

      <Route component={NotFound} />
    </Switch>
  );
}

export default ProductsPage;
