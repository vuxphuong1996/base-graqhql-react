import { makeStyles, InputBase } from '@material-ui/core';
import { styled, Theme } from '@material-ui/core/styles';

export const StyledInput = styled(InputBase)({
    height: 60,
    background: '#FFF',
    borderRadius: 12,
    padding: '12px 59px 12px 56px',
});

const textSecondary = {
    borderRadius: '0px 12px 12px 12px',
    padding: 12,
    height: 50,
}

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    root: {
        flex: 3,
        background: theme.palette.chatBackground,
        borderRadius: 12,
    },
    title: {
        borderBottom: '1px solid #B0AEAE',
        padding: '15px 30px 10px',
        '& h3': {
            fontSize: theme.typography.fsCustom.type2,
        },
    },
    btnAddToGroup: {
        background: theme.palette.primaryColor,
        borderRadius: 12,
        padding: '15px 29px',
        color: theme.palette.white,
        textTransform: 'capitalize',
        fontWeight: 700,
        '&:hover': {
            background: theme.palette.primaryColor,
            boxShadow: '0 0 3px #3D20C8',
        },
    },
    body: {},
    wrapMessage: {
        height: 'calc(100vh - 161px)',
    },
    wrapInput: {
        position: 'relative',
    },
    iconSmile: {
        position: 'absolute',
        left: 22,
        top: 21,
    },
    iconPaperClip: {
        position: 'absolute',
        top: 21,
        right: 80,
    },
    iconPlane: {
        color: theme.palette.white,
    },
    btnSend: {
        position: 'absolute',
        right: 10,
        top: 8,
        height: 45,
        minWidth: 50,
        borderRadius: 12,
        background: theme.palette.primaryColor,
    },
    user: {
        
    },
    yourSelf: {
        float: 'right',
    },
    avatar: {
        background: theme.palette.greyCustom.dark,
        borderRadius: '50%',
        height: 55,
        width: 55,
        marginRight: 14,
    },
    textPrimary: {
        marginBottom: 5,
    },
    userTextSecondary: {
        background: theme.palette.white,
        ...textSecondary,
    },
    yourSelfTextSecondary: {
        textAlign: 'right',
        background: '#CAD3E2',
        ...textSecondary,
    },
    oldTimeAlert: {
        marginLeft: 70,
        position: 'relative',
        '& p': {
            position: 'relative',
            width: '208px',
            margin: '0 auto',
            textAlign: 'center',
            background: theme.palette.chatBackground,
            zIndex: 2,
            fontSize: 14,
        },
    },
    line: {
        width: '100%',
        border: '1px solid #B0AEAE',
        position: 'absolute',
        left: 0,
        top: 12,
        zIndex: 1,
    },
    typing: {
        marginLeft: 56,
        marginBottom: 10,
    },
}));
