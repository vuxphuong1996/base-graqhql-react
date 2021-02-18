import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAlignRight } from '@fortawesome/free-solid-svg-icons';
import { StyledInput, useStyles } from './style';

export interface ChatListProps {
    
}
 
const ChatList: React.SFC<ChatListProps> = () => {
    const classes = useStyles();
    return (
        <Grid>
            <Grid className={classes.wrapSearchInput}>
                <StyledInput placeholder="Search" fullWidth/>
                <FontAwesomeIcon icon={faSearch} size="lg" className={classes.iconSearch}/>
            </Grid>

            <Grid container justify="space-between">
                <Typography variant="body1" className={classes.textPrimary}>Recent chats</Typography>
                <FontAwesomeIcon icon={faAlignRight} size="lg" className={classes.iconSort}/>
            </Grid>

            <Grid container className={classes.wrapChat}>
                <Grid className={classes.avatar}/>
                <Grid className={classes.message}>
                    <Typography variant="h3" className={classes.textPrimary}>Real member</Typography>
                    <Typography variant="body1" className={classes.textSecondary}>Text thu text</Typography>
                </Grid>
                <Grid className={classes.timeAndBadged}>
                    <Typography variant="body1" className={classes.time}>10:15 AM</Typography>
                    <Grid className={classes.badged}>99+</Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.wrapChat}>
                <Grid className={classes.avatar}/>
                <Grid className={classes.message}>
                    <Typography variant="h3" className={classes.textPrimary}>Real member</Typography>
                    <Typography variant="body1" className={classes.textSecondary}>Text thu text</Typography>
                </Grid>
                <Grid className={classes.timeAndBadged}>
                    <Typography variant="body1" className={classes.time}>10:15 AM</Typography>
                    <Grid className={classes.badged}>99+</Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.wrapChat}>
                <Grid className={classes.avatar}/>
                <Grid className={classes.message}>
                    <Typography variant="h3" className={classes.textPrimary}>Real member</Typography>
                    <Typography variant="body1" className={classes.textSecondary}>Text thu text</Typography>
                </Grid>
                <Grid className={classes.timeAndBadged}>
                    <Typography variant="body1" className={classes.time}>10:15 AM</Typography>
                    <Grid className={classes.badged}>99+</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
 
export default ChatList;