import React from "react";



import { GlobalStyles } from "../components/GlobalStyles";
import { Wrapper } from "../components/Wrapper";

import { GridLayout } from "../components/GridLayout";

class Dashboard extends React.Component {
    render() {
        return (
            <>
                <GlobalStyles />
                <GridLayout />
            </>

        );
    }
}

export { Dashboard };
export default Dashboard;