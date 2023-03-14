

import styled from "styled-components";
import { FlexRow } from "../../../styles";
import StatusBar, { Status } from "./StatusBar";


const Container = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;

    .transaction-row {
        font-family: 'Gilroy-SemiBold';
        font-size: 10.2375px;
        line-height: 12px;

        color: #000000;
    }


`

const TransactionDescription = styled.p`
    font-family: 'Gilroy-SemiBold';
    font-size: 10.2375px;
    line-height: 12px;

    color: #343744;

`

export type TransactionType = "transfer" | "deposit";

interface TransactionProps {
    image: string;
    description: string;
    date: string;
    cardNumber: string;
    type: TransactionType;
    status: Status;
    amount: string;
}

interface TransactionHeadProps {
    image: string;
    description: string;
}

const TransactionHead = ({image, description}:TransactionHeadProps) => {

    return (
        <FlexRow gap={12} style={{width: "127px"}}>
            <img src={image} alt="" />
            <TransactionDescription>{description}</TransactionDescription>
        </FlexRow>

    )
}

const Transaction = ({image, description, date, cardNumber, type, amount, status}:TransactionProps) => {

    const transactionPolarity = type === "deposit" ? "+" : "-";
    const encodeCardNumber = () => `*****${cardNumber.slice(-4)}`;
    return (
        <Container>
            <TransactionHead image={image} description={description}/>
            <p className="transaction-row">{date}</p>
            <p className="transaction-row">{encodeCardNumber()}</p>
            <p className="transaction-row">{`${transactionPolarity}$${amount}`}</p>
            <StatusBar status={status}/>
        </Container>
    )



}





export default Transaction;