import styled from "styled-components";
import GroupParty from "../components/GroupParty";
import Recipients from "../components/Recipients";
import { recipientsData } from "../dashboard.data";


const Container = styled.div`
    


`

// const GroupParty = styled.div`
//     width: 206.21px;
//     height: 130.16px;
//     left: 817.54px;
//     top: 196.91px;
//     background-color: #FFFFFF;
//     box-shadow: 0px 3.65625px 16.8187px rgba(0, 0, 0, 0.06);
//     border-radius: 8.04375px;
//     padding: 14px 14px 0 14px;


// `

const GroupPartyBody = styled.div`
    width: 178.32px;
    height: 109.84px;
    left: 831.42px;
    top: 227.25px;

    background: #F3F3F3;
    box-shadow: 0px 16.8187px 32.9062px rgba(0, 0, 0, 0.1);
    border-radius: 13.8938px;

`

const GroupPartyHeading = styled.p`

    font-family: 'Gilroy-Medium';
    font-size: 11.7px;
    line-height: 14px;
    color: #7C8CA6;

    span {
        color: #000;
    }


`



const RecentContacts = () => {

    return (
        <Container>
            <Recipients recipients={recipientsData}/>
            <GroupParty />


        </Container>
    )
}

export default RecentContacts;