declare module "@mui/material/styles/createPalette" {
    interface SimplePaletteColorOptions {
        title?: string;
    }
    interface Palette {
        primaryButtonColor1: Palette["primary"];
        primaryButtonColor2: Palette["primary"];
        secondaryButtonColor1: Palette["primary"];
        secondaryButtonColor2: Palette["primary"];
        secondaryButtonColor3: Palette["primary"];
    }
    interface PaletteOptions {
        primaryButtonColor1?: PaletteColorOptions;
        primaryButtonColor2?: PaletteColorOptions;
        secondaryButtonColor1?: PaletteColorOptions;
        secondaryButtonColor2?: PaletteColorOptions;
        secondaryButtonColor3?: PaletteColorOptions;
    }
}
declare const mpfaPortalTheme: import("@mui/material/styles").Theme;
export default mpfaPortalTheme;
