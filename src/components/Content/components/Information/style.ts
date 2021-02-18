import { Theme, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        flex: 1,
    },
    title: {
        borderBottom: '1px solid #B0AEAE',
    },
    groupInfor: {
        textAlign: 'center',
    },
    avatarGroup: {
        background: '#C4C4C4',
        borderRadius: '50%',
        height: 130,
        width: 130,
    },
    textPrimary: {
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
    },
    memberInfor: {
        display: 'flex',
        padding: '5px 9px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    memberAvatar: {
        background: theme.palette.greyCustom.dark,
        borderRadius: '50%',
        height: 55,
        width: 55,
        marginRight: 14,
        '&:hover': {
            background: theme.palette.greyCustom.light,
        },
    },
    memberName: {
        fontWeight: theme.typography.fwCustom.type2,
    },
    btnRemove: {
        border: '1px solid #000000',
        borderRadius: 15,
        fontSize: 14,
        fontFamily: "'Open Sans', sans-serif",
        textTransform: 'capitalize',
    },
    flex: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
}));
