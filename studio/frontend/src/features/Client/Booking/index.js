import NotFound from "components/Notfound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import DetailBookingPage from "./pages/DetailBookingPage";
import ListBookingPage from "./pages/ListBookingPage";

// import PropTypes from "prop-types";

BookingClient.propTypes = {};

function BookingClient(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={`${match.url}`} component={ListBookingPage} />
			<Route
				path={`${match.url}/:detailBookingId`}
				component={DetailBookingPage}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default BookingClient;
