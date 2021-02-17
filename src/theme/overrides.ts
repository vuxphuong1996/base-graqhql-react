const overrides = {
    MuiContainer: {
        root: {
            paddingLeft: '15px',
            paddingRight: '15px',
            '@media (min-width: 768px)': {
                paddingLeft: '35px',
                paddingRight: '35px',
            },
        },
    },
    MuiTypography: {
        body1: {
            fontFamily: "'Open Sans', sans-serif",
        },
        h3: {
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 700,
        },
    },
};

export default overrides;
