import { Theme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        textAlign: 'center',
        padding: '23px 0',
    },
    avatar: {
        background: '#C4C4C4',
        borderRadius: '50%',
        height: 130,
        width: 130,
        margin: '0 auto',
    },
    textPrimary: {
        marginTop: 18,
        marginBottom: 13,
        fontSize: theme.typography.fsCustom.type2,
        lineHeight: theme.typography.lhCustom.type2,
    },
    textSecondary: {
        color: '#397D72',
        fontWeight: theme.typography.fwCustom.type2,
        lineHeight: theme.typography.lhCustom.type2,
    },
    status: {
        background: '#BFE7E2',
        borderRadius: 8,
        width: 135,
        height: 35,
        margin: '0 auto',
        padding: '0 19px',
    },
}));
