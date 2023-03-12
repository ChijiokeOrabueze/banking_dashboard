import styled from "styled-components";


const Container = styled.div`
    display: flex;
    gap: 11px;
    margin-left: 21px;
    align-items: center;

`

const CompanyName = styled.p`

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 11.7px;
    line-height: 18px;
    color: #2F2F32;

`



const Logo = () => {

    return (
        <Container>
            <img src="/assets/logo.svg" alt="" />
            <CompanyName>OpenPay</CompanyName>
        </Container>
    )
}

export default Logo;