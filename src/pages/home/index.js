import React from "react";
import HeroSection from "./sections/hero";
import FeatureSection from "./sections/feature";
import IntroductionSection from "./sections/introduction";

import "./styles.scss";

function HomePage() {
	return (
		<React.Fragment>
			<HeroSection />
			<IntroductionSection />
			<FeatureSection />
		</React.Fragment>
	);
}

export default HomePage;
