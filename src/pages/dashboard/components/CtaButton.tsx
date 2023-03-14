import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15.36px;



`

const IconHolder = styled.div`
    width: 39.49px;
    height: 39.49px;
    border: 0.73125px solid #F2F2F2;
    border-radius: 7.3125px;
    display: flex;
    align-items: center;
    justify-content: center;


`

const Title = styled.p`

    font-family: 'Gilroy-SemiBold';
    font-size: 9.50625px;
    line-height: 11px;
    color: #798BA3;

`

interface CtaButtonProps {
    title: string;
    btnImage: string;
}



const CtaButton = ({title, btnImage}:CtaButtonProps) => {


    return (
        <Container>
            <IconHolder>
                <img src={`/assets/dashboard/${btnImage}.svg`} alt="" />
            </IconHolder>
            <Title>{title}</Title>
        </Container>
    )
}

export default CtaButton;