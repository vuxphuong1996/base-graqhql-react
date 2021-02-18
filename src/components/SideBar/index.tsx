import { Grid } from "@material-ui/core"
import { useStyles } from './style';
import { Logo, UserInfor, ChatList } from './components';
export interface SideBarProps {
    
}

const SideBar: React.FC<SideBarProps> = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Logo />
            <UserInfor />
            <ChatList />
        </Grid>
    );
}
 
export default SideBar;