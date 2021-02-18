import { InputBase } from '@material-ui/core';
import { styled, makeStyles, Theme } from '@material-ui/core/styles';

export const StyledInput = styled(InputBase)({
    height: 60,
    background: '#EAEAEA',
    borderRadius: 12,
    padding: '12px 59px 12px 22px',
});

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
    wrapSearchInput: {
        position: 'relative',
        marginBottom: 28,
    },
    iconSearch: {
        position: 'absolute',
        right: 20,
        top: 18,
        color: theme.palette.greyCustom.lightWeight,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    iconSort: {
        color: theme.palette.greyCustom.lightWeight,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    wrapChat: {
        padding: '20px 10px',
        cursor: 'pointer',
        borderRadius: 8,
        '&:hover': {
            background: theme.palette.greyCustom.light,
        }
    },
    activeChat: {
        background: theme.palette.greyCustom.light,
    },
    avatar: {
        background: theme.palette.greyCustom.dark,
        borderRadius: '50%',
        height: 55,
        width: 55,
        marginRight: 14,
    },
    message: {
        flex: 2,
    },
    timeAndBadged: {
        flex: 1,
    },
    textPrimary: {
        fontSize: 16,
        marginBottom: 8,
        overflow: 'hidden'
    },
    textSecondary: {
        color: '#939CAC',
        overflow: 'hidden'
    },
    time: {
        fontSize: 14,
        textAlign: 'right',
        marginBottom: 5,
    },
    badged: {
        background: theme.palette.greyCustom.lightWeight,
        borderRadius: '50%',
        fontSize: 12,
        height: 24,
        width: 24,
        float: 'right',
        textAlign: 'center',
        padding: '5px 3px 3px',
    },
}));
