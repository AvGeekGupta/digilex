import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const FAQPage = React.lazy(() => import("./pages/faq"));
const ErrorPage = React.lazy(() => import("./pages/404"));
const EULAPage = React.lazy(() => import("./pages/eula"));
const HomePage = React.lazy(() => import("./pages/home"));
const PricingPage = React.lazy(() => import("./pages/pricing"));
const AboutUsPage = React.lazy(() => import("./pages/about-us"));
const ServicesPage = React.lazy(() => import("./pages/services"));
const ContactUsPage = React.lazy(() => import("./pages/contact-us"));
const RefundPolicyPage = React.lazy(() => import("./pages/refund-policy"));
const PrivacyPolicyPage = React.lazy(() => import("./pages/privacy-policy"));
const TermsAndConditionsPage = React.lazy(() =>
	import("./pages/terms-and-conditions")
);

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route exact path="/about-us" element={<AboutUsPage />} />
				<Route exact path="/contact-us" element={<ContactUsPage />} />
				<Route exact path="/eula" element={<EULAPage />} />
				<Route exact path="/faq" element={<FAQPage />} />
				<Route exact path="/pricing" element={<PricingPage />} />
				<Route
					exact
					path="/privacy-policy"
					element={<PrivacyPolicyPage />}
				/>
				<Route
					exact
					path="/refund-policy"
					element={<RefundPolicyPage />}
				/>
				<Route exact path="/services" element={<ServicesPage />} />
				<Route
					exact
					path="/terms-and-conditions"
					element={<TermsAndConditionsPage />}
				/>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
