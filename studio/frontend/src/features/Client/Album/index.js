import NotFound from "components/Notfound";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import MainPageAlbum from "./pages/ListAlbumPage.js";
import MainPageDetailAlbum from "./pages/DetailAlbumPage.js";

AlbumClient.propTypes = {};

function AlbumClient(props) {
	const match = useRouteMatch();
	// console.log(match);
	return (
		<Switch>
			<Route exact path={match.url} component={MainPageAlbum} />
			<Route
				path={`${match.url}/:albumId`}
				component={MainPageDetailAlbum}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default AlbumClient;
