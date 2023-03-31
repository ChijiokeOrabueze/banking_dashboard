import { useState } from "react";
import styled from "styled-components";
import { FlexApart, FlexRow } from "../../../styles";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const Header = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    p {
        font-family: 'Gilroy-SemiBold';
        font-size: 10.296px;
        line-height: 12px;
        color: #A8B1BF;
    }


`

const Body = styled(FlexApart)`

`

const InputContainer = styled.div`
    font-family: 'Gilroy-SemiBold';
    display: flex;
    align-items: center;
    gap: 2px;
    width: 70%;



`

const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;


`

interface AmountInputProps {
    padding: string;
    borderRadius: string;
    image: string;
    icon?: string;
    title: string;
    bodyFontSize?: string;
    bodyLineHeight?: string;
    bodyPColor?: string;
    bodyInputColor?: string;
    bodyGap?: string;
}

const AmountInput = ({padding, bodyGap, borderRadius, icon, title, bodyFontSize, bodyLineHeight, bodyPColor, bodyInputColor, image}:AmountInputProps) => {
    const [amount, setAmount] = useState("");
    return (
        <Container className="amount-input" style={{padding, borderRadius}}>
            <Header>
                <img style={{display: icon ? "initial": "none"}} src={`/assets/dashboard/${icon}.svg`} alt="" />
                <p>{title}</p>
            </Header>
            <Body>
                <InputContainer style={{
                    lineHeight: bodyLineHeight || "17px",
                    fontSize: bodyFontSize || "14.7412px",
                    gap: bodyGap || "2px",
                }}>
                    <p style={{color: bodyPColor || "#3D424B"}}>$</p>
                    <Input placeholder="20.32" style={{ overflowX: "hidden", color: bodyInputColor || "#3D424B", fontSize: bodyFontSize || "14.7412px", }} value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                </InputContainer>
                <img src={`/assets/dashboard/${image}.svg`} alt="" />
            </Body>
        </Container>
    )




}


export default AmountInput;