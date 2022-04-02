declare module "@mui/material/styles/createPalette" {
    interface SimplePaletteColorOptions {
        title?: string;
    }
    interface Palette {
        additionalColor6: Palette["primary"];
        primaryButtonColor1: Palette["primary"];
        primaryButtonColor2: Palette["primary"];
        secondaryButtonColor1: Palette["primary"];
        secondaryButtonColor2: Palette["primary"];
        secondaryButtonColor3: Palette["primary"];
    }
    interface PaletteOptions {
        additionalColor6?: PaletteOptions["primary"];
        primaryButtonColor1?: PaletteOptions["primary"];
        primaryButtonColor2?: PaletteOptions["primary"];
        secondaryButtonColor1?: PaletteOptions["primary"];
        secondaryButtonColor2?: PaletteOptions["primary"];
        secondaryButtonColor3?: PaletteOptions["primary"];
    }
}
declare const adminPortalTheme: import("@mui/material/styles").Theme;
export default adminPortalTheme;
