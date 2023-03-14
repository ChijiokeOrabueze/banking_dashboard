import styled from "styled-components";
import Card from "../components/Card";
import QuickTransfer from "../components/QuickTransfer";
import SendMoney from "../components/SendMoney";

const Container = styled.div`
    width: 205.48px;


`


const DashboardLeftSide = () => {

    return (
        <Container>
            <Card name="Musa Adamu"
            cardNumber="1200 01452 54215"
            cardExpiry="08/23"/>
            <SendMoney />
            <QuickTransfer />
        </Container>
    )


}

export default DashboardLeftSide;