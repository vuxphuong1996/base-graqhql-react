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
        fsCustom?: fontSizeTypography;
        fwCustom?: fontWeightTypography;
        lhCustom?: lineHeightTypography;
    }
    interface Typography {    
        fsCustom: fontSizeTypography;
        fwCustom: fontWeightTypography;
        lhCustom: lineHeightTypography;
    }
}

declare module '@material-ui/core/styles/createPalette' {
    interface greyCustomPalette {
        dark?: string;
        light?: string;
        lightWeight?: string;
    }
    interface PaletteOptions {    
        white?: string;
        black?: string;
        status?: string;
        warningCustom?: string;
        chatBackground?: string;
        primaryColor?: string;
        greyCustom?: greyCustomPalette;
    }
    interface Palette {    
        white: string;
        black: string;
        status: string;
        warningCustom: string;
        chatBackground: string;
        primaryColor: string;
        greyCustom: greyCustomPalette;
    }
}