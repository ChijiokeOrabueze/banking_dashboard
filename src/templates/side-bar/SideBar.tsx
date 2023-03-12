import Logo from "../../components/Logo";
import SideBarMenuItem from "../../components/SideBarMenuItem";
import { useCurrentPage } from "../../context/CurrentPageContext";
import { footMenuItems, menuItems } from "./side-bar.data";
import { Container, MenuItems, SideBarTop } from "./side-bar.style";



const SideBar = () => {
    const {currentPage, setCurrentPage} = useCurrentPage();

    return (
        <Container>
            <SideBarTop>
                <Logo />
                <MenuItems>
                    {
                        menuItems.map((item)=>(
                            <SideBarMenuItem {...item} 
                                key={item.pageNum}
                                isCurrentMenuItem={currentPage === item.pageNum}
                                handleClick={()=>{currentPage !== item.pageNum && setCurrentPage(item.pageNum)}}
                            /> 
                        ))
                    }
                </MenuItems>
            </SideBarTop>
            <MenuItems>
                {
                    footMenuItems.map((item)=>(
                        <SideBarMenuItem {...item} 
                            key={item.pageNum}
                            isCurrentMenuItem={currentPage === item.pageNum}
                            handleClick={()=>{currentPage !== item.pageNum && setCurrentPage(item.pageNum)}}
                        /> 
                    ))
                }
            </MenuItems>
        </Container>
    )
}

export default SideBar;