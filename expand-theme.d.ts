import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTypography' {
    interface fontSizeTypography {
        type1?: number;
        type2?: number;
        type3?: number;
    }
    interface fontWeightTypography {
        type1?: number;
        type2?: number;
        type3?: number;
    }
    interface lineHeightTypography {
        type1?: string;
        type2?: string;
        type3?: string;
    }
    interface TypographyOptions {    
        fsCustom?: fontSizeTypographyOptions;
        fwCustom?: fontWeightTypography;
        lhCustom?: lineHeightTypography;
    }
    interface Typography {    
        fsCustom: fontSizeTypographyOptions;
        fwCustom: fontWeightTypography;
        lhCustom: lineHeightTypography;
    }
}

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {    
        white?: string;
        black?: string;
    }
    interface Palette {    
        white: string;
        black: string;
    }
}