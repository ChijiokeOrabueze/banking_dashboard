import styled from "styled-components";
import { FlexApart } from "../../../styles";
import ImageGallery from "./ImageGallery";
import Stats from "./Stats";


const Container = styled.div`
    width: 206.21px;
    height: 130.16px;
    background-color: #FFFFFF;
    box-shadow: 0px 3.65625px 16.8187px rgba(0, 0, 0, 0.06);
    border-radius: 8.04375px;
    padding: 30px 14px 0 14px;
    position: relative;


`

const GroupPartyBody = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 14px 14px 0 14px;
    background-color: #FFFFFF;
    border-radius: 8.04375px;
    // display: flex;
    // flex-direction: column;
    // gap: 20px;

`

const GroupPartyDesign = styled.div`
    width: 178.32px;
    height: 109.84px;
    background: #F3F3F3;
    box-shadow: 0px 16.8187px 32.9062px rgba(0, 0, 0, 0.1);
    border-radius: 13.8938px;

`

const GroupPartyHeading = styled.p`

    font-family: 'Gilroy-Medium';
    font-size: 11.7px;
    line-height: 14px;
    color: #7C8CA6;
    margin-bottom: 11px;

    span {
        color: #000;
    }


`

const Guest = styled(FlexApart)`
    margin-top: 24px;



`



const GroupParty = () => {

    return (
        <Container>

            <GroupPartyDesign />
            <GroupPartyBody>
                <GroupPartyHeading>Group <span>Party</span></GroupPartyHeading>
                <FlexApart>
                    <ImageGallery images={[
                        "/assets/dashboard/dakota.svg",
                        "/assets/dashboard/anatalia.svg",
                        "/assets/dashboard/dakota.svg",
                        "/assets/dashboard/dakota.svg",
                        "/assets/dashboard/dakota.svg"]}/>
                    <img src="/assets/dashboard/pending-message.svg" alt="" />
                </FlexApart>
                <Guest>
                    <Stats icon="dakota" title="$ 450.00" value="Dakota Milk"/>
                    <img src="/assets/dashboard/arrow-right.svg" alt="" />
                </Guest>
            </GroupPartyBody>

        </Container>
    )
}

export default GroupParty;