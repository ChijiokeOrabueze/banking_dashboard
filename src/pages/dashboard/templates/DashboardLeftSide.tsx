import styled from "styled-components";
import Card from "../components/Card";
import SendMoney from "../components/SendMoney";

const Container = styled.div`
    width: 205.48px;


`


const DashboardLeftSide = () => {

    return (
        <Container>
            <Card />
            <SendMoney />
            
        </Container>
    )


}

export default DashboardLeftSide;