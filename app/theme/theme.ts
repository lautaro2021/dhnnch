type PaletteType =
    | "white"
    | "grey"
    | "primaryBlue"
    | "greyText"
    | "border"
    | "lightGrey";

export const PALETTE: Record<PaletteType, string> = {
    white: "#FFFFFF",
    grey: "#212121",
    lightGrey: "#E0E0E0",
    primaryBlue: "#0451DD",
    greyText: "#616161",
    border: "#E1E5EC",
};
