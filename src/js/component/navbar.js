import React from "react";

export function Nav() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<a className="navbar-brand" href="#">
						Navbar
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link disabled" href="#">
									Disabled
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
