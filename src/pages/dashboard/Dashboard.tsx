import { Container } from "./dashboard.styles";
import DashboardLeftSide from "./templates/DashboardLeftSide";
import DashboardRightSide from "./templates/DashboardRightSide";


const Dashboard = () => {

    return (
        <Container>
            <DashboardLeftSide />
            <DashboardRightSide />
        </Container>
    )


}

export default Dashboard;