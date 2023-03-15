import { useState } from "react";
import styled from "styled-components";
import Avatar from "../../../components/Avatar";
import { FlexApart } from "../../../styles";

const Container = styled(FlexApart)`

    .cursor {
        cursor: pointer;
        margin-top: -10px;
    }

    .image-box {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

const ImageGalleryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

`

const RecipientsContainer = styled.div`
    margin-bottom: 24px;

    h2 {
        font-family: 'Gilroy-SemiBold';
        font-size: 10.2375px;
        line-height: 12px;
        color: #7D8DA6;
        margin-bottom: 20px;
    }

`


interface RecipientsGallery {
    recipients: {
        image: string;
        isInitial: boolean;
        key: number;
    }[]
    
}

const RecipientsGallery = ({recipients}:RecipientsGallery) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [currentLocation, setCurrentLocation] = useState(0);

    const recipientsToShow = recipients.slice(currentLocation,5+currentLocation);

    const handleClick = () => {

        if (currentImage < (recipients.length-1)){
            setCurrentImage(currentImage+1);
        }else {
            setCurrentImage(0);
        }

        if (recipients.length > 5){

            if (currentImage === (recipients.length-1)) {
                setCurrentLocation(0);
            }else if (currentImage >= 4) {
                setCurrentLocation(currentLocation+1);
            }
        }
        
    }

    return (
        <Container>
            <ImageGalleryContainer>
                {
                    recipientsToShow.map((item)=>(
                        <Avatar {...item} isCurrent={item.key===currentImage}/>
                    ))
                }
            </ImageGalleryContainer>
            <img onClick={handleClick} className="cursor" src="/assets/dashboard/arrow-right.svg" alt="" />
        </Container>
    )
}


const Recipients = ({recipients}:RecipientsGallery) => {

    return (
        <RecipientsContainer>
            <h2>{`${recipients.length} recipients`}</h2>
            <RecipientsGallery recipients={recipients}/>
        </RecipientsContainer>
    )
}


export default Recipients;