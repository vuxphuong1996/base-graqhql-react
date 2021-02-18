import { Theme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        padding: '20px 0 10px',
        borderBottom: '1px solid #B0AEAE',
    },
    textPrimary: {
        fontSize: theme.typography.fsCustom.type3,
        lineHeight: theme.typography.lhCustom.type3,
    },
}));
