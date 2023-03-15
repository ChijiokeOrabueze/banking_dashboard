import styled from "styled-components";
import { FlexApart } from "../../../styles";
import Stats from "./Stats";


const Container = styled.div`
    // width: 206.21px;
    // height: 130.16px;
    // background-color: #FFFFFF;
    // box-shadow: 0px 3.65625px 16.8187px rgba(0, 0, 0, 0.06);
    // border-radius: 8.04375px;
    // padding: 30px 14px 0 14px;
    // position: relative;
    display: flex;
    gap: 15px;

    .deviate {
        transform:translateX(-5px);
    }

    .double-deviate {
        transform:translateX(-10px);
    }


`

const ImageContainer = styled.div`
    display: flex;

`

const ImageGalleryBody = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    padding: 14px 14px 0 14px;
    background-color: #FFFFFF;
    border-radius: 8.04375px;

`

const ImageGalleryDesign = styled.div`
    width: 178.32px;
    height: 109.84px;
    background: #F3F3F3;
    box-shadow: 0px 16.8187px 32.9062px rgba(0, 0, 0, 0.1);
    border-radius: 13.8938px;

`

const ImageGalleryHeading = styled.p`

    font-family: 'Gilroy-Medium';
    font-size: 11.7px;
    line-height: 14px;
    color: #7C8CA6;

    span {
        color: #000;
    }


`

const Guest = styled(FlexApart)`




`

const Image = styled.div`
    width: 21.94px;
    height: 21.94px;
    background-color: #FFFFFF;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 17.55px;
        height: 17.55px;
    }

`

const CountBox = styled.div`
    width: 26.33px;
    height: 26.33px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.73125px dashed #DDE5F0;
    font-family: 'Gilroy-Medium';
    font-size: 10.9688px;
    line-height: 13px;

    color: #0176FA;


`



const ImageGallery = ({images}:{images:string[]}) => {

    const othersToDisplay = images.slice(1,3);
    const remImgCount = images.length - 3;

    return (
        <Container>
            <ImageContainer>
                <Image>
                    <img src={images[0]} alt="" />
                </Image>
                {
                    othersToDisplay.map((img,i)=>(
                        <Image className={i === 0 ? "deviate": "double-deviate"} key={i}>
                            <img src={img} alt="" />
                        </Image>
                    ))
                }
            </ImageContainer>
            <CountBox style={{display: remImgCount > 0 ? "flex" : "none"}}>{`+${remImgCount}`}</CountBox>
        </Container>
    )
}

export default ImageGallery;