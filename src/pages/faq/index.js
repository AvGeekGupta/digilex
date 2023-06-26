import { React } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

function FAQPage() {
	return (
		<Container>
			<h1 className="text-center mt-5">FAQ</h1>
			<p className="text-center mb-5">
				Find the answers for the most frequently asked questions below
			</p>
			<Row>
				<Col lg={4}>
					<Card>
						<Card.Body>
							<Card.Title>
								What is DIGILEX and how does it work?
							</Card.Title>
							<hr />
							<Card.Text>
								DIGILEX is a web-based solution that helps legal
								professionals streamline their document drafting
								process and manage their workload efficiently.
								It provides an expert system that automates
								document generation, ensuring compliance with
								the necessary format and requirements of the
								case. DIGILEX also offers task tracking and work
								management tools to help lawyers stay organized
								and productive.
							</Card.Text>
							<Card.Link href="/services">Services</Card.Link>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>Is DIGILEX easy to use?</Card.Title>
							<hr />
							<Card.Text>
								Yes, DIGILEX is designed to be user-friendly and
								easy to use, even for those who may not have a
								lot of experience with legal software. The
								interface is intuitive, and the system guides
								users through the document generation process
								step-by-step.
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>
								What payment methods do you accept for DIGILEX
								subscriptions?
							</Card.Title>
							<hr />
							<Card.Text>
								DIGILEX accepts all major credit cards, Debit
								cards and UPI for subscription payments.
							</Card.Text>
							<Card.Link href="/pricing">Pricing</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4}>
					<Card>
						<Card.Body>
							<Card.Title>
								Who can benefit from using DIGILEX?
							</Card.Title>
							<hr />
							<Card.Text>
								Legal professionals, such as lawyers,
								paralegals, and law firms, can benefit from
								using DIGILEX to automate their document
								drafting process and manage their workload
								efficiently. DIGILEX is especially helpful for
								those who handle a large volume of cases and
								documents.
							</Card.Text>
							<Card.Link href="/services">Services</Card.Link>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>
								How secure is DIGILEX and what measures do you
								take to protect user data?
							</Card.Title>
							<hr />
							<Card.Text>
								DIGILEX takes the security of user data very
								seriously. All data is stored securely using
								encryption technology, and the system is
								designed to comply with data privacy laws and
								regulations. DIGILEX also uses best practices
								for authentication, access control, and
								monitoring to ensure the security of user data.
							</Card.Text>
							<Card.Link href="/privacy-policy">
								Privacy Policy
							</Card.Link>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>
								How do I get support if I have a question or
								issue with DIGILEX?
							</Card.Title>
							<hr />
							<Card.Text>
								Users can get support through the DIGILEX
								website or by email. The website also includes a
								contact us section to reach out to us and FAQs.
							</Card.Text>
							<Card.Link href="/contact-us">Contact Us</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col lg={4}>
					<Card>
						<Card.Body>
							<Card.Title>
								What types of legal documents can be generated
								using DIGILEX?
							</Card.Title>
							<hr />
							<Card.Text>
								DIGILEX can generate a wide variety of legal
								documents, including contracts, agreements,
								court forms, and other legal documents that are
								necessary for the case.
							</Card.Text>
							<Card.Link href="/services">Services</Card.Link>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>
								Can I try DIGILEX before purchasing a
								subscription?
							</Card.Title>
							<hr />
							<Card.Text>
								Yes, DIGILEX offers a free trial so users can
								try out the system before committing to a
								subscription.
							</Card.Text>
							<Card.Link href="/pricing">Pricing</Card.Link>
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<Card.Title>
								How does DIGILEX compare to other legal software
								on the market?
							</Card.Title>
							<hr />
							<Card.Text>
								DIGILEX offers a unique combination of document
								generation and task management tools, which sets
								it apart from other legal software on the
								market. DIGILEX is also designed to be
								user-friendly and easy to use, even for those
								who may not have a lot of experience with legal
								software.
							</Card.Text>
							<Card.Link href="/services">Services</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<h2 className="mt-5">Still have a question?</h2>
				<hr />
				<p className="mb-5">
					Write to us through our{" "}
					<a href="/contact-us"> contact us</a> page{" "}
					<strong>OR</strong> Mail us your concerns and questions at{" "}
					<a href="mailto:support@digilex.biz">support@digilex.biz</a>{" "}
					and we will get back to you as soon as possible.
				</p>
			</Row>
		</Container>
	);
}

export default FAQPage;
