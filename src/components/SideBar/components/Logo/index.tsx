import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './style';

export interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.root}
        >
            <Typography variant="h3" className={classes.textPrimary}>LOGO</Typography>
            <FontAwesomeIcon icon={faCog} />
        </Grid>
    );
};

export default Logo;
