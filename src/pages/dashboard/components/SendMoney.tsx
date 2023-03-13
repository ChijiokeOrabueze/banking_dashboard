import styled from "styled-components";
import { FlexApart, FlexRow } from "../../../styles";
import AmountInput from "./AmountInput";

const Container = styled.div`
    padding: 25px 0;

    .amount-input {
        height: 72.3px;
        width: 100%;
        background: #FFFFFF;
        box-shadow: 0px 10.9688px 21.9375px rgba(118, 118, 118, 0.2);
    }

`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 19px;
    flex-direction: column;

`

const Header = styled.h2`

    font-family: 'Gilroy-Medium';
    font-size: 16.0875px;
    line-height: 19px;
    color: #141736;
    margin-bottom: 10px;

`

const Balance = styled(FlexApart)`

    width: 100%;
    height: 48.26px;
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

const Recievers = styled(FlexApart)`

    .reciever {
        display: flex;
        align-items: center;
        gap: 11px;
    }

    p {
        font-family: 'Gilroy-SemiBold';
        font-size: 11.7px;
        line-height: 14px;
        color: #000000;
    }


`

const Button = styled.button`
    height: 43.88px;
    width: 100%;
    background-color: #0177FB;
    border-radius: 16.0875px;
    color: white;
    cursor: pointer;

`


const SendMoney = () => {
    return (
        <Container>
            <Header>Send Money</Header>
            <Wrapper>
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
                <AmountInput 
                    padding="6px 19px 15px 15px"
                    borderRadius="10.2375px"
                    image="countries"
                    icon="icon1"
                    title="Enter the amount"
                    bodyFontSize="21.2062px"
                    bodyLineHeight="25px"
                    bodyPColor="#A4B4CB"
                    bodyInputColor="#131635"
                    bodyGap="5px"
                    />
                <Recievers>
                    <div className="reciever">
                        <img src="/assets/dashboard/icon2.svg" alt="" />
                        <p>Frank Abiodun</p>
                    </div>
                    <img src="/assets/dashboard/plus.svg" alt="" />
                </Recievers>
                <Button>
                    Send Money
                </Button>
            </Wrapper>
        </Container>
    )


}

export default SendMoney;