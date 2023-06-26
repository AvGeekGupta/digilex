import { React } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./styles.scss";

function PricingPage() {
	return (
		<div className="pricing">
			<Container>
				<h1 className="text-center mt-5">Pricing</h1>
				<p className="text-center mb-5">
					Choose the subscription that belongs to your needs.
				</p>
				<Row className="mb-5">
					<Col lg={4}>
						<Card className="mb-5 mb-lg-0">
							<Card.Body>
								<Card.Title className="text-center">
									FREE
								</Card.Title>
								<h6 className="card-price text-center">
									₹0<span className="period">/month</span>
								</h6>
								<hr />
								<ul className="fa-ul">
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										<strong>Single User</strong>
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										100MB Storage
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Unlimited cases
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Unlimited document drafting
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										AI research assistant
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Calander integration
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Domain integration
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Priority support
									</li>
								</ul>
								<Button
									className="button w-100"
									variant="dark"
									size="lg"
									disabled>
									Already subscribed
								</Button>{" "}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4}>
						<Card className="mb-5 mb-lg-0">
							<Card.Body>
								<Card.Title className="text-center">
									PLUS
								</Card.Title>
								<h6 className="card-price text-center">
									₹199
									<span className="period">
										/month{" "}
										<small className="text-muted">
											(inc. GST)
										</small>
									</span>
								</h6>
								<hr />
								<ul className="fa-ul">
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										<strong>5 Users</strong>
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										1GB Storage
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Unlimited cases
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Unlimited document drafting
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										AI research assistant
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Calander integration
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Domain integration
									</li>
									<li className="text-muted">
										<span className="fa-li">
											<i className="fas fa-times"></i>
										</span>
										Priority support
									</li>
								</ul>
								<Button
									className="button w-100 mr-3"
									variant="success"
									size="lg">
									Upgrade to PLUS
								</Button>{" "}
							</Card.Body>
						</Card>
					</Col>
					<Col lg={4}>
						<Card className="mb-lg-0">
							<Card.Body>
								<Card.Title className="text-center">
									PRO
								</Card.Title>
								<h6 className="card-price text-center">
									₹3,499
									<span className="period">
										/month{" "}
										<small className="text-muted">
											(inc. GST)
										</small>
									</span>
								</h6>
								<hr />
								<ul className="fa-ul">
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										<strong>20 Users</strong>
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										5GB Storage
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Unlimited cases
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Unlimited document drafting
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										AI research assistant
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Calander integration
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Domain integration
									</li>
									<li>
										<span className="fa-li">
											<i className="fas fa-check"></i>
										</span>
										Priority support
									</li>
								</ul>
								<Button
									className="button w-100"
									variant="success"
									size="lg">
									Upgrade to PRO
								</Button>{" "}
							</Card.Body>
						</Card>
					</Col>
					<h2 className="mt-5">
						Can't find a suitable plan for your team? OR need more
						capacity than PRO plan?
					</h2>
					<hr />
					<p>
						We also provide custom plans tp large firms and
						enterprises. Write to us your requirementa through our{" "}
						<a href="/contact-us"> contact us</a> page{" "}
						<strong>OR</strong> Mail us your requirements at{" "}
						<a href="mailto:support@digilex.biz">
							support@digilex.biz
						</a>{" "}
						and our sales executive will contact you with a quote as
						soon as possible.
					</p>
				</Row>
			</Container>
		</div>
	);
}

export default PricingPage;
