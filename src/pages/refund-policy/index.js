import { React } from "react";
import LetterLayout from "../../layouts/letter";

function RefundPolicyPage() {
	return (
		<LetterLayout>
			<h1>Refund Policy</h1>
			<p>
				We at Digilex strive to provide you with the best possible
				service. However, if you are not satisfied with your purchase,
				we offer a refund for services within 7 days of the original
				purchase date.
			</p>
			<p>
				To request a refund, please contact us at{" "}
				<a href="mailto:support@digilex.biz">support@digilex.biz</a>{" "}
				with your order details and reason for the refund. Our team will
				review your request and process the refund if it meets the
				following conditions:
			</p>
			<ul>
				<li>
					The refund request is made within 7 days of the original
					purchase date.
				</li>
				<li>The service has not been fully utilized or completed.</li>
				<li>
					The reason for the refund request is valid and reasonable.
				</li>
			</ul>
			<p>
				If your refund request is approved, we will process the refund
				within 5-7 business days. The refund will be issued in the same
				form of payment that was used for the original purchase.
			</p>
			<p>
				Please note that after 7 days from the original purchase date,
				no refunds will be provided. Also, any services that have been
				fully utilized or completed are not eligible for a refund.
			</p>
			<p>
				If you have any questions or concerns about our refund policy,
				please contact us at{" "}
				<a href="mailto:support@digilex.biz">support@digilex.biz</a>.
			</p>
		</LetterLayout>
	);
}

export default RefundPolicyPage;
