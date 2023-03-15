import styled from "styled-components";
import MoneyFlow from "./MoneyFlow";
import RecentContacts from "./RecentContacts";
import RecentTransactions from "./RecentTransactions";
import Statistics from "./Statistics";

const Container = styled.div`
    width: 100%;
    // border: 1px solid red;


`

const TopComponents = styled.div`
    display: flex;
    gap: 20px;

`


const DashboardRightSide = () => {

    return (
        <Container>
            <TopComponents>
                <MoneyFlow />
                <RecentContacts />
            </TopComponents>
            <RecentTransactions />
            <Statistics />
        </Container>
    )


}

export default DashboardRightSide;