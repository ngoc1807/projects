import React from "react";

import "./Footer.scss";

function ClientFooter(props) {
	return (
		<div className="configFooter container-fluid">
			<div className="Box container">
				<div className="row">
					<div className="BoxAddress col-12">
						<div className="Address">
							<div className="icon">
								<i className="fas fa-home"></i>
							</div>

							<div className="content">
								<h3>Address</h3>
								<p>The company name New York City.</p>
							</div>
						</div>

						<div className="Email">
							<div className="icon">
								<i className="far fa-envelope"></i>
							</div>

							<div className="content">
								<h3>Email</h3>
								<p>
									mail@example.com
									<br />
									mail2@example.com
								</p>
							</div>
						</div>

						<div className="PhoneNumber">
							<div className="icon">
								<i className="fas fa-phone"></i>
							</div>

							<div className="content">
								<h3>Phone</h3>
								<p>
									+ 1234567890
									<br />+ 0987654321
								</p>
							</div>
						</div>
					</div>

					<div className="BoxContact col-12">
						<div className="Title">
							<i className="fas fa-camera"></i>
							<span>HYA</span>
						</div>

						<div className="Contact">
							<i className="fab fa-facebook-f"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-dribbble"></i>
							<i className="fab fa-google"></i>
						</div>
					</div>
				</div>
			</div>

			<div className="AuthorDev">
				© 2019 Hya. All Rights Reserved | Design by Ngọc
			</div>
		</div>
	);
}

export default ClientFooter;
