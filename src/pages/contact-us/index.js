import { React } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import "./styles.scss";

function ContactUsPage() {
	const SendMessage = () => {
		toast.success(
			"Message sent successfully! Our team will contact you soon.",
			{
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			}
		);
	};

	return (
		<div className="contact-us">
			<Container>
				<h1 className="text-center mt-5">Contact Us</h1>
				<p className="text-center mb-5">
					Do you have any questions? Please do not hesitate to contact
					us directly. Our team will come back to you within a matter
					of hours to help you.
				</p>
				<Form>
					<Row>
						<Col md={6} className="px-3">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								className="input mb-3"
								type="text"
								placeholder="Enter your first name"
							/>
						</Col>
						<Col md={6} className="px-3">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								className="input mb-3"
								type="text"
								placeholder="Enter your last name"
							/>
						</Col>
						<Col md={6} className="px-3">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control
								className="input mb-3"
								type="number"
								placeholder="Enter your phone number"
							/>
						</Col>
						<Col md={6} className="px-3">
							<Form.Label>Email</Form.Label>
							<Form.Control
								className="input mb-3"
								type="email"
								placeholder="Enter your email"
							/>
						</Col>
						<Col xs={12} className="px-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								className="input mb-3"
								type="title"
								placeholder="Enter your concern"
							/>
						</Col>
						<Col xs={12} className="px-3">
							<Form.Label>Message</Form.Label>
							<Form.Control
								className="input mb-3"
								as="textarea"
								rows={5}
								placeholder="Explain your concern in details"
							/>
						</Col>
					</Row>
					<Button
						className="button mt-3 mb-5"
						variant="success"
						onClick={SendMessage}>
						Send Message
					</Button>
				</Form>
			</Container>
		</div>
	);
}

export default ContactUsPage;
