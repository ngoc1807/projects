import NotFound from "components/Notfound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AlbumClient from "./Album";
import BlogClient from "./Blog";
import BookingClient from "./Booking";
import HomeClient from "./Home";
import ProductClient from "./Product";

function WeedingClient(props) {
	const match = useRouteMatch();
	// console.log({ match });

	return (
		<Switch>
			<Route exact path={match.url} component={HomeClient} />
			<Route path={`${match.url}/album`} component={AlbumClient} />
			<Route path={`${match.url}/blog`} component={BlogClient} />
			<Route path={`${match.url}/booking`} component={BookingClient} />
			<Route path={`${match.url}/products`} component={ProductClient} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default WeedingClient;
