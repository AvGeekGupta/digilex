import React from "react";
import NavbarComponent from "../../components/navbar";
import FooterComponent from "../../components/footer";

function MasterLayout({ children }) {
    return (
        <React.Fragment>
            <NavbarComponent />
            {children}
            <FooterComponent />
        </React.Fragment>
    );
}

export default MasterLayout;