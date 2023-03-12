import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 23px;

`
const Header = styled.h2`
    font-family: 'Gilroy-SemiBold';
    font-size: 17.55px;
    line-height: 21px;
    color: #000000;

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

const Card = () => {

    return (

        <Container>
            <Header>My Card</Header>
            <CardContainer>
                <img src="/assets/dashboard/card.png" alt="" />
                <CardOverlay>
                    <div>
                        <CardText 
                            fontSize="8.775" 
                            lineHeight= "10">Name</CardText>
                        <CardText 
                            fontSize="13.1625" 
                            lineHeight= "15">Carla Rosser</CardText>
                    </div>
                    <OverLayBottom>
                        <div>
                            <CardText 
                                fontSize="10.2375" 
                                lineHeight= "12">1200 01452 54215</CardText>
                            <CardText 
                                fontSize="8.04375" 
                                lineHeight= "9">08/23</CardText>
                        </div>
                        <img src="/assets/dashboard/visa.svg" alt="" />

                    </OverLayBottom>
                </CardOverlay>
            </CardContainer>
        </Container>

    )


}


export default Card;