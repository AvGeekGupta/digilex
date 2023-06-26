import React from "react";
import "./styles.scss";
import { Col, Row, Container } from "react-bootstrap";

function FeatureSection() {
	return (
		<React.Fragment>
			<div className="feature-section d-flex align-items-center justify-content-center">
				<div>
					<h1 className="text-center mt-5">Our Best Features</h1>
					<p className="text-center mb-5">
						Experience the power of{" "}
						<strong className="text-success">DIGILEX</strong>'s
						expert features designed specifically for legal
						professionals.
					</p>
					<Container>
						<Row className="mb-5 mb-lg-0">
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-robot"></i>
								<h3>Effortless drafting</h3>
								<p>
									AI-powered document automation to streamline
									the drafting process and reduce errors
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-list-check"></i>
								<h3>Strict compliance</h3>
								<p>
									Compliance with necessary formats and
									requirements for legal documents
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-calendar-week"></i>
								<h3>Efficient organization</h3>
								<p>
									Task tracking and work management tools to
									help lawyers stay organized and productive
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-cloud-arrow-up"></i>
								<h3>Cloud Storage</h3>
								<p>
									Cloud-based storage for easy access to
									documents from anywhere
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-people"></i>
								<h3>Seamless teamwork</h3>
								<p>
									Collaboration tools to facilitate teamwork
									and communication between legal
									professionals
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-window-sidebar"></i>
								<h3>Intuitive design</h3>
								<p>
									User-friendly interface designed with legal
									professionals in mind
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-shield-lock-fill"></i>
								<h3>Enhanced security</h3>
								<p>
									Secure data encryption and access controls
									to protect sensitive information
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-download"></i>
								<h3>Streamlined integration</h3>
								<p>
									Integration with popular legal practice
									management software
								</p>
							</Col>
							<Col md={6} lg={4} className="text-center">
								<i class="bi bi-robot"></i>
								<h3>Continuous innovation</h3>
								<p>
									Regular updates and improvements to stay
									up-to-date with the latest trends and
									technologies in the legal industry.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		</React.Fragment>
	);
}

export default FeatureSection;
