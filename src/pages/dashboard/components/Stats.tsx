import styled from "styled-components";


const Container = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;


`

const SideContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .stats-value {
        font-family: 'Gilroy-SemiBold';
        font-size: 13.8938px;
        line-height: 16px;
        color: #333333;

    }

    .stats-title {
        font-family: 'Gilroy-Medium';
        font-size: 10.2375px;
        line-height: 12px;
        color: #798BA3;

    }
`

interface StatsProps {
    icon: string;
    value: string;
    title: string;
}

const Stats = ({icon, value, title}:StatsProps) => {

    return (
        <Container>
            <img src={`/assets/dashboard/${icon}.svg`} alt="" />
            <SideContent>
                <p className="stats-value">{value}</p>
                <p className="stats-title">{title}</p>
            </SideContent>
        </Container>
    )



}





export default Stats;