import { Grid } from '@material-ui/core';
import { SideBar, Content } from 'components';
import { useStyles } from './style';

const Dashboard: React.FC = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <SideBar />
            <Content />
        </Grid>
    );
};

export default Dashboard;
