import { useCurrentPage, PageNumbers } from "../context/CurrentPageContext";
import styled from "styled-components";
import Dashboard from "./dashboard";
import BlankPage from "./page2";
import {menuItems} from "../templates/side-bar/side-bar.data";

const Container = styled.div`
    padding: 22px 32px 53px 22px;

`
const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    width: 825.58px;


`

const Header = styled.h2`
    font-family: 'Gilroy-SemiBold';
    font-size: 17.55px;
    line-height: 21px;
    color: #000000;

`

const ProfileTab = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 21px;
    padding-right: 12px;

    .profile {
        width: 26.49px;
        height: 24.13px;
    }

`;

const decidePageTitle = (pagenumber:PageNumbers) => {
    return menuItems[pagenumber-1].menuItem
} 




const Pages = () => {
    const {currentPage} = useCurrentPage();

    return (
        <Container>
            <NavBar>
                <Header>
                    {
                       decidePageTitle(currentPage) 
                    }
                </Header>
                <ProfileTab>
                    <img src="/assets/dashboard/gray-search.svg" alt="" />
                    <img src="/assets/dashboard/alert.svg" alt="" />
                    <img src="/assets/dashboard/icon2.svg" alt="" className="profile" />
                </ProfileTab>
            </NavBar>
            <div>
                {
                    currentPage === 1 ?
                    <Dashboard />:
                    <BlankPage />
                }
            </div>
        </Container>

    )



}

export default Pages;