import React from "react";
import { BrowserRouter } from "react-router-dom";

import { GlobalStyles } from "../components/GlobalStyles";


class Dashboard extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <GlobalStyles />
                <p>ssssss</p>
            </BrowserRouter>
        );
    }
}

export { Dashboard };
export default Dashboard;