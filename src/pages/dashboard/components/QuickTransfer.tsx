import styled from "styled-components"
import { FlexApart, FlexRow } from "../../../styles";
import AmountInput from "./AmountInput";
import CtaButton from "./CtaButton";

const Container = styled.div`
    // width: 205.48px;
    height: 253.74px;
    padding: 15px 12px 27px 12px;
    background-color: #FFFFFF;
    border: 0.566969px solid #E8E8E8;
    border-radius: 10.2375px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    .header {
        font-family: 'Gilroy-SemiBold';
        font-size: 11.3394px;
        line-height: 13px;
        color: #141736;
    }

    .amount-input {
        border: 1.13394px solid #819CFD;
    }


`

const DebitAmount = styled(FlexApart)`

    .debit-p{
        font-family: 'Gilroy-SemiBold';
        font-size: 10.1278px;
        line-height: 12px;
        color: #798BA3;
    }



`

const CallToActionBox = styled.div`
    display: flex;
    justify-content: space-between;

`



const QuickTransfer = () => {


    return (
        <Container>
            <h2 className="header">Quick Transfer</h2>
            <DebitAmount>
                <FlexRow gap={5}>
                    <img src="/assets/dashboard/visa-icon.svg" alt="" />
                    <p className="debit-p">Debit</p>
                </FlexRow>
                <FlexRow gap={6
                }>
                    <p style={{
                        fontFamily: 'Gilroy-SemiBold',
                        fontSize: "11.7px",
                        lineHeight: "14px",
                        color: "#131635"
                    }}><span style={{color: "#A4B4CB"}}>$</span> 10.680</p>
                    <img src="/assets/dashboard/arrow-down.svg" alt="" />
                </FlexRow>
            </DebitAmount>
            <AmountInput 
                    padding="10px"
                    borderRadius="7.93757px"
                    image="icon3"
                    title="Enter amount"
                    />
            <CallToActionBox>
                {
                    ["Send", "Recieve", "Invoicing", "More"].map((s)=>(
                        <CtaButton title={s} btnImage={s.toLowerCase()}/>
                    ))
                }

            </CallToActionBox>

            

        </Container>
    )
}

export default QuickTransfer;