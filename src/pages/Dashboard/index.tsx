import { Grid } from '@material-ui/core';
import { SideBar, Content } from 'components';

const Dashboard: React.FC = () => {
    return (
        <Grid container>
            <SideBar />
            <Content />
        </Grid>
    );
};

export default Dashboard;
