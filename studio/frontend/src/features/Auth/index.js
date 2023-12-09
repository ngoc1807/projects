import React from "react";
import NotFound from "components/Notfound";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import ForgotPassword from "./ForgotPassword/index";

Auth.propTypes = {};

function Auth(props) {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route exact path={`${match.url}/signIn`} component={SignIn} />
			<Route exact path={`${match.url}/signUp`} component={SignUp} />
			<Route
				exact
				path={`${match.url}/forgotPassword`}
				component={ForgotPassword}
			/>
			<Route component={NotFound} />
		</Switch>
	);
}

export default Auth;
