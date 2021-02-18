import { Grid, Typography, Button } from '@material-ui/core';
import { useStyles } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export interface InformationProps {
    
}
 
const Information: React.FC<InformationProps> = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid container className={classes.title} alignItems="center">
                <Button>
                    <FontAwesomeIcon icon={faAngleRight} size="lg" className={classes.iconPlane}/>
                </Button>
                <Typography variant="h3">Information</Typography>
            </Grid>

            <Grid className={classes.groupInfor}>
                <Grid className={classes.avatarGroup}/>
                <Typography variant="h3" className={classes.textPrimary}>XL Group</Typography>
                <Typography variant="h3" className={classes.textPrimary}>13 participants</Typography>

                <Grid className={classes.memberInfor}>
                    <Grid className={classes.memberAvatar}/>
                    <Grid className={classes.flex}>
                        <Typography variant="body1" className={classes.memberName}>Teps Group</Typography>
                        <Button className={classes.btnRemove}>Remove</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.memberInfor}>
                    <Grid className={classes.memberAvatar}/>
                    <Grid className={classes.flex}>
                        <Typography variant="body1" className={classes.memberName}>Teps Group</Typography>
                        <Button className={classes.btnRemove}>Remove</Button>
                    </Grid>
                </Grid>
                <Grid className={classes.memberInfor}>
                    <Grid className={classes.memberAvatar}/>
                    <Grid className={classes.flex}>
                        <Typography variant="body1" className={classes.memberName}>Teps Group</Typography>
                        <Button className={classes.btnRemove}>Remove</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default Information;