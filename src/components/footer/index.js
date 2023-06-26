import { React } from "react";
import "./styles.scss";
import { Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";

function FooterComponent() {
	function subscribe() {
		console.log("subscribed");
		toast.success("Subscribed successfully!!!", {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	}

	return (
		<footer>
			<Row className="px-1 px-md-2 px-lg-4 px-xl-5">
				<Col md={6} className="text-left mt-3 right-line">
					<h3 className="text-center d-flex justify-content-center d-md-inline justify-content-md-start mr-0">
						KNOW IT ALL FIRST!
					</h3>
					<p className="d-none d-md-block mb-0">
						<small>
							Never Miss Anything From Digilex By Signing Up To
							Our Newsletter.
						</small>
					</p>
				</Col>
				<Col
					md={6}
					className="text-left mt-3 d-flex align-items-center justify-content-center">
					<Form>
						<Row className="d-flex justify-content-center align-items-center">
							<Col xs="auto">
								<Form.Control
									className="my-1 input"
									id="inlineFormInput"
									placeholder="Enter your email"
								/>
							</Col>
							<Col xs="auto">
								<Button
									variant="success"
									className="my-1 w-100 button"
									onClick={subscribe}>
									Subscribe
								</Button>
							</Col>
						</Row>
					</Form>
				</Col>
			</Row>

			<hr />

			<div className="social">
				<ul>
					<li>
						<a href="https://facebook.com/" target="blank">
							<i className="fa-brands fa-facebook-square facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="https://instagram.com/" target="blank">
							<i className="fa-brands fa-instagram instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://linkedin.com/" target="blank">
							<i className="fa-brands fa-linkedin linkedin"></i>
						</a>
					</li>
					<li>
						<a href="https://whatsapp.com/" target="blank">
							<i className="fa-brands fa-whatsapp whatsapp"></i>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/" target="blank">
							<i className="fa-brands fa-twitter twitter"></i>
						</a>
					</li>
				</ul>
			</div>

			<hr />

			<Row className="links px-1 px-md-2 px-lg-4 px-xl-5">
				<Col md={12} lg={5} xl={4} className="text-left">
					<img
						src={process.env.PUBLIC_URL + "images/logo.png"}
						className="img-fluid"
						alt="logo"
					/>
					<p>
						<small>
							<strong className="text-success">Digilex</strong>{" "}
							streamlines your legal document drafting process
							with AI-powered document generation and task
							tracking tools. Stay organized and improve
							productivity while reducing errors with{" "}
							<strong className="text-success">Digilex</strong> -
							the expert solution for legal professionals.
						</small>
					</p>
				</Col>
				<Col lg={1} className="d-none d-xl-block"></Col>
				<Col xs={6} sm={3} md={4} lg={2} className="text-left">
					<h5>QUICK LINKS</h5>
					<ul>
						<li>
							<a href="/">
								<small>Home</small>
							</a>
						</li>
						<li>
							<a href="/services">
								<small>Services</small>
							</a>
						</li>
						<li>
							<a href="pricing">
								<small>Pricing</small>
							</a>
						</li>
						<li>
							<a href="about-us">
								<small>About Us</small>
							</a>
						</li>
						<li>
							<a href="contact-us">
								<small>Contact Us</small>
							</a>
						</li>
					</ul>
				</Col>
				<Col xs={6} sm={3} md={4} lg={2} className="text-left">
					<h5>Other Links</h5>
					<ul>
						<li>
							<a href="/faq">
								<small>FAQ</small>
							</a>
						</li>
						<li>
							<a href="/privacy-policy">
								<small>Privacy Policy</small>
							</a>
						</li>
						<li>
							<a href="/refund-policy">
								<small>Refund policy</small>
							</a>
						</li>
						<li>
							<a href="/terms-and-conditions">
								<small>Terms & Conditions</small>
							</a>
						</li>
						<li>
							<a href="/eula">
								<small>EULA</small>
							</a>
						</li>
					</ul>
				</Col>
				<Col
					xs={12}
					sm={6}
					md={4}
					lg={3}
					className="text-left d-flex justify-content-center justify-content-md-start">
					<div>
						<h5>Contact Us</h5>
						<ul>
							<li>
								<small>Call Us at: </small>
								<a href="tel:+91-8400966796">+91 84009 66796</a>
							</li>
							<li>
								<small>
									Mail Us{" "}
									<div className="d-none d-xl-inline-block">
										{" "}
										at
									</div>
									:{" "}
								</small>
								<a href="mailto:support@digilex.biz">
									support@digilex.biz
								</a>
							</li>
							<li className="mr-3">
								<small>Send us a </small>
								<a href="/contact-us">Message</a>
							</li>
						</ul>
					</div>
				</Col>
			</Row>

			<hr />

			<div className="copyright text-center">
				© Digilex 2023-24. All Rights Reserved.
			</div>
			<hr className="mb-0" />
		</footer>
	);
}

export default FooterComponent;
