import React, { Suspense, useEffect } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import "./App.scss";
import NotFound from "./components/Notfound";

import authLogin from "features/Auth";
import history from "history.js";
import "antd/dist/antd.css";
import { Spin } from "antd";

import { PrivateRoute } from "components/private-route/PrivateRoute.comp";

const WeedingClient = React.lazy(() => import("./features/Client"));
const WeedingAdmin = React.lazy(() => import("./features/Admin"));
const WeedingUser = React.lazy(() => import("./features/user"));

function App() {
	return (
		<div className="App">
			<Suspense
				fallback={
					<div className="loading">
						<Spin size="large" />
					</div>
				}
			>
				<Router history={history}>
					<Switch>
						<Redirect exact from="/" to="/home" />

						<PrivateRoute path="/admin">
							<WeedingAdmin />
						</PrivateRoute>

						<Route path="/home" component={WeedingClient} />
						<Route path="/login" component={authLogin} />

						<Route path="/user" component={WeedingUser} />

						<Route component={NotFound} />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
