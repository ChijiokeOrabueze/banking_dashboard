import styled from "styled-components";
import Stats from "../components/Stats";
import { statsData } from "../dashboard.data";


const Container = styled.div`
    width: 590.12px;
    height: 183px;
    background-color: #FFFFFF;
    box-shadow: 0px 14.625px 80.4375px -21.9375px rgba(43, 37, 37, 0.12);
    border-radius: 10.2375px;
    padding: 42px 33px;
    display: flex;
    flex-direction: column;
    gap: 30px;


`
const Header = styled.h2`
    font-family: 'Gilroy-SemiBold';
    font-size: 16.0875px;
    line-height: 19px;

    color: #343744;

`
const Body = styled.div`
    display: flex;
    gap: 48px;

`


const Statistics = () => {

    return (
        <Container>
            <Header>Statistics</Header>

            <Body>
                {
                    statsData.map((data,i)=>(
                        <Stats {...data} key={i}/>
                    ))
                }
            </Body>

        </Container>
    )
}

export default Statistics;