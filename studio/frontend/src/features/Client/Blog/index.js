import NotFound from "components/Notfound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import DetailBlogPage from "./pages/DetailBlogPage";

function BlogClient(props) {
	const match = useRouteMatch();
	return (
		<Switch>
			<Route exact path={match.url} component={BlogPage} />

			<Route
				path={`${match.url}/:detailBlogId`}
				component={DetailBlogPage}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default BlogClient;
