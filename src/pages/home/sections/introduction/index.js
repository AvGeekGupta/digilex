import React from "react";
import "./styles.scss";
import { Row, Button } from "react-bootstrap";

function IntroductionSection() {
	return (
		<React.Fragment>
			<div className="introduction-section">
				<Row>
					<img
						src={process.env.PUBLIC_URL + "/images/logo.png"}
						alt="logo"
					/>
					<p>
						Welcome to{" "}
						<strong className="text-success">DIGILEX</strong>, the
						expert solution for legal professionals. Our web app is
						designed to streamline the document drafting process and
						help lawyers manage their workload more efficiently,
						providing an expert system that automates document
						generation, ensures compliance with necessary formats
						and requirements, and offers task tracking and work
						management tools.
					</p>
					<p>
						With <strong className="text-success">DIGILEX</strong>,
						legal professionals can save time and reduce potential
						errors, allowing them to focus on what they do best:
						practicing law and serving their clients. Our solution
						is designed to enhance the work of legal professionals,
						not replace it, and we believe that AI technology should
						not replace human expertise and judgment in the legal
						industry. Instead, we have created a solution that helps
						legal professionals be more efficient and effective in
						their work.
					</p>
					<p>
						At <strong className="text-success">DIGILEX</strong>, we
						are committed to staying up-to-date with the latest
						trends and technologies in the legal industry. Our team
						is comprised of experienced legal professionals and
						software engineers who have a deep understanding of the
						challenges that legal professionals face. We're proud to
						offer a solution that can improve the efficiency and
						productivity of legal professionals, and we look forward
						to helping you streamline your document drafting process
						and manage your workload more efficiently.
					</p>
					<p>
						<Button
							href="/pricing"
							variant="success"
							className="button mb-2">
							Try DIGILEX today
						</Button>{" "}
						&nbsp; and experience the benefits of our expert
						solution for legal professionals.
					</p>
				</Row>
			</div>
		</React.Fragment>
	);
}

export default IntroductionSection;
