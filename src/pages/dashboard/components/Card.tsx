import styled from "styled-components";

const CardContainer = styled.div`

`
const Header = styled.h2`
    font-family: 'Gilroy-SemiBold';
    font-size: 17.55px;
    line-height: 21px;
    color: #000000;

`

const Card = () => {

    return (

        <CardContainer>
            <Header>My Card</Header>
        </CardContainer>

    )


}


export default Card;