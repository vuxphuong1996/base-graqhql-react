import { Grid, Typography } from "@material-ui/core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './style';

export interface UserInforProps {
    
}
 
const UserInfor: React.FC<UserInforProps> = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid className={classes.avatar}/>
            <Typography variant="h3" className={classes.textPrimary}>Badboy XL Group</Typography>
            <Grid container justify="space-around" alignItems="center" className={classes.status}>
                <Typography variant="body1" className={classes.textSecondary}>available</Typography>
                <FontAwesomeIcon icon={faAngleDown} />
            </Grid>
        </Grid>
    );
}
 
export default UserInfor;