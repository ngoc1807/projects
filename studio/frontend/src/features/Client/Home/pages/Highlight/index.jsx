import React, { useState, useEffect } from "react";
import "./Highlight.scss";

import { Image, Spin } from "antd";
import albumApi from "api/albumApi";
import { IMAGE_DEFAULT } from "utils/image";

function ClientHighlight(props) {
	const [state, setState] = useState();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		getData();
	}, []);
	const getData = async () => {
		setLoading(true);
		const a = await albumApi.getImageRandom();
		if (a.status === "success") {
			setState(a.data);
			setLoading(false);
		}
	};

	// console.log(state);
	return (
		<div>
			<div className="container-fluid" id="HighlightConfig">
				<div className="row">
					<div className="title col-sm-12">
						<p>Giới thiệu </p>
						<h3>ẢNH NỔI BẬT</h3>
					</div>
				</div>
				<div className="row body ">
					{loading ? (
						<div className="spin  d-flex w-100  justify-content-center align-items-center  ">
							<Spin className="mt-5" />
						</div>
					) : (
						state &&
						state.length > 0 &&
						state.map((i, k) => (
							<div key={k} className="imgBox col-md-3 col-sm-6">
								<div>
									{i.image ? (
										<Image src={i.image} alt="dfg" />
									) : (
										IMAGE_DEFAULT
									)}

									<div className="linkBox"></div>
								</div>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
}

export default ClientHighlight;
