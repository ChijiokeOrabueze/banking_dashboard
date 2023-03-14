import styled from "styled-components"


const Container = styled.div`
    width: 57.04px;
    height: 21.94px;
    border-radius: 3.65625px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Gilroy-SemiBold';
    font-size: 10.2375px;
    line-height: 12px;


`

export type Status = "Success" | "Pending";



const StatusBar = ({status}:{status:Status}) => {

    const statusColor = {
        backgroundColor: status === "Success" ? "#EBFFF3" : "#FFF1ED",
        color: status === "Success" ? "#61BB84" : "#FFAA90",
    }

    return (
        <Container style={statusColor}>
            <p>{status}</p>
        </Container>
    )
}

export default StatusBar;