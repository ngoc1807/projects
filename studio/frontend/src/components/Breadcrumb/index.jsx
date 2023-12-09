import React, { useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router";
import "./Breadcrumb.scss";

function ClientBreadcrumb(props) {
	const match = useRouteMatch();

	const [state, setState] = useState([]);

	useEffect(() => {
		handleLink();
	}, []);
	const handleLink = () => {
		let d = match.url.split("/");
		const e = d.filter((x) => x !== "");

		setState(e);
	};
	return (
		<div className="configBreadcrumb">
			<div className="container-fluid">
				<ol className="breadcrumb">
					{state.map((item, k) => (
						<li key={k} className="breadcrumb-item">
							<a href="/">{item}</a>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default ClientBreadcrumb;
