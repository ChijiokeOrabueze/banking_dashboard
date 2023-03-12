import styled from "styled-components";
import { FlexApart, FlexRow } from "../../../styles";

const Container = styled.div`
    padding: 25px 0;

`

const Header = styled.h2`

    font-family: 'Gilroy-Medium';
    font-size: 16.0875px;
    line-height: 19px;
    color: #141736;
    margin-bottom: 10px;

`

const Balance = styled(FlexApart)`

    // width: 204.59px;
    // height: 48.26px;
    background-color: #FFFFFF;
    box-shadow: 0px 10.9688px 21.9375px rgba(122, 122, 122, 0.2);
    border-radius: 10.2375px;
    padding: 17px 18px;

`

const BalanceP = styled.p`

    font-family: 'Gilroy-SemiBold';
    font-size: 8.775px;
    line-height: 10px;
    color: #141736;

`;


const SendMoney = () => {
    return (
        <Container>
            <Header>Send Money</Header>
            <Balance>
                <FlexRow gap={11}>
                    <img src="/assets/dashboard/debit.svg" alt="" />
                    <BalanceP>Debit</BalanceP>
                </FlexRow>
                <FlexRow gap={20}>
                    <p style={{
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: "11.7px",
                        lineHeight: "14px",
                        color: "#131635"
                    }}><span style={{color: "#A4B4CB"}}>$</span> 10.680</p>
                    <img src="/assets/dashboard/arrow-down.svg" alt="" />
                </FlexRow>
            </Balance>

        </Container>
    )


}

export default SendMoney;