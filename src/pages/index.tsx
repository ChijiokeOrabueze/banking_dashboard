import { useCurrentPage } from "../context/CurrentPageContext";
import styled from "styled-components";
import Dashboard from "./dashboard";
import BlankPage from "./page2";

const Container = styled.div`
    padding: 22px 32px 53px 22px;

`




const Pages = () => {
    const {currentPage} = useCurrentPage();

    return (
        <Container>
            {
                currentPage === 1 ?
                <Dashboard />:
                <BlankPage />
            }
        </Container>

    )



}

export default Pages;