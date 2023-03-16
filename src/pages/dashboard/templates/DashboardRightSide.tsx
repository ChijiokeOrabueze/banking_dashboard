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
    margin-bottom: 44px;

`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 21px;
    width: 100%;
    margin-bottom: 15px;
    padding-right: 12px;

    .profile {
        width: 26.49px;
        height: 24.13px;
    }

`


const DashboardRightSide = () => {

    return (
        <Container>
            <Header>
                <img src="/assets/dashboard/gray-search.svg" alt="" />
                <img src="/assets/dashboard/alert.svg" alt="" />
                <img src="/assets/dashboard/icon2.svg" alt="" className="profile" />
            </Header>
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