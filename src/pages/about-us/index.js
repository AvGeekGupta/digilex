import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutUsPage() {
	return (
		<React.Fragment>
			<Container className="mb-5 text-center">
				<h1 className="text-center mt-5">About Us</h1>
				<Row className="d-flex align-items-center justify-content-center mt-5">
					<Col md={4}>
						<img
							src={process.env.PUBLIC_URL + "/images/team.png"}
							className="img-fluid"
							alt="team"
						/>
					</Col>
					<Col md={8}>
						<p className="text-md-start pt-3 pt-md-0">
							At <strong className="text-success">DIGILEX</strong>
							, we believe that legal professionals should be able
							to focus on what they do best: practicing law. We
							understand that managing a heavy workload and
							drafting numerous legal documents can be
							time-consuming and stressful. That's why we created{" "}
							<strong className="text-success">DIGILEX</strong> –
							an expert solution for legal professionals that
							streamlines the document drafting process and helps
							lawyers manage their workload more efficiently.
						</p>
					</Col>
				</Row>
				<hr className="my-0" />
				<Row className="d-flex align-items-center justify-content-center mt-3 mb-3">
					<Col md={4} className="d-block d-md-none">
						<img
							src={process.env.PUBLIC_URL + "/images/app.png"}
							className="img-fluid"
							alt="team"
						/>
					</Col>
					<Col md={8}>
						<p className="text-md-end pt-3 pt-md-0">
							Our team is comprised of experienced legal
							professionals and software engineers who have a deep
							understanding of the legal industry and the
							challenges that legal professionals face. With our
							expertise and knowledge, we have created an expert
							system that automates document generation, ensuring
							compliance with the necessary format and
							requirements of the case.{" "}
							<strong className="text-success">DIGILEX</strong>{" "}
							also offers task tracking and work management tools
							to help lawyers stay organized and productive.
						</p>
					</Col>
					<Col md={4} className="d-none d-md-block">
						<img
							src={process.env.PUBLIC_URL + "/images/app.png"}
							className="img-fluid"
							alt="team"
						/>
					</Col>
				</Row>
				<hr className="my-0" />
				<Row className="d-flex align-items-center justify-content-center mt-3 mb-3">
					<Col md={4}>
						<img
							src={
								process.env.PUBLIC_URL +
								"/images/lawyer-desk.jpg"
							}
							className="img-fluid"
							alt="team"
						/>
					</Col>
					<Col md={8}>
						<p className="text-md-start pt-3 pt-md-0">
							We understand that the legal industry is constantly
							evolving, and that's why we're committed to staying
							up-to-date with the latest trends and technologies.
							We believe that technology can help legal
							professionals be more efficient and effective in
							their work, but we also know that AI technology
							should not replace human expertise and judgment in
							the legal industry. That's why we designed{" "}
							<strong className="text-success">DIGILEX</strong>
							to enhance the work of legal professionals, not
							replace it.
						</p>
					</Col>
				</Row>
				<hr className="my-0" />
				<Row className="d-flex align-items-center justify-content-center mt-3 mb-3">
					<Col md={4} className="d-block d-md-none">
						<img
							src={
								process.env.PUBLIC_URL +
								"/images/lawyer-client.png"
							}
							className="img-fluid"
							alt="team"
						/>
					</Col>
					<Col md={8}>
						<p className="text-md-end pt-3 pt-md-0">
							We're proud to offer a solution that can improve the
							efficiency and productivity of legal professionals.
							Our goal is to help lawyers focus on what they do
							best: serving their clients and practicing law.
							Thank you for considering{" "}
							<strong className="text-success">DIGILEX</strong> as
							a solution for your legal document generation and
							workload management needs.
						</p>
					</Col>
					<Col md={4} className="d-none d-md-block">
						<img
							src={
								process.env.PUBLIC_URL +
								"/images/lawyer-client.png"
							}
							className="img-fluid"
							alt="team"
						/>
					</Col>
				</Row>
			</Container>
		</React.Fragment>
	);
}

export default AboutUsPage;
