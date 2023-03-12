import styled from "styled-components";


const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 16px;
    height: 35.1px;
    align-items: center;

`

const SideIcon = styled.div`
    width: 2.93px;
    height: 24.13px;
    background-color: #0177FD;
    border-top-right-radius:3px;
    border-bottom-right-radius:3px;

`

const MenuContainer = styled.div`

    width: 100%;
    height: 100%;
    background-color: #E5F1FF;
    border-radius: 4.3875px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 13px;
    cursor: pointer;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 11.7px;
    line-height: 18px;
    color: #0177FD;

`

const MenuItemContainer = styled.div`

    width: 100%;
    height: 100%;
    // border-radius: 4.3875px;
    display: flex;
    gap: 10px;
    align-items: center;
    // padding-left: 13px;

`

const AdditionalMenuInfo = styled.div`

    width: 15.36px;
    height: 15.36px;
    background-color: #0177FB;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;

`

interface SideBarMenuItemProps {
    menuItem: string;
    icon: string;
    additionalInfo?: string | number;
    isCurrentMenuItem: boolean;
    handleClick: ()=>void;
}



const SideBarMenuItem = ({menuItem, additionalInfo, isCurrentMenuItem, icon, handleClick}:SideBarMenuItemProps) => {
    const iconToDisplay = `${icon}${isCurrentMenuItem ? "-fill" : "" }`;
    return (
        <Container>
            <SideIcon style={{backgroundColor: isCurrentMenuItem ? "#0177FD": "transparent"}}/>
            <MenuContainer 
            onClick={handleClick}
            style={{backgroundColor: isCurrentMenuItem ? "#E5F1FF": "transparent"}}>
                <MenuItemContainer>
                    <img src={`/assets/side-bar/${iconToDisplay}.svg`} alt={menuItem} />
                    <p style={{
                        fontWeight: isCurrentMenuItem ? 500: 400,
                        color: isCurrentMenuItem ? "#0177FD" : "#131635"
                    }}>{menuItem}</p>
                </MenuItemContainer>
                <AdditionalMenuInfo style={{display: additionalInfo ? "flex": "none"}}>
                    {additionalInfo}
                </AdditionalMenuInfo>
            </MenuContainer>
        </Container>
    )
}

export default SideBarMenuItem;