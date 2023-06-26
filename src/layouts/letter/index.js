import React from "react";
import "./styles.scss";

function LetterLayout({ children }) {
	return (
		<React.Fragment>
			<div className="hidden-overflow">
				<div className="letter">{children}</div>
			</div>
		</React.Fragment>
	);
}

export default LetterLayout;
