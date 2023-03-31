import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;

`

const CardContainer = styled.div`
    position: relative;

`
const CardOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 205.48px;
    height: 108.13px;

    // background-color: #0177FB;
    border-radius: 11.7px;
    padding: 11px 17px 7px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

`

const CardText = styled.h2`
    font-family: 'Gilroy-SemiBold';
    font-size: ${(props:{fontSize: string, lineHeight: string})=>props.fontSize}px;
    line-height: ${(props:{lineHeight: string})=>props.lineHeight}px;
    color: #FFFFFF;

`

const OverLayBottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    

`

interface CardProps {
    name: string;
    cardNumber: string;
    cardExpiry: string;
}

const Card = ({name, cardExpiry, cardNumber}:CardProps) => {

    return (

        <Container>
            {/* <Header>My Card</Header> */}
            <CardContainer>
                <img src="/assets/dashboard/card.png" alt="" />
                <CardOverlay>
                    <div>
                        <CardText 
                            fontSize="8.775" 
                            lineHeight= "10">Name</CardText>
                        <CardText 
                            fontSize="13.1625" 
                            lineHeight= "15">{name}</CardText>
                    </div>
                    <OverLayBottom>
                        <div>
                            <CardText 
                                fontSize="10.2375" 
                                lineHeight= "12">{cardNumber}</CardText>
                            <CardText 
                                fontSize="8.04375" 
                                lineHeight= "9">{cardExpiry}</CardText>
                        </div>
                        <img src="/assets/dashboard/visa.svg" alt="" />

                    </OverLayBottom>
                </CardOverlay>
            </CardContainer>
        </Container>

    )


}


export default Card;