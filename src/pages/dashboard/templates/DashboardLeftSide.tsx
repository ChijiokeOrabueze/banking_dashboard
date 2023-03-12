import styled from "styled-components";
import Card from "../components/Card";
import SendMoney from "../components/SendMoney";

const Container = styled.div`


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