import { Grid, Container, Typography, Button } from '@material-ui/core';
import { useStyles, StyledInput } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile, faPaperclip, faPaperPlane, faUserPlus } from '@fortawesome/free-solid-svg-icons';

export interface ChatProps {
    
}
 
const Chat: React.FC<ChatProps> = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.root}>
            <Grid className={classes.title}>
                <Grid container justify="space-between" alignItems="center">
                    <Typography variant="h3">Group Chat</Typography>
                    <Button className={classes.btnAddToGroup} startIcon={<FontAwesomeIcon icon={faUserPlus} size="lg"/>}>
                        Add to group
                    </Button>
                </Grid>
            </Grid>

            <Grid className={classes.body}>
                <Container>
                    <Grid className={classes.wrapMessage}>
                        <Grid className={classes.oldTimeAlert}>
                            <Typography variant="body1">Yesterday</Typography>
                            <Grid className={classes.line}></Grid>
                        </Grid>
                        <Grid container className={classes.user}>
                            <Grid className={classes.avatar}/>
                            <Grid>
                                <Typography variant="body1" className={classes.textPrimary}>Teps, 11:50 AM</Typography>
                                <Typography variant="body1" className={classes.userTextSecondary}>Test text</Typography>
                            </Grid>
                        </Grid>
                        <Grid className={classes.yourSelf}>
                            <Typography variant="body1" className={classes.textPrimary}>Teps, 11:50 AM</Typography>
                            <Typography variant="body1" className={classes.yourSelfTextSecondary}>Test text</Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" className={classes.typing}>Someone is typing...</Typography>

                    <Grid className={classes.wrapInput}>
                        <StyledInput placeholder="Type a message" fullWidth/>
                        <FontAwesomeIcon icon={faSmile} size="lg" className={classes.iconSmile}/>
                        <FontAwesomeIcon icon={faPaperclip} size="lg" className={classes.iconPaperClip}/>
                        <Button className={classes.btnSend}>
                            <FontAwesomeIcon icon={faPaperPlane} size="lg" className={classes.iconPlane}/>
                        </Button>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    );
}
 
export default Chat;