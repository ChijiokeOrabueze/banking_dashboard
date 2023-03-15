import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;

    img, .image-box {
        width: 23.4px;
        height: 23.4px;
    }

    .image-box {
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFEFF0;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 800;
        font-size: 8.04375px;
        line-height: 10px;
        color: #FE6470;
    }

`

const ActiveIndicator = styled.div`
    width: 19.01px;
    height: 1.46px;
    border-radius: 6.58125px;

`


interface AvatarProps {
    image: string;
    isCurrent: boolean;
    isInitial?: boolean;
}


const Avatar = ({image, isCurrent, isInitial}:AvatarProps) => {

    return (
        <Container>
            {
                isInitial ?
                <div className="image-box">{image}</div>:
                <img src={image} alt="" />
            }
            <ActiveIndicator style={{backgroundColor: isCurrent ? "#0177FB": "transparent"}}/>
        </Container>
    )
}


export default Avatar;