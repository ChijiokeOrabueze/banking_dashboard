import styled from "styled-components";
import RecentTransactions from "./RecentTransactions";
import Statistics from "./Statistics";

const Container = styled.div`
    width: 100%;
    // border: 1px solid red;


`


const DashboardRightSide = () => {

    return (
        <Container>
            <RecentTransactions />
            <Statistics />
            
        </Container>
    )


}

export default DashboardRightSide;