import React from "react";



import { GlobalStyles } from "../components/GlobalStyles";
import { Wrapper } from "../components/Wrapper";


class Dashboard extends React.Component {
    render() {
        return (
            <Wrapper>
                <GlobalStyles />
            </Wrapper>
        );
    }
}

export { Dashboard };
export default Dashboard;