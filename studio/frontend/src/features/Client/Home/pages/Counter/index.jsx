import React from "react";
import "./Counter.scss";
import dashboardApi from "api/dashboardApi";

function ClientCounter(props) {
	const [state, setState] = React.useState([]);
	React.useEffect(() => {
		const fetchTotalDashboard = async () => {
			const res = await dashboardApi.countTotal();

			if (res.status === "success") {
				setState(res.data);
			}
		};

		fetchTotalDashboard();
	}, []);

	return (
		<div className="ConfigCounter container-fluid">
			<div className="container">
				<div className="body row">
					<div className="content col-md-3 col-sm-6 ">
						<h3>{state ? state.image : 0} </h3>
						<p>Ảnh</p>
					</div>
					<div className="content col-md-3 col-sm-6 ">
						<h3>{state ? state.album : 0}</h3>
						<p>Album</p>
					</div>
					<div className="content col-md-3 col-sm-6 ">
						<h3>{state ? state.blog : 0}</h3>
						<p>Bài viết</p>
					</div>
					<div className="content col-md-3 col-sm-6 ">
						<h3>{state ? state.tour : 0}</h3>
						<p>Gói chụp</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ClientCounter;
