import styled from "styled-components";
import Stats from "../components/Stats";
import Transaction from "../components/Transaction";
import { statsData, transactionData } from "../dashboard.data";


const Container = styled.div`
    width: 590.12px;
    // height: 174.04px;
    // background-color: #FFFFFF;
    // box-shadow: 0px 14.625px 80.4375px -21.9375px rgba(43, 37, 37, 0.12);
    // border-radius: 10.2375px;
    padding: 20px 10px;
    display: flex;
    flex-direction: column;
    gap: 21px;


`


const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 27px;

    .title {
        font-family: 'Gilroy-SemiBold';
        font-size: 14.625px;
        line-height: 17px;
        color: #000000;

    }
    .view-all {
        font-family: 'Gilroy-SemiBold';
        font-size: 10.2375px;
        line-height: 12px;
        color: #5E636A;
    }

`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;

`


const RecentTransactions = () => {

    return (
        <Container>
            <Header>
                <h2 className="title">Recent Transactions</h2>
                <p className="view-all">{"View all >"}</p>
            </Header>

            <Body>
                {
                   transactionData.map((t,i)=>(
                    <Transaction {...t} key={i}/>
                   )) 
                }
            </Body>

        </Container>
    )
}

export default RecentTransactions;